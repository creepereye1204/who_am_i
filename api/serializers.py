# serializers.py
from rest_framework import serializers
from .models import SkillSet, ProjectInfo, ReadMe


class SkillSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillSet
        fields = ["skill_name"]


class ReadMeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReadMe
        fields = "__all__"


class ProjectsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectInfo
        fileds = "__all__"
