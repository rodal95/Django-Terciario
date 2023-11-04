from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ProductoSerializer
from .models import Producto
# Create your views here.
class ProductoView(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer

    def getAll(self,request):
        productos = Producto.objects.all()
        data = [{'id_producto': p.id, 'nombre': p.nombre, 'precio': p.precio} for p in productos]
        return JsonResponse(data, safe=False)
    def getById(self,request,id):
        producto = Producto.objects.get(id=id)
        data = {'id_producto': producto.id, 'nombre': producto.nombre, 'precio': producto.precio}
        return JsonResponse(data, safe=False)
    def getByCategory(self,request,category):
        productos = Producto.objects.filter(categoria=category)
        data = [{'id_producto': p.id, 'nombre': p.nombre, 'precio': p.precio} for p in productos]
        return JsonResponse(data, safe=False)