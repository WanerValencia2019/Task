from django.db import models

# Create your models here.
class Task(models.Model):
    title=models.CharField(verbose_name="Título",max_length=60)
    Description=models.TextField(verbose_name="Descripción")
    created_by=models.IntegerField(verbose_name="Creador")
    date=models.DateTimeField(auto_now_add=True,verbose_name="Fecha de creación")
    completed=models.BooleanField(verbose_name="Completada",default=False)
    favorite=models.BooleanField(verbose_name="Agregado a favoritos",default=False)
    def __str__(self):
        return "{},{},{}".format(self.title,self.completed,self.created_by)
    