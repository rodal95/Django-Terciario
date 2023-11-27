from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('cliente', TemplateView.as_view(template_name='index.html')),
    path('clienteLog', TemplateView.as_view(template_name='index.html')),
    path('registrarse', TemplateView.as_view(template_name='index.html')),
    path('carrito', TemplateView.as_view(template_name='index.html')),
    path('carritoCart', TemplateView.as_view(template_name='index.html')),
    path('detalle/<int:id>/', TemplateView.as_view(template_name='index.html')),
    path('api/admin/', admin.site.urls),
    path('api/clientes/',include('clientes.urls')),
    path('api/productos/',include('productos.urls')),
    path('api/carritos/',include("carritos.urls")),
    path('api/pedidos/',include('pedidos.urls'))
]


