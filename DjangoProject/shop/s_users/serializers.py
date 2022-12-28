from rest_framework import serializers
from models import SUser


class SUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = SUser
        fields = '__all__'