from django.db import models
from django.utils import timezone


class SkillSet(models.Model):
    skill_id = models.CharField(max_length=255, primary_key=True)
    skill_name = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.skill_name


class ProjectInfo(models.Model):
    project_id = models.AutoField(primary_key=True)
    project_name = models.CharField(max_length=30, default="작성중....")
    start_date = models.DateField(default=timezone.now)
    describe = models.CharField(max_length=50, default="작성중....")
    link = models.URLField(default="작성중....")

    readme_path = models.FilePathField(path="/path/to/readme", match=".*\.md$", null=True, blank=True)

    def __str__(self):
        return self.project_name


class ContentMetadata(models.Model):
    content_id = models.CharField(max_length=255, primary_key=True)
    content_description = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.content_description


class SkillMapping(models.Model):
    skill_mapping_id = models.CharField(max_length=255)
    skill_set = models.ForeignKey(SkillSet, on_delete=models.CASCADE)
    project = models.ForeignKey(ProjectInfo, on_delete=models.CASCADE)

    class Meta:
        unique_together = (("skill_mapping_id", "skill_set"),)
        verbose_name = "Skill Mapping"
        verbose_name_plural = "Skill Mappings"

    def __str__(self):
        return f"{self.skill_set} - {self.project}"
