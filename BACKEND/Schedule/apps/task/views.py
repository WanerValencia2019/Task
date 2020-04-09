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
from .serializers import TaskAPI
from .models import Task

class TaskVIEW(ListCreateAPIView):
        queryset=Task.objects.all()
        serializer_class=TaskAPI
        #permission_classes=(IsAuthenticated,)
        #authentication_classes=(TokenAuthentication,)

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
        queryset = Task.objects.filter(created_by=id)
        serializer = TaskAPI(queryset, many=True)
        return Response(serializer.data)
class CreateTaskView(APIView):
    def post(self,request):
        serializer=TaskAPI(data=request.data)
        serializer.is_valid(raise_exception=True)
        print(request.data.get('title'))
        data=serializer.data

        return Response(serializer.data,status.HTTP_201_CREATED)
class TaskView(viewsets.ModelViewSet):
    queryset=Task.objects.all()
    serializer_class=TaskAPI
    #permission_classes=(IsAuthenticated,)
    #authentication_classes=(TokenAuthentication,)
