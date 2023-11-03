from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from pedidos import views


router = routers.DefaultRouter()
router.register(r'pedidos',views.PedidoViews,'pedidos')

urlpatterns = [
    path('vistaPedido/', include(router.urls)),

]