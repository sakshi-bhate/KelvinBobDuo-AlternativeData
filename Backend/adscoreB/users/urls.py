from . import views
from django.urls import path,include
from django.contrib.auth import views as auth_views
from rest_framework import routers
from .views import UserViewSet


urlpatterns=[
    path('home/',views.home,name="home"),
    path('signup/',views.register,name="signup"),
    path('login/',auth_views.LoginView.as_view(template_name='users/login.html'),name='login'),
    path('add/',views.fillDetails,name="fillDetail"),
    path('trial/',views.TrialView, name='trial'),
    path('auth/',include('rest_auth.urls')),
    path('auth/register/',include('rest_auth.registration.urls'))

    # api/users/
    
]