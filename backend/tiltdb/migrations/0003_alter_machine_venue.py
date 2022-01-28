# Generated by Django 4.0.1 on 2022-01-28 19:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tiltdb', '0002_alter_machine_price_alter_machine_venue'),
    ]

    operations = [
        migrations.AlterField(
            model_name='machine',
            name='venue',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='machine', to='tiltdb.venue'),
        ),
    ]