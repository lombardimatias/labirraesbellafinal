from django.urls import path, include
from . import views
from django.conf import settings #importamos settings para las imágenes
from django.contrib.staticfiles.urls import static #ya podemos acceder a la ruta de la imagen desde el navegador y visualizar la imagen



urlpatterns = [
    
     path('', views.index, name='index'),
     path ('base/', views.base, name='base'),
     path ('nuestros_estilos/', views.nuestros_estilos, name='nuestros_estilos'),
     path ('quienes_somos/', views.quienes_somos, name='quienes_somos'),
     path ('contacto/', views.contacto, name='contacto'),
   
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) #la carga de imágenes


