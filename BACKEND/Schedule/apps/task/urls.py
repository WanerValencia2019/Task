from rest_framework import routers
from .views import *
from django.urls import path


routes=routers.DefaultRouter()

routes.register(r"update",TaskView,"update")
routes.register(r"delete",TaskView,"delete")

urlpatterns=[
    path(r"list/",TaskA.as_view(),name="tasks2"),
    path(r"create/",CreateTaskView.as_view(),name="tasks"),
]

urlpatterns += routes.urls

"""
task => Object
tasks => Array

	Update:
		url:"api/v1/task/update/:id"
		update:
			title,
			Description,
			created_by
		Headers:
			Authorization - token
		response:
			task

	Delete:
		url:"api/v1/task/delete/:id"
		method:
			delete
		Headers:
			Authorization - token
		response:
			task
	List:
		url:"api/v1/task/list/:idUser"
		method:
			 get
		Headers:
			Authorization - token
		response
			array-tasks

	Create:
		url:"api/v1/task/create/"
		post:
			title,
			Description,
			created_by
		Headers:
			Authorization - token
		response:
			task


"""