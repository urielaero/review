from django.db import models

# Create your models here.
# Ejemplo de un modelo para los datos en la DB
class Article(models.Model):
    title = models.CharField(max_length=60)
    autor = models.CharField(max_length=30)
    min_review = models.CharField(max_length=200)
    date  = models.DateTimeField('Date published')
    
    def __unicode__(self):
        return self.title
