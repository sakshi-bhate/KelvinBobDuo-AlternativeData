
from django.contrib import admin
from .models import LoggedInUser,PanITR,GovtDatabase,IvrsBill
# Register your models here.
admin.site.register(LoggedInUser)
admin.site.register(PanITR)
admin.site.register(GovtDatabase)

admin.site.register(IvrsBill)