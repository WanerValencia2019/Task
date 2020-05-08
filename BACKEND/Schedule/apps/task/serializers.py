from rest_framework import serializers
from .models import Task

class TaskAPI(serializers.ModelSerializer):
    class Meta:
        model=Task
        fields="__all__"
    def create(self,data):
        createTask=Task()
        #print(data)
        createTask.title=data.get('title')
        createTask.Description=data.get('Description')
        createTask.created_by=data.get('created_by')
        createTask.save()

        return createTask

    def validate(self,validated_data):
        #print(validated_data)
        task=Task.objects.filter(created_by=validated_data.get('created_by'),title=validated_data.get('title'))
        #print(task)
        if len(task) != 0:
            print(dir(serializers))
            raise serializers.ValidationError({"message":"Esta tarea ya ha sido creada"})
        return validated_data


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model=Task
        fields="__all__"