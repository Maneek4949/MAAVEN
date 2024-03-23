from django.contrib import admin
from .models import Product, ProductImage, Size

admin.site.register(Product)
admin.site.register(ProductImage)
admin.site.register(Size)

# Register your models here.
