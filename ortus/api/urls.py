from django.conf.urls import include, url
from rest_framework import routers

# Routers define the URL mapping to views
router = routers.DefaultRouter()
# router.register(r'users', UserViewSet)

urlpatterns = [
    url(r'^', include(router.urls, namespace='rest_api')),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
