from django.shortcuts import render,redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib import messages
from django.contrib.auth.models import User  
from .forms import Reg_Form
from .serializers import LoggedInSerializer
from django.contrib.auth.decorators import login_required
from .models import LoggedInUser
from rest_framework.views import APIView
from .helpers import bank_data




def home(request):
    return render(request,'users/home.html')


def register(request):
    if request.method == 'POST':
        form=Reg_Form(request.POST)
        if form.is_valid():
            form.save()
            username=form.cleaned_data.get('username')
            messages.success(request,f'welcome {username}')
            return redirect('login')
    else:
        form=Reg_Form
        print(request.method)
    return render(request,'users/register.html',{'form':form})

# @login_required()
# @api_view(['POST'])
# def fillDetails(request):
#     serializer=LoggedInSerializer(data=request.data)
#     serializer.is_valid(raise_exception=True)
#     serializer.save(user_id=request.user,status=LoggedInUser.SENT)
#     return Response(status=status.HTTP_201_CREATED)
@login_required()
@api_view(['POST'])
def fillDetails(request):
    serializer=LoggedInSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(user_id=request.user)
        print("hello")
        return Response(serializer.data)
    return Response(serializer.errors,st,status=status.HTTP_400_BAD_REQUEST)
# class LoggedinApiView(APIView):
#     def post(self, request):
#         serializer = LoggedInSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save(user_id=request.user)
#         return Response(status=status.HTTP_201_CREATED)




@login_required
def TrialView(request):
    target_user=request.user
    target_id=request.user.id

    # loggedinobj=LoggedInUser.objects.filter(user_id=request.user.id)
    # upi_object=UpiBank.objects.filter(upi_id=loggedinobj[0].upi_id)
    target_data=bank_data("https://retoolapi.dev/Bpx9KZ/bnz100235a")

    context={
        'target_user':target_user,
        'target_id':target_id,
        # 'some_data':upi_object[0].installment,
        'target_data':target_data
    }
    return render(request,'users/trial.html',context)
