from django.shortcuts import render, redirect
from .models import Cerveza

# Create your views here.

def index(request):
    print("index")
    return render(request, 'labirraesbella/index.html')

def base(request):
    return render(request, 'labirraesbella/base.html')


def nuestros_estilos(request):
    cerveza = Cerveza.objects.all()
    return render(request, 'labirraesbella/nuestros_estilos.html',{'cervezas': cerveza})

def quienes_somos(request):
    return render(request, 'labirraesbella/quienes_somos.html')

def contacto(request):
    return render(request, 'labirraesbella/contacto.html')