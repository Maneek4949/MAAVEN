from django.db import models
from django.utils import timezone

class Product(models.Model):
    CATEGORY_CHOICES = [
        ('Men', 'Men'),
        ('Women', 'Women'),
    ]

    TYPE_CHOICES = [
        ('Tshirt', 'Tshirt'),
        ('Tanks','Tanks'),
        ('Hoodies','Hoodies'),
        ('Shorts','Shorts'),
        ('Joggers','Joggers')
    ]
    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    product_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    product_description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    images = models.ManyToManyField('ProductImage',blank=True, related_name='products')
    slug = models.SlugField(max_length=200, unique=True)
    sizes = models.ManyToManyField('Size', blank=True)
    product_date = models.DateField(default=timezone.now)

    def __str__(self):
        return self.product_name

class Size(models.Model):
    name = models.CharField(max_length=10, choices=[('XS', 'XS'),('S', 'S'),('M', 'M'),('L', 'L'),('XL', 'XL'),])

    def __str__(self):
        return self.name

class ProductImage(models.Model):
    color = models.CharField(max_length=100,default="Regular")
    image = models.ImageField(upload_to='image',blank=True)

    def __str__(self):
        return f"Image for {self.image.url}"
