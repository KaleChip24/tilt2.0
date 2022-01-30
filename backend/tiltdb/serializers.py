from rest_framework import serializers, fields
from .models import Venue, Machine
    

class MachineSerializer(serializers.ModelSerializer):
  class Meta:
    model = Machine
    fields = ['id','name', 'price', 'comments', 'venue']
    
    
class VenueSerializer(serializers.ModelSerializer):
  machines = MachineSerializer(many=True)
  class Meta:
    model = Venue
    fields = ['id','name', 'address', 'city', 'state', 'machines']
    
  def create(self, validated_data):
    machine_data = validated_data.pop('machines')
    venue = Venue.objects.create(**validated_data)
    for machine_data in machine_data:
      Machine.objects.create(venue=venue, **machine_data)
    return venue
  
  def update(self, instance, validated_data):
    machines_data = validated_data.pop('machines')
    machines = (instance.machines).all()
    machines = list(machines)
    instance.name = validated_data.get('name', instance.name)
    instance.address = validated_data.get('address', instance.address)
    instance.city = validated_data.get('city', instance.city)
    instance.state = validated_data.get('state', instance.state)
    instance.save()
    
    for machine_data in machines_data:
        machine = machines.pop(0)
        machine.name = machine_data.get('name', machine.name)
        machine.price = machine_data.get('price', machine.price)
        machine.comments = machine_data.get('comments', machine.comments)
        machine.save()
    return instance
        