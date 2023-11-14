from django.http import HttpResponse,JsonResponse
from django.shortcuts import render
from rest_framework.decorators import action
from rest_framework import viewsets
from .models import Pedido, PedidoProducto
from .models import Pedido, PedidoProducto
from clientes.models import Cliente

from .decorators import token_required
from django.db import connections
from decouple import config
from django.core.mail import send_mail
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
            productos_data = [{'id_producto': producto.producto_id, 'nombre':producto.producto_nombre, 'cantidad': producto.cantidad_elegida_producto,'precio':producto.precio_producto,'subtotal':producto.subtotal} for producto in productos]
            data.append({'id_pedido': pedido.id, 'fecha': pedido.fecha_pedido, 'total': pedido.total_pedido, 'productos': productos_data})
        return JsonResponse(data, safe=False)
    @token_required
    def finalizarPedido(self, request):
        if request.method == 'GET':
            try:
                user_id = request.user_id
                query = 'SELECT finalizar_pedido(%s)'
                with connections['default'].cursor() as cursor:
                    cursor.execute(query, (user_id,))
                cliente = Cliente.objects.get(id=user_id)
                
                self.enviar_correo(cliente)
                return JsonResponse({'message': True})
            except Exception as e:
                return JsonResponse({'message': 'Error: ' + str(e)}, status=400)
        else:
            return JsonResponse({'message': 'Método no permitido'}, status=405)
    def enviar_correo(self,cliente):
        subject = 'Bienvenido a Papel & Mas'
        message = f'Hola {cliente["nombre"]},\n\n Tu pedido fue realizado con exito.\n\n Por favor entra a tu usuario y consulta tus pedidos realizados'
        from_email = config('EMAIL_HOST_USER')
        recipient_list = [cliente.correo]
        password = config("EMAIL_HOST_PASSWORD")
        send_mail(subject, message, from_email, recipient_list, auth_user=config('EMAIL_HOST_USER'), auth_password=password)
    