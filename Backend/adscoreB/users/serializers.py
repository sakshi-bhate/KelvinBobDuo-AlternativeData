from rest_framework import serializers
from django.contrib.auth.models import User
from .models import LoggedInUser
from rest_framework.authtoken.models import Token

class LoggedInSerializer(serializers.ModelSerializer):
    class Meta:
        model=LoggedInUser 
        fields=('phone_no','pan_no','udhyog_id','aadhar_no','ivrs_no','gst_no','upi_id')
    

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

# class LoggedInSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=LoggedInUser
#         fields='__all__'
