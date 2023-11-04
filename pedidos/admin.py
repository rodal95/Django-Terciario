from django.contrib import admin
from .models import Pedido, PedidoProducto

class PedidoAdmin(admin.ModelAdmin):
    list_display = ('id', 'cliente_id', 'fecha_pedido', 'total_pedido')


class PedidoProductoAdmin(admin.ModelAdmin):
    list_display = ('id', 'pedido_id', 'producto_id', 'cantidad_elegida_producto', 'precio_producto','subtotal')
   

admin.site.register(Pedido, PedidoAdmin)
admin.site.register(PedidoProducto, PedidoProductoAdmin)




