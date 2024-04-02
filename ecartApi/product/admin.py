from django.contrib import admin
from .models import Product, ProductImage, Size, Category

admin.site.register(Product)
admin.site.register(ProductImage)
admin.site.register(Size)
admin.site.register(Category)

# Register your models here.
