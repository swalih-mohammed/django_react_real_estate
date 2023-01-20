from django.urls import path
from .views import HomePage,Searchpage

urlpatterns = [
    path('', HomePage, name='Lesson_list'),
     path('search/', Searchpage.as_view(), name='Searchpage'),
]