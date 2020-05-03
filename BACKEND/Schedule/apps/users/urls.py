from django.urls import path
from rest_framework import routers
from .api import *

#routes=routers.SimpleRouter()

#routes.register(r'login/',LoginView.as_view(),basename="register")
#print(dir(routes))

urlpatterns=[
	path(r'register',CreateUserVIEW.as_view(),name="users"),
    path(r'changePassword',ChangePasswordView.as_view(),name="change-password"),
    path(r'changeNames',ChangeNamesView.as_view(),name="users"),
    path(r'changeUsername',ChangeUsernameView.as_view(),name="users"),
    path(r'changeEmail',ChangeEmailView.as_view(),name="users"),
    path(r'login',LoginView.as_view(),name="login"),
    path(r'logout',LogoutView.as_view(),name="logout"),
]

#urlpatterns += routes.get_urls()

