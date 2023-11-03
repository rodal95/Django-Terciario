from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ProductoSerializer
from .models import Producto
# Create your views here.
class ProductoView(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()
    def viewProduct():
        return HttpResponse("¡Hola, mundo!")