from pstats import Stats
import statistics
from django.shortcuts import render
from django.http import HttpResponse
from requests import Response, request
from rest_framework import viewsets
from .serializer import ClienteSerializer
from .models import Cliente
# Create your views here.

class ClienteView(viewsets.ModelViewSet):
    serializer_class = ClienteSerializer
    queryset = Cliente.objects.all()

    def create(self, request, *args, **kwargs):
    # Obtén los datos del cliente desde la solicitud
        serializer = self.get_serializer(data=request.data)
    
    # Valida y guarda los datos del cliente si son válidos
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=statistics.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=Stats.HTTP_400_BAD_REQUEST)
    
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
    def login(self, request):
        email = request.data.get('correo')
        password = request.data.get('contraseña')
        
        user = authenticate(request, username=email, password=password)
        
        if user is not None:
            login(request, user)  # Inicia sesión al usuario
            return Response({'message': 'Login exitoso'}, status=status.HTTP_200_OK)
        
        return Response({'message': 'Login fallido'}, status=status.HTTP_401_UNAUTHORIZED)