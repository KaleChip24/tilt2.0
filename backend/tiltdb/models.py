from django.db import models


class Venue(models.Model):
    name = models.CharField(max_length=128)
    address = models.CharField(max_length=256)
    city = models.CharField(max_length=128)
    state = models.CharField(max_length=128)

    def __str__(self):
        return self.name


class Machine(models.Model):
    name = models.CharField(max_length=258)
    price = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    comments = models.CharField(max_length=256)
    venue = models.ForeignKey(
        Venue, on_delete=models.CASCADE, related_name='machines', null=True, blank=True)

    def __str__(self):
        return self.name
