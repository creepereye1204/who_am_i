# views.py

from .models import SkillSet, ProjectInfo
from .serializers import SkillSetSerializer, ProjectInfoSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.db import transaction


@api_view(["POST"])
@transaction.atomic
def add_project(request, *args, **kwargs):
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

        project = ProjectInfo(**project_data)

    except:
        pass
