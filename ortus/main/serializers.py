from main.models import Member
from rest_framework import serializers

# https://docs.djangoproject.com/en/1.11/ref/contrib/auth/  <-- info about django User model 
class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = Member
		fields = ('id', 'class_standing', 'join_date')

