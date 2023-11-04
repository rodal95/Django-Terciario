from django.contrib import admin
from .models import Carrito, CarritoProducto

class CarritoAdmin(admin.ModelAdmin):
    list_display = ['id','cliente_id','abierto','fecha_ultima_actividad']

class CarritoProductoAdmin(admin.ModelAdmin):
    list_display = ['id','carrito_id','producto_id','precio_producto','cantidad_elegida_producto','imagen']

# Registra los modelos con las clases personalizadas
admin.site.register(Carrito, CarritoAdmin)
admin.site.register(CarritoProducto, CarritoProductoAdmin)
