# Generated by Django 4.0.1 on 2022-01-29 16:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tiltdb', '0006_venue_machine'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='venue',
            name='machine',
        ),
    ]
