from django.contrib import admin
from .models import Emirate, Area, Place

# Register your models here.

class inlineArea(admin.StackedInline):
    model = Area
    extra = 0

class EmirateAdmin(admin.ModelAdmin):
    inlines = [inlineArea]
    list_display = [
       'name',
    ]
    list_display_links = ['name']
    list_filter = ['name']
    search_fields = ['name']
admin.site.register(Emirate, EmirateAdmin)


class inlinePlace(admin.StackedInline):
    model = Place
    extra = 0

# Area admin
class AreaAdmin(admin.ModelAdmin):
    inlines = [inlinePlace]
    list_display = [
       'name',
    ]
    list_display_links = ['name']
    list_filter = ['name']
    search_fields = ['name']
admin.site.register(Area, AreaAdmin)
admin.site.register(Place)

