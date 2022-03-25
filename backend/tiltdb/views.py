from rest_framework import viewsets, generics
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly 
from rest_framework.views import APIView
from django.contrib.auth.models import User
from .serializers import VenueSerializer, MachineSerializer, UserSerializer
from .models import Venue, Machine



class VenueViewSet(viewsets.ModelViewSet):
  queryset = Venue.objects.all()
  serializer_class = VenueSerializer
  permission_classes = (IsAuthenticatedOrReadOnly,)
  
class MachineViewSet(viewsets.ModelViewSet):
  queryset = Machine.objects.all()
  serializer_class = MachineSerializer
  permission_classes = (IsAuthenticatedOrReadOnly,)
  
class UserCreate(generics.CreateAPIView):
  queryset = User.objests.all()
  serializer_class = UserSerializer
  permission_class = (AllowAny)