from rest_framework import serializers
from .models import Venue, Machine

class VenueSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Venue
    fields = ['name', 'address', 'city', 'state']
    

class MachineSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Machine
    fields = ['name', 'price', 'comments']