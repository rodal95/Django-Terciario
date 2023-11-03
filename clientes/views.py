from django.contrib.auth.hashers import make_password, check_password
from rest_framework import viewsets
from .serializer import ClienteSerializer
from .models import Cliente
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from rest_framework.response import Response
from rest_framework import status
import jwt
from django.conf import settings
from django.http import JsonResponse

class ClienteView(viewsets.ModelViewSet):
    serializer_class = ClienteSerializer
    queryset = Cliente.objects.all()

    def create(self, request, *args, **kwargs):
    # Obtén los datos del cliente desde la solicitud
        serializer = self.get_serializer(data=request.data)
    
    # Valida y guarda los datos del cliente si son válidos
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

    def consultar(self, request, *args, **kwargs):
        token = request.META.get('HTTP_AUTHORIZATION', "").split(' ')[1]
        try:
            decoded_payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            user_id = decoded_payload.get('user_id', None)

            if user_id is not None:
                # Consulta la base de datos para obtener información del usuario
                try:
                    user = Cliente.objects.get(id=user_id)
                    return JsonResponse({'message': 'Información del usuario', 'user_id': user.id, 'username': user.correo})
                except Cliente.DoesNotExist:
                    return JsonResponse({'message': 'Usuario no encontrado'}, status=404)
            else:
                return JsonResponse({'message': 'Token no válido'}, status=401)
        except jwt.ExpiredSignatureError:
            return JsonResponse({'message': 'Token ha expirado'}, status=401)
        except jwt.InvalidTokenError:
            return JsonResponse({'message': 'Token no válido'}, status=401)

    def login(self, request):
        email = request.data.get('correo')
        password = request.data.get('contraseña')
        try:
            user = Cliente.objects.get(correo=email)
            if check_password(password, user.contraseña):
                token_payload = {'user_id': user.id, 'username': user.correo}
                token = jwt.encode(token_payload, settings.SECRET_KEY, algorithm='HS256')
                return JsonResponse({'access_token': token}, status=200)
        except Cliente.DoesNotExist:
            pass  # Maneja la excepción si el usuario no existe

        return JsonResponse({'message': 'Login fallido'}, status=401)