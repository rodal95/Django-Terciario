from django.http import HttpResponse,JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from .models import Pedido, PedidoProducto
# Create your views here.

class PedidoViews(viewsets.ModelViewSet):
    def pedidos(self, request, userId):
        pedidosUser = Pedido.objects.filter(cliente_id=userId)
        data = []
        for pedido in pedidosUser:
            # Filtrar PedidoProducto por pedido_id
            productos = PedidoProducto.objects.filter(pedido_id=pedido.id)
            productos_data = [{'id_producto': producto.producto_id, 'cantidad': producto.cantidad_elegida_producto} for producto in productos]
            data.append({'id_pedido': pedido.id, 'fecha': pedido.fecha_pedido, 'total': pedido.total_pedido, 'productos': productos_data})
        return JsonResponse(data, safe=False)