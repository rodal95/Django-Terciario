from django.db import models
from clientes.models import Cliente
from productos.models import Producto
# Create your models here.
class Carrito(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    abierto = models.BooleanField()
    fecha_ultima_actividad = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Carrito {self.id_carrito} - Cliente: {self.id_cliente}'
    
class CarritoProducto(models.Model):
    carrito = models.ForeignKey(Carrito, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    precio_producto = models.PositiveIntegerField()
    cantidad_elegida_producto = models.IntegerField()
    subtotal = models.IntegerField()

    def __str__(self):
        return f'Producto en Carrito {self.id_carrito} - Producto: {self.id_producto.nombre}'