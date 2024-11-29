from django.db import models
from django.utils import timezone


class SkillSet(models.Model):
    skill_id = models.AutoField(primary_key=True)
    skill_name = models.CharField(max_length=15, unique=True)
    badge_file = models.FileField(upload_to="badge/", null=True, blank=True)

    class Meta:
        verbose_name = "Skill Set"
        verbose_name_plural = "Skill Sets"

    def __str__(self):
        return self.skill_name


class ProjectInfo(models.Model):
    project_id = models.AutoField(primary_key=True)
    project_name = models.CharField(max_length=30, null=True, blank=True)
    start_at = models.DateField(default=timezone.now)
    end_at = models.DateField(null=True, blank=True)
    describe = models.CharField(max_length=50, null=True, blank=True)
    link = models.URLField(null=True, blank=True)
    readme_file = models.FileField(upload_to="readme/", null=True, blank=True)

    class Meta:
        verbose_name = "Project Info"
        verbose_name_plural = "Project Infos"

    def __str__(self):
        return self.project_name


class SkillMapping(models.Model):
    skill_id = models.ForeignKey("SkillSet", related_name="skill_mappings", on_delete=models.CASCADE)
    project_id = models.ForeignKey("ProjectInfo", related_name="skill_mappings", on_delete=models.CASCADE)

    class Meta:
        unique_together = (("project_id", "skill_id"),)
        verbose_name = "Skill Mapping"
        verbose_name_plural = "Skill Mappings"

    def __str__(self):
        return f"{self.project_id} - {self.skill_id}"


class ContentMetadata(models.Model):
    project_id = models.ForeignKey(
        "ProjectInfo", primary_key=True, related_name="content_metadata", on_delete=models.CASCADE, unique=False
    )
    content = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        verbose_name = "Content Metadata"
        verbose_name_plural = "Content Metadata"

    def __str__(self):
        return self.content


class FiledInfo(models.Model):
    skill_id = models.ForeignKey("SkillSet", on_delete=models.CASCADE)
    filed = models.CharField(max_length=30, null=True, blank=True)

    class Meta:
        verbose_name = "Filed Info"
        verbose_name_plural = "Filed Infos"

    def __str__(self):
        return self.filed
