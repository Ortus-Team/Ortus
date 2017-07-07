from main.models import User
from main.models import Photo
from main.models import Org
from main.models import Event
from main.models import Post
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

class OrgSerializer(serializers.ModelSerializer):
	name = serializers.CharField(source='org.name')
	join_date = serializers.DateTimeField(source='org.join_date')
	description = serializers.CharField(source='org.description')

	class Meta:
		model = Org
		fields = ('id', 'name', 'join_date', 'description')

class EventSerializer(serializers.ModelSerializer):
	name = serializers.CharField(source='event.name')
	event_date = serializers.DateTimeField(source='event.event_date')
	access_level = serializers.CharField(source='event.access_level')
	location = serializers.CharField(source='event.location')
	description = serializers.CharField(source='event.description')

	class Meta:
		model = Event
		fields = ('id', 'name', 'event_date', 'access_level', 'location', 'description')

class PostSerializer(serializers.ModelSerializer):
	name = serializers.CharField(source='post.name')
	created_date = serializers.DateTimeField(source='post.event_date')
	description = serializers.CharField(source='post.description')

	class Meta:
		model = Post
		fields = ('id', 'name', 'created_date', 'description')

class SignUpSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('username', 'password')
		write_only_fields = ('password',)
