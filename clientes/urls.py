from django.urls import path, include
from rest_framework import routers
from clientes import views


urlpatterns = [

    path('agregar/', views.ClienteView.as_view({'post': 'create'}), name='cliente-agregar'),

    path('consultar/', views.ClienteView.as_view({'get': 'consultar'}), name='cliente-consultar'),

    path('login/', views.ClienteView.as_view({'get': 'login'}), name='cliente-login'),
]