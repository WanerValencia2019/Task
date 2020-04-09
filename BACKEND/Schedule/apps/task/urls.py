from rest_framework import routers
from .views import TaskView


routes=routers.DefaultRouter()

routes.register(r"list",TaskView,"tasks")

urlpatterns = routes.urls
