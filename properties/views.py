from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.response import Response
from rest_framework import filters
from rest_framework import generics




from .models import Property
from .serializer import PropertySerializer

@api_view(('GET',))
def HomePage(request):
    qs = Property.objects.all()
    serializer = PropertySerializer(qs ,many=True)
    return Response(serializer.data)


class Searchpage(generics.ListAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', "place__name", "place__area__name"]

# class UserListView(generics.ListAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     filter_backends = [filters.SearchFilter]
#     search_fields = ['username', 'email']