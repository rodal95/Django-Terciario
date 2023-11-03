from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from productos import views

router = routers.DefaultRouter()
router.register(r'productos',views.ProductoView,'productos')

urlpatterns = [
    path('/', include(router.urls)),
]