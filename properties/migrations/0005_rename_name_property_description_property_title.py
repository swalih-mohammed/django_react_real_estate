# Generated by Django 4.1.5 on 2023-01-20 04:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0004_remove_property_is_for_rent_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='property',
            old_name='name',
            new_name='description',
        ),
        migrations.AddField(
            model_name='property',
            name='title',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
    ]
