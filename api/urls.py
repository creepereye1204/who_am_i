# urls.py
from django.urls import path

from .views import *

urlpatterns = [path("projects", create_project, name="create_project"), path("", profile_view, name="profile")]
