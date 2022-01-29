from rest_framework import viewsets, permissions
from .serializers import VenueSerializer, MachineSerializer
from .models import Venue, Machine



class VenueViewSet(viewsets.ModelViewSet):
  queryset = Venue.objects.all()
  serializer_class = VenueSerializer
  permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
  
class MachineViewSet(viewsets.ModelViewSet):
  queryset = Machine.objects.all()
  serializer_class = MachineSerializer
  permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
  
  