from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CreateUserSerializer, LoginSerializer, UserSerializer
from rest_framework.authtoken.models import Token
#from rest_framework.authentication import
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import login, logout
from rest_framework import status
from rest_framework.generics import GenericAPIView
#from django.views.decorators.csrf import csrf_protect
from django.middleware.csrf import get_token
#from django.contrib.auth import login


class CreateUserVIEW(APIView):
    def post(self,request):
        #print(request)
        serializer=CreateUserSerializer(data=request.data)
        if serializer.is_valid():
            user=serializer.save()
            Token.objects.get_or_create(user=user)
            #login(request,user)
            return Response(serializer.data,status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors,status.HTTP_400_BAD_REQUEST)

class LoginView(GenericAPIView):
    serializer_class=LoginSerializer
    def post(self,request):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        #print("holaaaaaaaaaaaaaaa")
        user=serializer.validated_data
        token=Token.objects.get_or_create(user=user)
        key=token[0].key
        print(token[0].user)
        #print(dir(token))
        login(self.request,user)
        print(dir(key))
        #print(userSerializado)
        self.headers.setdefault("X-CSRFToken",get_token(request))
        return Response({"User":UserSerializer(user,context=self.get_serializer_context()).data,"Token":key},status.HTTP_200_OK)

class LogoutView(APIView):
    permission_classes=(IsAuthenticated,)
    def get(self,request):
        user=request.user
        logout(request)
        Response({"User":"cerrado"},status.HTTP_200_OK)
