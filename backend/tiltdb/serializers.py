from rest_framework import serializers
from .models import Venue, Machine
    

class MachineSerializer(serializers.HyperlinkedModelSerializer):
  venue = serializers.StringRelatedField()
  class Meta:
    model = Machine
    fields = ['id','name', 'price', 'comments', 'venue']
    
    
class VenueSerializer(serializers.HyperlinkedModelSerializer):
  machine = MachineSerializer(many=True)
  class Meta:
    model = Venue
    fields = ['id','name', 'address', 'city', 'state', 'machine']
    
  def create(self, validate_data):
    machine_data = validated_data.pop('machine')
    venue = Venue.objects.create(**validated_data)
    for machine_data in machine_data:
      Machine.objects.create(venue=venue, **machine_data)
    return venue