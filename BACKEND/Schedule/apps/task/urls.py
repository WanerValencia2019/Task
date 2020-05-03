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
