from django.db import models
from productos.models import Producto
from clientes.models import Cliente
# Create your models here.
class Pedido(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    fecha_pedido = models.DateTimeField(auto_now=True)
    total_pedido = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'Pedido {self.id} - Cliente: {self.cliente_id}'
    
    
class PedidoProducto(models.Model):
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    producto_nombre =models.CharField(max_length=255)
    precio_producto = models.DecimalField(max_digits=10, decimal_places=2)
    cantidad_elegida_producto = models.PositiveIntegerField()
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)
    imagen = models.CharField(max_length=500)
    def __str__(self):
        return f'Producto en Pedido {self.pedido_id} - Producto: {self.producto_id}'