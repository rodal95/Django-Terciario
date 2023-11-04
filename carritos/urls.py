
from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from carritos import views


urlpatterns = [
    path('carritoId/<int:userId>/', views.CarritoView.as_view({'get': 'carritosAbiertos'})),

]