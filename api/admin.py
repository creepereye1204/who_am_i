from django.contrib import admin
from .models import SkillSet, ProjectInfo, SkillMapping, ContentMetadata, FiledInfo


admin.site.register(SkillSet)
admin.site.register(ProjectInfo)
admin.site.register(SkillMapping)
admin.site.register(ContentMetadata)
admin.site.register(FiledInfo)
