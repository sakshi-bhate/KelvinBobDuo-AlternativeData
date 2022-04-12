from django.db import models
from phone_field import PhoneField

# Create your models
class Registereduser(models.Model):
    email=models.EmailField(primary_key=True,max_length=254)
    name=models.CharField(max_length=254)
    phone=PhoneField(help_text="business-registered phone number")

    def __str__(self):
        return self.email

class LoggedInUser(models.Model):
    email=models.ForeignKey('Registereduser',on_delete=models.CASCADE)
    udhyog=models.CharField(max_length=12,unique=True)
    pancard=models.CharField(max_length=10,unique=True)
    adhaar=models.BigIntegerField(unique=True,default=0)
    upi=models.CharField(max_length=45,unique=True)
    ivrs=models.CharField(max_length=11,unique=True)
    GST=models.CharField(max_length=15,unique=True,blank=True,null=True)
    def __str__(self):
        return self.udhyog
