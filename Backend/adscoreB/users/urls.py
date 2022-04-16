from . import views
from django.urls import path
from django.contrib.auth import views as auth_views


urlpatterns=[
    path('home/',views.home,name="home"),
    path('signup/',views.register,name="signup"),
    path('login/',auth_views.LoginView.as_view(template_name='users/login.html'),name='login'),
    path('add/',views.fillDetails,name="fillDetail"),
    path('trial/',views.TrialView, name='trial')
    
]