#from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,GenericAPIView
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework import viewsets
# Create your views here.
from .serializers import TaskAPI,TaskSerializer
from .models import Task

class TaskVIEW(ListCreateAPIView):
        queryset=Task.objects.all()
        serializer_class=TaskAPI
        #permission_classes=(IsAuthenticated,)
        #authentication_classes=(TokenAuthentication,)

#VIEW QUE RETORNA LAS TAREAS DE ACUERDO A EL ID DE EL USUARIO
class TaskA(ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskAPI
    #permission_classes=(IsAuthenticated,)
    #authentication_classes=(TokenAuthentication,)
    def list(self, request):
        print(request.query_params)
        print(dir(request))
        id=request.query_params.get('id')
        #token=Token.objects.get(user=request.user).key
        #self.headers.setdefault("Authorization",{"Token":token})
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = Task.objects.filter(created_by=id).order_by('date').reverse()
        #print(dir(queryset))
        serializer = TaskAPI(queryset, many=True)
        return Response(serializer.data)

#CREA LA TAREA 
class CreateTaskView(APIView):
    permission_classes=(IsAuthenticated,)
    authentication_classes=(TokenAuthentication,)
    def post(self,request):
        serializer=TaskAPI(data=request.data)
        serializer.is_valid(raise_exception=True)
        #print(request.data.get('title'))
        #data=serializer.validate_data
        #print(serializer.validate)
        #task=Task.objects.create(**data)
        serializer.save()

        return Response(serializer.data,status.HTTP_201_CREATED)

#VISTAS DONDE VAMOS A RECIBIR, LA ACTUALIZACIÓN Y UPDATE DE LAS TAREAS
class TaskView(viewsets.ModelViewSet):
    queryset=Task.objects.all()
    serializer_class=TaskSerializer
    permission_classes=(IsAuthenticated,)
    authentication_classes=(TokenAuthentication,)
