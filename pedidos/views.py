from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import viewsets

# Create your views here.

class PedidoViews(viewsets.ModelViewSet):
    def viewPedido():
        return HttpResponse("¡Hola, mundo!")