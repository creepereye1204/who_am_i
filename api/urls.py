# urls.py
from django.urls import path
from .views import *

urlpatterns = [
    path('/project',create_project)
]
