# Generated by Django 4.2.11 on 2024-03-22 09:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0006_remove_productimage_product_alter_product_images'),
    ]

    operations = [
        migrations.AddField(
            model_name='productimage',
            name='color',
            field=models.CharField(default='Black', max_length=100),
        ),
    ]
