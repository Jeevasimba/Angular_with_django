from django.db import models

# Create your models here.
# class details(models.Model):
#     name = models.CharField(max_length=255)
#     initial = models.CharField(max_length=255)
#     age = models.IntegerField()

class Student(models.Model):
    name = models.CharField(max_length=255)
    initial = models.CharField(max_length=255)
    age = models.IntegerField()    