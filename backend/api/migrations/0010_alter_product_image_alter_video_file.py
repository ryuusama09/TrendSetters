# Generated by Django 4.0.6 on 2022-07-30 03:59

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_alter_category_description_alter_product_image_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=api.models.upload_path_handler),
        ),
        migrations.AlterField(
            model_name='video',
            name='file',
            field=models.FileField(blank=True, null=True, upload_to=api.models.upload_path_handler),
        ),
    ]
