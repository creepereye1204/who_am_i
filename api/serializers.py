# serializers.py
from rest_framework import serializers
from .models import SkillSet, ProjectInfo


class SkillSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillSet
        fields = ["skill_name"]  # skill_name만 포함하도록 수정


class ProjectInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectInfo
        fields = "__all__"
