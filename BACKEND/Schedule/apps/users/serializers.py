from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from rest_framework.authtoken.models import Token
class CreateUserSerializer(serializers.Serializer):
    id=serializers.ReadOnlyField();
    username=serializers.CharField(required=True)
    last_name=serializers.CharField(required=True)
    first_name=serializers.CharField(required=True)
    email=serializers.EmailField()
    password=serializers.CharField(required=True)
    def create(self,validated_data):
        user=User()
        user.username=validated_data.get('username')
        user.first_name=validated_data.get('first_name')
        user.last_name=validated_data.get('last_name')
        user.email=validated_data.get('email')
        user.set_password(validated_data.get('password'))
        user.save()
        return user
    def validate_data(self,data):
        users=User.objects.filter(username=data)
        if len(users) != 0:
            raise serializers.ValidationError("El nombre de usuario ya se encuentra registrado")
        else:
            return users
    

class LoginSerializer(serializers.Serializer):
    username=serializers.CharField(required=True)
    password=serializers.CharField(required=True)
    """def create(self,validated_data):
        print(validated_data)
        user=authenticate(username=validated_data.get('username'),password=validated_data.get('password'))
        print(user)
        #user=User.objects.get(username=validated_data.get('username'))
        print(user)
        token=Token.objects.get_or_create(user=user)

        print(token)
        #userAUTH=authenticate()
        #token=Token.objects.filter(user=user)
        token=user
        if token:
            print("Hay token")
        else:
             print("NO hay token")
        return validated_data"""

    def validate(self,data):
        user=authenticate(username=data.get('username'),password=data.get('password'))
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Crendential Incorrect")
    

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=("id","username","email","password","first_name","last_name")

