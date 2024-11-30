import os
from typing import List
from .models import ReadMe, ContentMetadata, SkillMapping, SkillSet
from rest_framework.exceptions import ValidationError


class SubView:
    @staticmethod
    def create_readme(project_id: int, files: List):
        """
        리드미 파일 체크하고, 이미지 파일과 마크다운 파일을 project_id로 ReadMe 모델에 저장함

        Args:
            project_id (int): ProjectInfo 테이블의 기본키

        Returns:
            None : 리턴값 없음

        Raises:
            ValidationError: 마크다운 없으면 예외발생 시킬꺼임

        """
        markdown_file = None

        image_files = []

        for file in files:

            _, extension = os.path.splitext(file.name)

            if extension.lower() == ".md":
                markdown_file = file
            elif extension.lower() in [".png", ".jpg", ".jpeg", ".gif"]:
                image_files.append(file)
        if markdown_file is None:
            raise ValidationError("마크다운 파일이 없습니다.")
        else:
            files = image_files + markdown_file
            for file in files:
                ReadMe.objects.create(project_id=project_id, file=file)

    @staticmethod
    def create_contents(project_id: int, contents: List):
        """
        ContentMetadata 모델에 project_id, content를 저장함

        Args:
            project_id (int): Project 테이블의 기본키
            contents (List[str]): content 리스트

        Returns:
            None : 리턴값 없음

        """
        for content in contents:
            ContentMetadata.objects.create(project_id=project_id, content=content)

    @staticmethod
    def create_skills(project_id: int, skills: List):
        """
        SkillMapping 모델에 project_id, skill_name을 저장함

        Args:
            project_id (int): Project 테이블의 기본키
            skills (List[str]): skill 리스트

        Returns:
            None : 리턴값 없음

        Raises:
            ValidationError: 스킬 없으면 예외발생 시킬꺼임
        """
        for skill in skills:
            try:
                skill_id = SkillSet.objects.get(skill_name=skill)
                SkillMapping.objects.create(project_id=project_id, skill_id=skill_id)
            except SkillSet.DoesNotExist:
                raise ValidationError(f"Skill '{skill}' does not exist.")
