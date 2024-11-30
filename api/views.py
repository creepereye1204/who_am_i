# views.py
from django.core.cache import cache
from .models import SkillSet, ProjectInfo, ContentMetadata, SkillMapping, ReadMe
from .serializers import SkillSetSerializer, ProjectsListSerializer, ReadMeSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.db import transaction
from .utils import SubView


@api_view(["POST"])
@transaction.atomic
def create_project(request, *args, **kwargs):
    try:

        project_data = {
            "project_name": request.data.get("projectName"),
            "end_at": request.data.get("endAt"),
            "describe": request.data.get("describe"),
            "link": request.data.get("link"),
            "readme_file": request.data.get("readMe"),
        }
        if not project_data["project_name"]:
            return Response({"error": "Project title is required."}, status=status.HTTP_400_BAD_REQUEST)

        project = ProjectInfo.objects.create(**project_data)
        contents = request.data.get("contents", [])
        skill_names = request.data.get("skill_names", [])

        for content in contents:
            ContentMetadata.objects.create(project_id=project, content=content)

        for skill_name in skill_names:
            try:
                skill = SkillSet.objects.get(skill_name=skill_name)
                SkillMapping.objects.create(project_id=project, skill_name=skill)
            except skill.DoesNotExist:
                return Response({"error": f"Skill '{skill_name}' does not exist."}, status=status.HTTP_400_BAD_REQUEST)

        return Response({"message": "Project added successfully."}, status=status.HTTP_201_CREATED)

    except Exception as e:

        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["GET"])
def list_projects(request, *args, **kwargs):
    cache_key = "projects_list"
    projects = cache.get(cache_key)
    if projects is None:
        try:
            projects = ProjectInfo.objects.all()
            serializer = ProjectsListSerializer(projects, many=False)
            cache.set(cache_key, serializer.data, timeout=None)
            return Response(serializer.data, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    return Response(projects, status=status.HTTP_200_OK)


@api_view(["GET"])
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


@api_view(["POST"])
def create_readme(request, *args, **kwargs):
    try:
        project_id = request.data.get("project_id")
        files = request.data.get("files", [])
        SubView.create_readme(project_id, files)

        return Response({"message": "Readme updated successfully."}, status=status.HTTP_200_OK)

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["GET"])
def list_skills(request, *args, **kwargs):
    cache_key = "all_skills"
    skills = cache.get(cache_key)
    if skills is None:
        try:
            skills = SkillSet.objects.all()
            serializer = SkillSetSerializer(skills, many=True)
            cache.set(cache_key, serializer.data, timeout=None)
            return Response(serializer.data, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    return Response(skills, status=status.HTTP_200_OK)


@api_view(["POST"])
def modify_skills(request, *args, **kwargs):
    try:
        skills = request.data.get("skills", [])
        cache_key = "all_skills"
        cache.set(cache_key)

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
