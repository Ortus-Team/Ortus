from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from main.models import Member
from main.serializers import UserSerializer

@csrf_exempt
def member_list(request):

	if request.method == 'GET':
			members = Member.objects.all()
			serializer = UserSerializer(members, many=True)
			return JsonResponse(serializer.data, safe=False)

	elif request.method == 'POST':
		datat = JSONParser().parse(request)
		serializer = UserSerializer(data=data)
		if serializer.is_valid():
			serializer.save()
			return JsonResponse(serializer.data, status=201)
		return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def member_detail(request, pk):

	try:
		member = Member.objects.get(pk=pk)
	except Member.DoesNotExist:
		return HttpResponse(status=404)

	if request.method == 'GET':
		serializer = UserSerializer(member)
		return JsonResponse(serializer.data)

	elif request.method == 'PUT':
		data = JSONParser().parse(request)
		serializer = UserSerializer(member, data=data)
		if serializer.is_valid():
			serializer.save()
			return JsonResponse(serializer.data)
		return JsonResponse(serializer.errors, status=400)

	elif request.method == 'DELETE':
		member.delete()
		return HttpResponse(status=204)