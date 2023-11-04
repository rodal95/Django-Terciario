from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from pedidos import views


urlpatterns = [
    path('pedidosId/<int:userId>/', views.PedidoViews.as_view({'get': 'pedidos'})),

]