from django.db import models
from phone_field import PhoneField
from django.contrib.auth.models import User

# Create your models
class LoggedInUser(models.Model):
    user_id=models.OneToOneField(User,on_delete=models.CASCADE)
    phone_no=models.PositiveBigIntegerField(help_text="business registered contact",unique=True)
    pan_no=models.CharField(max_length=10,unique=True)
    udhyog_id=models.PositiveBigIntegerField(unique=True)
    aadhar_no=models.PositiveBigIntegerField()
    ivrs_no=models.CharField(max_length=11,unique=True,help_text="property of business")
    gst_no=models.CharField(max_length=15)
    upi_id=models.CharField(max_length=45,unique=True)

    def __int__(self):
        return self.udhyog_id

class PanITR(models.Model):
    pan_no=models.ForeignKey(LoggedInUser,to_field="pan_no",on_delete=models.CASCADE)
    net_profit=models.IntegerField()
    gross_profit=models.IntegerField()
    loans=models.IntegerField()
    assets=models.IntegerField()
    bankcsv=models.CharField(max_length=250)
    credit=models.IntegerField()

class GovtDatabase(models.Model):
    phone_no=models.PositiveBigIntegerField()
    udhyog_id=models.PositiveBigIntegerField()
    gst_no=models.CharField(max_length=15)
    aadhar_no=models.PositiveBigIntegerField()

class IvrsBill(models.Model):
    ivrs_no=models.ForeignKey(LoggedInUser,to_field="ivrs_no", on_delete=models.CASCADE)
    billcsv=models.CharField(max_length=254)

class Sentimental(models.Model):
    udhyog_id=models.ForeignKey(LoggedInUser,to_field="udhyog_id",on_delete=models.CASCADE)
    senticsv=models.CharField(max_length=254)