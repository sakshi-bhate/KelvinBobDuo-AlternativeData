
from django.contrib import admin
from .models import Registereduser,LoggedInUser
# Register your models here.

admin.site.register(Registereduser)
admin.site.register(LoggedInUser)