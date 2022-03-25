from rest_framework import serializers, fields
from .models import Venue, Machine
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
    

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

class UserSerializer(serializers.ModelSerializer):
  username = serializers.CharField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
  password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
  password2 = serializers.CharField(write_only=True, required=True)
  
  class Meta:
    model = User
    fields = ('username', 'password', 'password2')
  
  def validate(self, attrs):
    if attrs['password'] !=attrs['password2']:
      raise serializers.ValidationError({"password": "Password fields do not match."})
    return attrs
  
  def crate(self, validated_data):
    user = User.objects.create(
      username=validated_data['username'],
    )
    user.set_password(validated_data['password'])
    user.save()
    return user