from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from main.models import User
from api.serializers import UserSerializer
from api.serializers import SignUpSerializer
from rest_framework import generics
from api.permissions import IsAuthenticatedOrCreate
# from rest_framework import status
# from rest_framework.response import Response
# # from social.apps.django_app.utils import load_strategy
# # from social.apps.django_app.utils import load_backend
# import social.apps.django_app
# from social.backends.oauth import BaseOAuth1, BaseOAuth2
# from social.exceptions import AuthAlreadyAssociated

@csrf_exempt
def member_list(request):

	if request.method == 'GET':
			users = User.objects.all()
			serializer = UserSerializer(users, many=True)
			return JsonResponse(serializer.data, safe=False)

	elif request.method == 'POST':
		data = JSONParser().parse(request)
		serializer = UserSerializer(data=data)
		if serializer.is_valid():
			serializer.save()
			return JsonResponse(serializer.data, status=201)
		return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def member_detail(request, pk):

	try:
		user = User.objects.get(pk=pk)
	except User.DoesNotExist:
		return HttpResponse(status=404)

	if request.method == 'GET':
		serializer = UserSerializer(user)
		return JsonResponse(serializer.data)

	elif request.method == 'PUT':
		data = JSONParser().parse(request)
		serializer = UserSerializer(user, data=data)
		if serializer.is_valid():
			serializer.save()
			return JsonResponse(serializer.data)
		return JsonResponse(serializer.errors, status=400)

	elif request.method == 'DELETE':
		user.delete()
		return HttpResponse(status=204)

class SignUp(generics.CreateAPIView):
	queryset = User.objects.all()
	serializer_class = SignUpSerializer
	permission_classes = (IsAuthenticatedOrCreate,)

