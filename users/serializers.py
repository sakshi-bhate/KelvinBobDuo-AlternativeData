from rest_framework import serializers
# from django.contrib.auth.models import User
from .models import LoggedInUser,CustomUser
from rest_framework.authtoken.models import Token

class LoggedInSerializer(serializers.ModelSerializer):
    class Meta:
        model=LoggedInUser 
        fields=('phone_no','pan_no','udhyog_id','aadhar_no','ivrs_no','gst_no','upi_id')
    

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email', 'last_login', 'date_joined','is_staff']

# class LoggedInSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=LoggedInUser
#         fields='__all__'
