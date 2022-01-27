from rest_framework import serializers
from .models import Venue, Machine

class VenueSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Venue
    fields = ['id','name', 'address', 'city', 'state', 'machine']
    

class MachineSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Machine
    fields = ['id','name', 'price', 'comments']