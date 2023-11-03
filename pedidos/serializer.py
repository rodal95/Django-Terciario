
from rest_framework import serializers
from .models import Pedido, PedidoProducto

class PedidoProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PedidoProducto
        fields = '__all__'

class PedidoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pedido
        fields = '__all__'