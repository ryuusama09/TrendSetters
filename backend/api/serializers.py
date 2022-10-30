from rest_framework import serializers
from .models import Category, SubCategory, Brand, Product, Video, Blog

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = '__all__'

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def create(self, validated_data):
        product = Product.objects.create(**validated_data)
        return product

    def update(self, instance, validated_data):
        category_validated_data = validated_data.pop('category', None)
        subcategory_validated_data = validated_data.pop('subcategory', None)
        brand_validated_data = validated_data.pop('brand', None)

        category = instance.category                   
        category.name = category_validated_data.get('name', category.name)
        category.save()

        subcategory = instance.subcategory                  
        subcategory.name = subcategory_validated_data.get('name', subcategory.name)
        subcategory.save()

        brand = instance.brand                  
        brand.name = brand_validated_data.get('name', brand.name)
        brand.save()

        instance.name = validated_data.get('name', instance.name)
        instance.price = validated_data.get('price', instance.price)
        instance.discount = validated_data.get('discount', instance.discount)
        instance.offer_price = validated_data.get('offer_price', instance.offer_price)
        instance.stock = validated_data.get('stock', instance.stock)
        instance.description = validated_data.get('description', instance.description)
        instance.image = validated_data.get('image', instance.image)
        instance.hastags = validated_data.get('hastags', instance.hastags)
        instance.buyers = validated_data.get('buyers', instance.buyers)
        instance.rating = validated_data.get('rating', instance.rating)
        instance.searches = validated_data.get('searches', instance.searches)
        instance.viewers = validated_data.get('viewers', instance.viewers)
        instance.save()
        return instance

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['category'] = CategorySerializer(instance).data
        response['subcategory'] = SubCategorySerializer(instance).data
        response['brand'] = BrandSerializer(instance).data
        return response

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'