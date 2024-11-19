from django.contrib import admin
from .models import SkillSet, ProjectInfo, SkillMapping, ContentMetadata


admin.site.register(SkillSet)
admin.site.register(ProjectInfo)
admin.site.register(SkillMapping)
admin.site.register(ContentMetadata)
