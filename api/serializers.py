# serializers.py
from rest_framework import serializers
from .models import SkillSet, ProjectInfo, ReadMe, ContentMetadata


class ReadMeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReadMe
        fields = "readme_file"


class SkillSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillSet
        fields = ["skill_name", "badge_file"]


class ProjectsListSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProjectInfo
        fields = "__all__"


class ContentMetadataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentMetadata
        fields = "content"
