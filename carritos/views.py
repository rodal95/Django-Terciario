from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import viewsets
# Create your views here.

class CarritoView(viewsets.ModelViewSet):
    def viewCarrito():
        return HttpResponse("¡Hola, mundo!")