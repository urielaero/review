#Este archivo no es creado por default

from models import Article #importamos el modelo
from django.contrib import admin #importamos lo necesario para 
#el panel de admin

admin.site.register(Article) #Agregamos el modelo Article
#para que pueda ser editado desde el panel de admin (web)
