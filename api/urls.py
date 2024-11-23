# urls.py
from django.urls import path
from .views import SkillSetListView, ProjectInfoListView

urlpatterns = [
    path("skills/", SkillSetListView.as_view(), name="skill-list"),
    path("projects/", ProjectInfoListView.as_view(), name="project-list"),
]
