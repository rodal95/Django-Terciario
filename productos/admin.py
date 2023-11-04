from django.contrib import admin
from .models import Producto, Categoria
from django.contrib import admin
from .models import Producto, Categoria


class ProductoAdmin(admin.ModelAdmin):
    list_display = ['id','nombre','stock','precio','categoria']


admin.site.register(Producto, ProductoAdmin)
admin.site.register(Categoria)
