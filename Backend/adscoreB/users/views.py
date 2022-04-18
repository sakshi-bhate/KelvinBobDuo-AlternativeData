from django.shortcuts import render,redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status,viewsets,permissions
from django.contrib import messages
from django.contrib.auth.models import User  
from .forms import Reg_Form
from .serializers import LoggedInSerializer,UserSerializer
from django.contrib.auth.decorators import login_required
from .models import LoggedInUser,PanITR,IvrsBill,Sentimental
from rest_framework.views import APIView
from .helpers import bank_statement,sentimental_analysis,bill_default,bank_score,senti_score,bill_score,sales_score,asset_score
from django.http import JsonResponse
from django.contrib.auth.middleware import get_user

from django.contrib.auth import get_user_model
User = get_user_model()




class UserViewSet(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class=UserSerializer



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
    print("------------------------")
    serializer=LoggedInSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(user_id=get_user(request))
        return Response(serializer.data)
    return Response(serializer.errors,st,status=status.HTTP_400_BAD_REQUEST)
# class LoggedinApiView(APIView):
#     def post(self, request):
#         serializer = LoggedInSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save(user_id=request.user)
#         return Response(status=status.HTTP_201_CREATED)

@api_view(["GET"])
def TrialView(request):
    target_id=get_user(request)
    loggedinobj=LoggedInUser.objects.filter(user_id=target_id).first()
    # PanITR object created 
    pan_obj=PanITR.objects.filter(pan_no=loggedinobj.pan_no).first()
    #IvrsBill object created
    ivrs_obj=IvrsBill.objects.filter(ivrs_no=loggedinobj.ivrs_no).first()
    #sentimental object created
    senti_obj=Sentimental.objects.filter(udhyog_id=loggedinobj.udhyog_id).first()

    bank_defaults=bank_statement(pan_obj.bankcsv)
    sentimental_defaults=sentimental_analysis(senti_obj.senticsv)
    bill_defaults=bill_default(ivrs_obj.billcsv)
    bank_scores=bank_score(bank_defaults)
    bill_scores=bill_score(bill_defaults)
    senti_scores=senti_score(sentimental_defaults)
    sales_scores=sales_score(pan_obj)
    debt_ratio=asset_score(pan_obj)
    adscore=0.25*sales_scores+0.3*debt_ratio+0.3*bank_scores+0.1*bill_scores+0.05*senti_scores
    adscore=adscore*20
    context={
        'username':request.user.username,
        'bank_defaults':bank_defaults,
        'bank_scores':bank_scores,
        'bill_defaults':bill_defaults,
        'bill_scores':bill_scores,
        'senti_scores':senti_scores,
        'senti_defaults':sentimental_defaults,
        "sales_score":sales_scores,
        "debt_ratio":debt_ratio,
        "total_score":adscore,
    }
    return JsonResponse(context)
    # return Response(json.dumps(context))
    # return render(request,"users/trial.html",context)