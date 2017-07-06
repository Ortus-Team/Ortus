from main.models import User
from main.models import Photo
from rest_framework import serializers


# https://docs.djangoproject.com/en/1.11/ref/contrib/auth/  <-- info about django User model 
class UserSerializer(serializers.ModelSerializer):
	class_standing = serializers.CharField(source='member.class_standing')
	join_date = serializers.DateTimeField(source='member.join_date')
	class Meta:
		model = User
		#fields = ('id', 'class_standing', 'join_date',)
		fields = ('id', 'username', 'first_name', 'class_standing', 'join_date')

class PhotoSerializer(serializers.ModelSerializer):
	class Meta:
		model = Photo
		fields = ('id', 'name', 'image')



