# Generated by Django 4.1.5 on 2023-01-21 14:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0005_rename_name_property_description_property_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='property',
            name='photo_1',
            field=models.FileField(blank=True, null=True, upload_to='Photos'),
        ),
        migrations.AddField(
            model_name='property',
            name='photo_2',
            field=models.FileField(blank=True, null=True, upload_to='Photos'),
        ),
        migrations.AddField(
            model_name='property',
            name='photo_3',
            field=models.FileField(blank=True, null=True, upload_to='Photos'),
        ),
    ]
