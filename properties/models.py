from django.db import models
from locations.models import Place

# Create your models here.

PROPERTY_FOR_TYPE = (
    ("FOR RENT", "FOR RENT"),
    ("FOR SALE", "FOR SALE"),
  
)
class PropetyType(models.Model):
    name = models.CharField(max_length=250, blank=True, null=True)

    def __str__(self):
        return self.name 

class Property(models.Model):
    title = models.CharField(max_length=250, blank=True, null=True)
    description = models.CharField(max_length=250, blank=True, null=True)
    photo_1 = models.FileField(
        upload_to='Photos', blank=True, null=True)
    photo_2 = models.FileField(
        upload_to='Photos', blank=True, null=True)
    photo_3 = models.FileField(
        upload_to='Photos', blank=True, null=True)
    price = models.CharField(max_length=250, blank=True, null=True)
    place = models.ForeignKey(Place, on_delete=models.SET_NULL, blank=True, null=True)
    property_type = models.ForeignKey(PropetyType, on_delete=models.SET_NULL, blank=True, null=True)
    for_type = models.CharField(
        max_length=250, blank=True, null=True, choices=PROPERTY_FOR_TYPE, default="FOR RENT")
    is_featured = models.BooleanField(blank=True, null=True, default=False)



    # def __str__(self):
    #     # return self.title 



