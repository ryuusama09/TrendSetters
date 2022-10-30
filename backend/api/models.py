from django.db import models

class Category(models.Model):
    name = models.CharField(max_length = 25, unique=True)
    description =  models.TextField(max_length=255, default = 'Best products can be found here!')

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name

class SubCategory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length = 25, unique=True)
    description =  models.TextField(max_length=255, default = 'Best products can be found here!')

    class Meta:
        verbose_name_plural = 'Sub-Categories'

    def __str__(self):
        return self.name

class Brand(models.Model):
    name = models.CharField(max_length = 30, unique=True)

    def __str__(self):
        return self.name

def upload_path_handler(instance, filename):
    return "images/products/{label}/{file}".format(
        label=instance.name, file=filename
    )

class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    subcategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE, blank= True, null= True)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    name = models.CharField(max_length = 1000, unique=True)
    price = models.FloatField(default = 0.0)
    discount = models.BooleanField(default = False)
    offer_price = models.FloatField(default=0.0)
    stock = models.PositiveIntegerField(default = 0)
    description = models.CharField(max_length = 2000, blank= True, null= True, default = 'Selling fast, Hurry up!')
    image = models.ImageField(upload_to = upload_path_handler,null = True, blank = True)
    url = models.URLField(default='www.example.com', max_length =2000)

    hastags = models.PositiveIntegerField(default = 0)
    buyers = models.PositiveIntegerField(default = 0)
    rating = models.PositiveIntegerField(default = 0)
    searches = models.PositiveIntegerField(default = 0)
    viewers = models.PositiveIntegerField(default = 0)
    rank = models.FloatField(default = 0.0)

    def __str__(self):
        return self.name

def upload_path_handler(instance, filename):
    return "videos/{label}/{file}".format(
        label=instance.name, file=filename
    )

class Video(models.Model):
    name = models.CharField(max_length = 100)
    file = models.FileField(upload_to = upload_path_handler,null = True, blank = True)
    views = models.PositiveIntegerField(default = 0)
    
    def __str__(self):
        return self.name

def upload_path_handler(instance, filename):
    return "images/blogs/{label}/{file}".format(
        label=instance.title, file=filename
    )

class Blog(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(max_length=1000)
    image = models.ImageField(upload_to = upload_path_handler,null = True, blank = True)

    def __str__(self):
        return self.title
