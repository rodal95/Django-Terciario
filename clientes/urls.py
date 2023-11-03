from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from clientes import views

router = routers.DefaultRouter()
router.register(r'clientes',views.ClienteView,basename='cliente')

urlpatterns = [
    path('/', include(router.urls)),
    path('agregar/', views.ClienteView.as_view({'post': 'create'}), name='cliente-agregar'),
    # Ruta personalizada para consultar un cliente (GET)
    path('consultar/', views.ClienteView.as_view({'get': 'consultar'}), name='cliente-consultar'),
    # Ruta personalizada para el login de un cliente (por ejemplo, POST)
    path('login/', views.ClienteView.as_view({'get': 'login'}), name='cliente-login'),
]