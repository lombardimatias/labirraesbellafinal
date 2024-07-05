from django.db import models


class Cerveza(models.Model):
    nombre = models.CharField(max_length=200, verbose_name='Nombre')
    precio = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Precio' )
    imagen = models.ImageField(upload_to='imagenes/',verbose_name='Imagen', null=True, blank=True)
    descripcion = models.TextField(verbose_name='Descripcion')

    def __str__(self):   #define cómo se representará una instancia del modelo como una cadena de texto. 
       
        return f"Cerveza: {self.nombre} / Precio: {self.precio} "
    
    def delete(self,using=None, keep_parents=False):
        self.imagen.storage.delete(self.imagen.name)
        super().delete()