from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Registereduser,LoggedInUser

class RegisteredSerializer(serializers.ModelSerializer):
    class Meta:
        model=Registereduser
        fields='__all__'

class LoggedInSerializer(serializers.ModelSerializer):
    class Meta:
        model=LoggedInUser
        fields='__all__'
