# Generated by Django 4.0.6 on 2022-07-29 15:18

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_product_description_alter_product_image_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=api.models.upload_path_handler),
        ),
        migrations.AlterField(
            model_name='product',
            name='url',
            field=models.URLField(default='www.example.com', max_length=2000),
        ),
        migrations.AlterField(
            model_name='video',
            name='file',
            field=models.FileField(blank=True, null=True, upload_to=api.models.upload_path_handler),
        ),
    ]
