# Generated by Django 4.2.11 on 2024-03-22 09:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0007_productimage_color'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productimage',
            name='color',
            field=models.CharField(default='Regular', max_length=100),
        ),
    ]
