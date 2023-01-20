from rest_framework import serializers
from .models import Property

class PropertySerializer(serializers.ModelSerializer):
    emirate = serializers.CharField(source="place.area.emirate.name", read_only=True)
    area = serializers.CharField(source="place.area.name", read_only=True)
    place  = serializers.CharField(source="place.name", read_only=True)
    class Meta:
        model = Property
        fields = ('__all__')
    
    # def get_name(self, obj):
    #     serializer_data = UserSerializer(
    #         obj.user
    #     ).data
    #     phone = serializer_data.get('username')
    #     return phone