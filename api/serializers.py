# serializers.py
from rest_framework import serializers
from .models import SkillSet, ProjectInfo, ReadMe, ContentMetadata


class ReadMeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReadMe
        fields = "__all__"


class ProjectsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectInfo
        fileds = "__all__"
