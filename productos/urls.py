from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from productos import views


urlpatterns = [
    path('all/', views.ProductoView.as_view({'get': 'getAll'})),
    path('getById/<int:id>/', views.ProductoView.as_view({'get': 'getById'})),
    path('getByCategory/<int:category>/', views.ProductoView.as_view({'get': 'getByCategory'})),
]