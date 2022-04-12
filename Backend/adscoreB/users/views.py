from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Registereduser
from .serializers import RegisteredSerializer,LoggedInSerializer
# Create your views here.

#Registered_USER
@api_view(['Get'])
def checking_api(request):
    return Response("api check successful")

@api_view(['Get'])
def view_reguser(request):
    regusers=Registereduser.objects.all()
    serializer=RegisteredSerializer(regusers,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_reguser(request):
    serializer=RegisteredSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        print(serializer.data)
        return Response(serializer.data)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

#LoggedInuser

@api_view(['Get'])
def view_loggedin(request):
    loggedin=LoggedInSerializer.objects.all()
    serializer=RegisteredSerializer(loggedin,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_loggedin(request):
    serializer=LoggedInSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        print(serializer.data)
        return Response(serializer.data)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
