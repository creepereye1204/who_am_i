# views.py
from django.core.cache import cache
from .models import ProjectInfo, ReadMe, ContentMetadata, SkillMapping
from .serializers import ProjectsListSerializer, ReadMeSerializer
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework import status
from rest_framework.decorators import api_view
from django.db import transaction
from .utils import SubView


from django.shortcuts import render, redirect
from allauth.socialaccount.models import SocialAccount
from django.http import JsonResponse
from allauth.socialaccount.models import SocialAccount


# create
@api_view(["POST"])
@transaction.atomic
def create_project(request, *args, **kwargs):

    return Response({"message": "Project added successfully."}, status=status.HTTP_201_CREATED)
    # try:

    #     project_data = {
    #         "project_name": request.data.get("projectName"),
    #         "end_at": request.data.get("endAt"),
    #         "describe": request.data.get("describe"),
    #         "link": request.data.get("link"),
    #     }
    #     if not project_data["project_name"]:
    #         return Response({"error": "Project title is required."}, status=status.HTTP_400_BAD_REQUEST)

    #     project = ProjectInfo.objects.create(**project_data)

    #     files = request.data.get("files", [])
    #     if files:
    #         try:
    #             SubView.create_readme(files=files, project_id=project.id)
    #         except ValidationError as e:
    #             return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

    #     contents = request.data.get("contents", [])
    #     SubView.create_contents(contents=contents, project_id=project.id)

    #     skill_names = request.data.get("skill_names", [])
    #     try:
    #         SubView.create_skill_mappings(project_id=project.id, skill_names=skill_names)
    #     except ValidationError as e:
    #         return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

    #     cache.set("projects", SubView.list_projects(), timeout=False)
    #     return Response({"message": "Project added successfully."}, status=status.HTTP_201_CREATED)

    # except Exception as e:

    #     return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["POST"])
def create_readme(request, *args, **kwargs):
    try:
        project_id = request.data.get("project_id")
        files = request.data.get("files", [])
        SubView.create_readme(project_id, files)

        return Response({"message": "Readme updated successfully."}, status=status.HTTP_200_OK)
    except ValueError as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# @api_view(["POST"])
# def create_contents(request, *args, **kwargs):
#     project_id = request.data.get("project_id")
#     contents = request.data.get("contents", [])
#     SubView.create_contents(project_id=project_id, contents=contents)


# @api_view(["POST"])
# def create_skills(request, *args, **kwargs):
#     project_id = request.data.get("project_id")
#     skill_names = request.data.get("skill_names", [])
#     try:
#         SubView.create_skill_mappings(project_id=project_id, skill_names=skill_names)
#         return Response({"message": "Skills added successfully."}, status=status.HTTP_201_CREATED)
#     except ValidationError as e:
#         return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
#     except Exception as e:
#         return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# read
@api_view(["GET"])
def list_projects(request, *args, **kwargs):

    projects = cache.get("projects")
    if projects is None:
        try:
            projects = SubView.list_projects()
            cache.set("projects", projects, timeout=False)
            return Response(projects, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    return Response(projects, status=status.HTTP_200_OK)


@api_view(["GET"])  # TODO: SUBVIEW에 캡슐화 및 캐싱 적용 해야됨
def retrieve_readme(request, project_id, *args, **kwargs):
    cache_key = f"readme_{project_id}"
    readme = cache.get(cache_key)
    if readme is None:
        try:

            readme = ReadMe.objects.filter(project_id=project_id).first()
            serializer = ReadMeSerializer(readme)
            cache.set(cache_key, serializer.data, timeout=None)
            return Response(serializer.data, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    return Response(readme, status=status.HTTP_200_OK)


# delete


@api_view(["DELETE"])
def delete_readme(request, *args, **kwargs):
    try:
        project_id = request.data.get("project_id", None)
        SubView.delete_readme(project_id=project_id)

        return Response({"message": "Readme deleted successfully."}, status=status.HTTP_204_NO_CONTENT)

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["DELETE"])
def delete_project(request, *args, **kwargs):
    try:
        project_id = request.data.get("project_id", None)
        SubView.delete_readme(project_id=project_id)
        # 해당 프로젝트를 필터링하여 가져오기
        project = ProjectInfo.objects.filter(project_id=project_id)  # project_id가 아니라 id로 필터링

        if not project.exists():
            return Response({"error": "Project not found."}, status=status.HTTP_404_NOT_FOUND)

        # 프로젝트 삭제
        project.delete()

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# TODO: 나머지도 기능 구현하기


# update
@api_view(["POST"])
def update_project(request, *args, **kwargs):
    try:
        project_id = request.data.get("project_id", None)
        project = ProjectInfo.objects.get(project_id=project_id)
        project_data = {
            "project_name": request.data.get("projectName", project.project_name),
            "start_at": request.data.get("startAt", project.end_at),
            "end_at": request.data.get("endAt", project.end_at),
            "describe": request.data.get("describe", project.describe),
            "link": request.data.get("link", project.link),
        }
        skill_ids = request.data.get("skillIds", [])

        if not project_data["project_name"]:
            return Response({"error": "Project title is required."}, status=status.HTTP_400_BAD_REQUEST)

        for key, value in project_data.items():
            setattr(project, key, value)
        project.save()

        ContentMetadata.objects.filter(project_id=project.id).delete()
        SkillMapping.objects.filter(project_id=project_id).delete()
        for skill_id in skill_ids:
            SubView.create_skill_mappings(project_id=project_id, skill_id=skill_id)

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
