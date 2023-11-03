from django.db import models

# Create your models here.
class Cliente(models.Model):
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    dni = models.CharField(max_length=10, unique=True)
    telefono = models.CharField(max_length=15)
    correo = models.EmailField(unique=True)
    contraseña = models.CharField(max_length=500)
    
    def __str__(self):
        return self.nombre
