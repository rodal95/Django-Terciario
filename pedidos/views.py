from django.http import HttpResponse,JsonResponse
from django.shortcuts import render
from rest_framework.decorators import action
from rest_framework import viewsets
from .models import Pedido, PedidoProducto
from .decorators import token_required
from django.db import connections
# Create your views here.

class PedidoViews(viewsets.ModelViewSet):
    @token_required
    def pedidos(self, request):
        user_id = request.user_id
        pedidosUser = Pedido.objects.filter(cliente_id=user_id)
        data = []
        for pedido in pedidosUser:
            # Filtrar PedidoProducto por pedido_id
            productos = PedidoProducto.objects.filter(pedido_id=pedido.id)
            productos_data = [{'id_producto': producto.producto_id, 'cantidad': producto.cantidad_elegida_producto} for producto in productos]
            data.append({'id_pedido': pedido.id, 'fecha': pedido.fecha_pedido, 'total': pedido.total_pedido, 'productos': productos_data})
        return JsonResponse(data, safe=False)
    @token_required
    @action(detail=False, methods=['post'])
    def finalizarPedido(self, request):
        if request.method == 'POST':
            try:
                user_id = request.user_id
                query = 'SELECT finalizar_pedido(%s)'
                with connections['default'].cursor() as cursor:
                    cursor.execute(query, (user_id,))
                return JsonResponse({'message': 'Operación exitosa'})
            except Exception as e:
                return JsonResponse({'message': 'Error: ' + str(e)}, status=400)
        else:
            return JsonResponse({'message': 'Método no permitido'}, status=405)
        