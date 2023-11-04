from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from .models import Carrito, CarritoProducto
# Create your views here.

class CarritoView(viewsets.ViewSet):
    def carritosAbiertos(self, request, userId):
        carritos_abiertos = Carrito.objects.filter(cliente_id=userId, abierto=1)
        productos = CarritoProducto.objects.filter(carrito_id=carritos_abiertos.first().id)
        data = []
        for producto in productos:
            data.append({'id_producto': producto.id, 'nombre': producto.nombre, 'precio': producto.precio})
        return JsonResponse(data, safe=False)