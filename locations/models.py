from django.db import models

# Create your models here.


class Emirate(models.Model):
    name = models.CharField(max_length=250, blank=True, null=True)

    def __str__(self):
        return self.name 

    class Meta:
        ordering = ['name']

class Area(models.Model):
    name = models.CharField(max_length=250, blank=True, null=True)
    emirate = models.ForeignKey(Emirate, on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.name 

    class Meta:
        ordering = ['name']

class Place(models.Model):
    name = models.CharField(max_length=250, blank=True, null=True)
    area = models.ForeignKey(Area, on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return str(self.name + "," + self.area.name)


    class Meta:
        ordering = ['name']