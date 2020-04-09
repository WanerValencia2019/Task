"""Schedule URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from apps.users import api
from apps.task import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path(r'api/register',api.CreateUserVIEW.as_view(),name="users"),
    path(r"api/task2/",include('apps.task.urls'),name="tasks"),
    path(r"api/task/list/",views.TaskA.as_view(),name="tasks2"),
    path(r"api/task/create/",views.CreateTaskView.as_view(),name="tasks"),
    path(r'api/login',api.LoginView.as_view(),name="login"),
    path(r'api/logout',api.LogoutView.as_view(),name="logout"),
    #path(r'api/login2',obtain_auth_token,name="login2"),
]
