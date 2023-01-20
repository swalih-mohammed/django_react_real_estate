
from django.contrib import admin
from .models import Property, PropetyType

# Register your models here.


class PropertyAdmin(admin.ModelAdmin):
    list_display = [
       'title','place', 
    ]
    list_display_links = ['title']
    list_filter = ['place', 'for_type']
    search_fields = ['title']
admin.site.register(Property, PropertyAdmin)
admin.site.register(PropetyType)