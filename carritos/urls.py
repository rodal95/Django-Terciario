
from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from carritos import views

router = routers.DefaultRouter()
router.register(r'carritos',views.CarritoView,'carritos')

urlpatterns = [
    path('vistaCarrito/', include(router.urls)),

]