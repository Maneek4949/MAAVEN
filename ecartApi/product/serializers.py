from rest_framework import serializers
from .models import Product, Size, ProductImage

class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = '__all__'

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True)
    sizes = SizeSerializer(many=True)

    class Meta:
        model = Product
        fields = ['product_id', 'product_name', 'category', 'product_type', 'product_description', 'price', 'images', 'slug', 'sizes']
