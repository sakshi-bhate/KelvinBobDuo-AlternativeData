from . import views
from django.urls import path
urlpatterns=[
    path('trial/',views.checking_api,name="trial"),
    path('viewR/',views.view_reguser,name="viewR"),
    path('addR/',views.add_reguser,name="addR"),
    path('viewL/',views.view_loggedin,name="viewL"),
    path('addL/',views.add_loggedin,name="addL"),

]