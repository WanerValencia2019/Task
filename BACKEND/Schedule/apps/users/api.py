from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import login, logout
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.generics import GenericAPIView,UpdateAPIView
#from django.views.decorators.csrf import csrf_protect
from django.middleware.csrf import get_token
#from django.contrib.auth import login


class CreateUserVIEW(GenericAPIView):
    serializer_class=CreateUserSerializer
    def post(self,request):
        #print(request)
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        data=serializer.data
        user=User.objects.get(**data)
        token=Token.objects.create(user=user)
        print(dir(token))
        login(self.request,user)
        return Response({"User":UserSerializer(user,context=self.get_serializer_context()).data,"Token":token.key},status.HTTP_200_OK)


#LOGIN
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
    authentication_classes=(TokenAuthentication,)
    def post(self,request):
        self.headers.setdefault("X-CSRFToken",get_token(request))
        user=request.user
        logout(request)
        user.auth_token.delete()
        return Response({"User":"Sesión terminada"},status.HTTP_200_OK)

#CAMBIANDO LA CONTRASEÑA DEL USUARIO
class ChangePasswordView(UpdateAPIView):
    serializer_class=ChangePasswordSerializer
    #model=User
    permission_classes=(IsAuthenticated,)
    authentication_classes=(TokenAuthentication,)
    def get_object(self,queryset=None):
        user=self.request.user
        return user
#CAMBIANDO EL NOMBRE DEL USUARIO


class ChangeNamesView(UpdateAPIView):
    serializer_class=ChangeNamesSerializer
    model=User
    permission_classes=(IsAuthenticated,)
    authentication_classes=(TokenAuthentication,)
    def get_object(self,queryset=None):
        user=self.request.user
        return user

class ChangeUsernameView(UpdateAPIView):
    serializer_class=ChangeUsernameSerializer
    model=User
    permission_classes=(IsAuthenticated,)
    authentication_classes=(TokenAuthentication,)
    def get_object(self,queryset=None):
        user=self.request.user
        return user

class ChangeEmailView(UpdateAPIView):
    serializer_class=ChangeEmailSerializer
    model=User
    permission_classes=(IsAuthenticated,)
    authentication_classes=(TokenAuthentication,)
    def get_object(self,queryset=None):
        user=self.request.user
        return user

class UserInfo(APIView):
    permission_classes=(IsAuthenticated,)
    authentication_classes=(TokenAuthentication,)

    def get(self,request):
        serializer=UserSerializer(request.user)
        token=Token.objects.get(user=request.user)
        print(token)
        user=serializer.data
        print(serializer.data)
        return  Response({"User":user,"Token":token.key},status.HTTP_200_OK)