from rest_framework import viewsets
from django.contrib.auth.models import User

from filters import UserFilter
from serializers import UserSerializer

# ViewSets define the view behavior.
# class UserViewSet(viewsets.ModelViewSet):
#     """
#     List of all users who have used this application.
#     """
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     filter_class = UserFilter