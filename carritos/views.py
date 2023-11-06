from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from .models import Carrito, CarritoProducto
from .decorators import token_required
from django.db import connections
# Create your views here.

class CarritoView(viewsets.ViewSet):
    @token_required
    def carritosAbiertos(self, request):
        user_id = request.user_id
        carritos_abiertos = Carrito.objects.filter(cliente_id=user_id, abierto=1)
        productos = CarritoProducto.objects.filter(carrito_id=carritos_abiertos.first().id)
        data = []
        for producto in productos:
            data.append({'id_producto': producto.id, 'nombre': producto.nombre, 'precio': producto.precio})
        return JsonResponse(data, safe=False)
    @token_required
    def agregar_o_actualizar_carrito(self,request):
        if request.method == 'POST':
            try:
                user_id = request.user_id
                id_producto = int(request.data.get('id_producto'))
                cantidad_elegida = int(request.data.get('cantidad_elegida'))
                query = 'SELECT AgregarOActualizarCarrito(%s,%s,%s)'
                with connections['default'].cursor() as cursor:
                    cursor.execute(query, (user_id, id_producto, cantidad_elegida))
                return JsonResponse({'message': 'Operación exitosa'})
            except Exception as e:
                return JsonResponse({'message': 'Error: ' + str(e)}, status=400)
        else:
            return JsonResponse({'message': 'Método no permitido'}, status=405)