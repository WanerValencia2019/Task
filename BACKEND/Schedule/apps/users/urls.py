from django.urls import path
from rest_framework import routers
from .api import *

#routes=routers.SimpleRouter()

#routes.register(r'login/',LoginView.as_view(),basename="register")
#print(dir(routes))
#urlpatterns += routes.get_urls()

urlpatterns=[
	path(r'register',CreateUserVIEW.as_view(),name="register"),
	path(r'login',LoginView.as_view(),name="login"),
    path(r'logout',LogoutView.as_view(),name="logout"),
    path(r'changePassword',ChangePasswordView.as_view(),name="change-password"),
    path(r'changeNames',ChangeNamesView.as_view(),name="changeNames"),
    path(r'changeUsername',ChangeUsernameView.as_view(),name="changeUsername"),
    path(r'changeEmail',ChangeEmailView.as_view(),name="changeEmail"),
    path(r'userInfo',UserInfo.as_view(),name="user-info"),
]

"""
	Register
		url:"api/v1/auth/register/"
		post:
			username,
			first_name,
			last_name,
			email,
			password
		response:
			user,
			token
	
	Login 
		url:"api/v1/auth/login/"
		post:
			username
			pasword
		Headers:
			Authorization - token
		response:
			user,
			token
	Logout
		url:"api/v1/auth/logout/"
		post
		Headers:
			Authorization - token

	ChangePassword
		url:"api/v1/auth/changePassword/"
		post:
			old_password,
			password,
			password_confirm
		Headers:
			Authorization - token	
		
		response:
			message


	ChangeNames
		url:"api/v1/auth/changeNames/"
		post:
			first_name,
			last_name
		Headers:
			Authorization - token
		response:
			message

	ChangeUsername
		url:"api/v1/auth/changeUsername/"
		post:
			username
		Headers:
			Authorization - token
		response:
			message

	ChangeEmail
		url:"api/v1/auth/changeEmail/"
		post:
			email
		Headers:
			Authorization - token
		response:
			message


	
"""

