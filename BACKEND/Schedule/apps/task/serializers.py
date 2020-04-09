from rest_framework import serializers
from .models import Task

class TaskAPI(serializers.ModelSerializer):
    class Meta:
        model=Task
        fields="__all__"
        """def create(self,data):
            createTask=Task()
            #print()
            createTask.title(data.get('title'))
            createTask.Description(data.get('Description'))
            createTask.created_by(2)
            createTask.save()

        def validated_data(self,validated_data):
            task=Task.objects.filter(title=validated_data.get('title'))
            print(task)
            if len(task) != 0:
                raise serializers.ValidationError("Esta tarea ya ha sido creada")
            else:
                return task"""
