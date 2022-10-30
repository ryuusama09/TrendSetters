from django.contrib import admin

from .models import Category, SubCategory, Brand, Product, Video, Blog
# Register your models here.

admin.site.register(Product)
admin.site.register(Category)
admin.site.register(SubCategory)
admin.site.register(Brand)
admin.site.register(Video)
admin.site.register(Blog)