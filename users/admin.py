
from django.contrib import admin
from .models import LoggedInUser,PanITR,GovtDatabase,IvrsBill,Sentimental,CustomUser
# Register your models here.
admin.site.register(CustomUser)
admin.site.register(LoggedInUser)
admin.site.register(PanITR)
admin.site.register(GovtDatabase)
admin.site.register(IvrsBill)
admin.site.register(Sentimental)