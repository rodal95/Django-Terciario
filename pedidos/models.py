from django.db import models
from productos.models import Producto
from clientes.models import Cliente
# Create your models here.
class Pedido(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    fecha_pedido = models.DateTimeField(auto_now=True)
    total_pedido = models.PositiveIntegerField()

    def __str__(self):
        return f'Pedido {self.id_pedido} - Cliente: {self.id_cliente}'
    
    
class PedidoProducto(models.Model):
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    precio_producto = models.PositiveIntegerField()
    cantidad_elegida_producto = models.PositiveIntegerField()
    subtotal = models.PositiveIntegerField()

    def __str__(self):
        return f'Producto en Pedido {self.id_pedido} - Producto: {self.id_producto.nombre}'