from django.urls import path
from rest_framework import routers
from .api import CreateUserVIEW

routes=routers.SimpleRouter()

routes.register('register',CreateUserVIEW.as_view(),basename="register")

urlpatterns = routers.url

