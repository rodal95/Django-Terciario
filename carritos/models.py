from django.db import models
from clientes.models import Cliente
from productos.models import Producto

class Carrito(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    abierto = models.BooleanField()
    fecha_ultima_actividad = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Carrito {self.id} - Cliente: {self.cliente_id}'
    
class CarritoProducto(models.Model):
    carrito = models.ForeignKey(Carrito, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    precio_producto = models.PositiveIntegerField()
    cantidad_elegida_producto = models.IntegerField()
    subtotal = models.IntegerField()
    imagen = models.CharField(max_length=500 , default='')

    def __str__(self):
        return f'Producto en Carrito {self.carrito_id} - Producto: {self.producto_id}'
    
    