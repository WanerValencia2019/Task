from rest_framework import routers
from .views import TaskView


routes=routers.DefaultRouter()

routes.register(r"",TaskView,"tasks")

urlpatterns = routes.urls
