from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ProductoSerializer
from .models import Producto, Categoria
# Create your views here.
class ProductoView(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer

    def getAll(self,request):
        productos = Producto.objects.all()
        data = [{'id_producto': p.id, 'nombre': p.nombre, 'precio': p.precio,"stock":p.stock, 'imagen':p.imagen_url,'categoria':p.categoria_id} for p in productos]
        return JsonResponse(data, safe=False)
    def getById(self,request,id):
        producto = Producto.objects.get(id=id)
        data = {'id_producto': producto.id, 'nombre': producto.nombre, 'precio': producto.precio,"stock":producto.stock, 'imagen':producto.imagen_url,'categoria':producto.categoria_id}
        return JsonResponse(data, safe=False)
    def getByCategory(self,request,category):
        productos = Producto.objects.filter(categoria=category)
        data = [{'id_producto': p.id, 'nombre': p.nombre, 'precio': p.precio,"stock":p.stock, 'imagen':p.imagen_url} for p in productos]
        return JsonResponse(data, safe=False)
    def getCategory(self,request):
        categorias = Categoria.objects.all()
        data = [{'id_categoria': c.id, 'nombre': c.nombre} for c in categorias]
        return JsonResponse(data, safe=False)