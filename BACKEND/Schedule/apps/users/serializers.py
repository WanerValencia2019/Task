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
    def validate(self,data):
        print(data.get('username'))
        users=User.objects.filter(username=data.get('username'),email=data.get('email'))
        if len(users) != 0:
            raise serializers.ValidationError({"message":"El nombre de usuario Y/O email ya se encuentra registrado"})
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
        raise serializers.ValidationError({"message":"Usuario o contraseña incorrectos"})
    

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=("id","username","email","first_name","last_name")


#cambiando la contraseña del usuario
class ChangePasswordSerializer(serializers.Serializer):
    old_password=serializers.CharField(required=True)
    password=serializers.CharField(required=True)
    password_confirm=serializers.CharField(required=True)

    def validate(self,validated_data):
        print(validated_data)
        user=self.context['request'].user
        print(dir(user))
        old_password=validated_data.get('old_password')
        if not (user.password==old_password):
            raise serializers.ValidationError({"message":"La contraseña actual no es correcta"})
        elif not(validated_data.get('password')== validated_data.get('password_confirm')):
            raise serializers.ValidationError({"message":"Las contraseñas no coinciden"})
        elif not (validated_data.get('password')>8):
            raise serializers.ValidationError({"message":"La contraseña debe contener mas caracteres"})
        return validated_data

    def update(self,user,validated_data):
        user.set_password(validated_data.get('password'))
        user.save()
        return user

#cambiando el first_name y el last_name
class ChangeNamesSerializer(serializers.Serializer):
    first_name=serializers.CharField(required=True)
    last_name=serializers.CharField(required=True)

    def update(self,user,validated_data):
        print(dir(user.first_name))
        user.first_name=validated_data.get('first_name')
        user.last_name=validated_data.get('last_name')
        user.save()
        return user

class ChangeUsernameSerializer(serializers.Serializer):
    username=serializers.CharField(required=True,max_length=15)

    def validate(self,validated_data):
        username=validated_data.get('username')
        exists=User.objects.filter(username=username)

        if len(exists)!=0:
            raise serializers.ValidationError({"message":"El nombre de usuario ya se encuentra en uso"})
        if not(len(username)>8):
            raise serializers.ValidationError({"message":"El nombre de usuario es muy corto"})
        return validated_data

    def update(self,user,validated_data):
        user.username=validated_data.get('username')
        user.save()
        return user

class ChangeEmailSerializer(serializers.Serializer):
        email=serializers.EmailField(required=True)

        def update(self,user,validated_data):
            user.email=validated_data.get('email')
            user.save()
            return user


        
