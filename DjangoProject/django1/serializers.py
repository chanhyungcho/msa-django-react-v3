from rest_framework import serializers
from models import aUser


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = aUser
        fields = '__all__'