from rest_framework import serializers
from models import BUser


class BUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = BUser
        fields = '__all__'