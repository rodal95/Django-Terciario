from django.db import models

# Create your models here.
class Categoria(models.Model):
    nombre = models.CharField(max_length=255)

    def __str__(self):
        return self.nombre

class Producto(models.Model):
    nombre = models.CharField(max_length=255)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    imagen_url = models.CharField(max_length=255)  # CharField para la URL de la imagen externa

    def __str__(self):
        return self.nombre
