from django.urls import path
from . import views

urlpatterns = [
    path('home',views.Home.as_view(), name = 'home'),
    path('video/<str:pk>',views.Videos.as_view(), name = 'video'),
    path('blog/<str:pk>',views.Blogs.as_view(), name = 'blog'),
    path('product', views.all_products , name='product'),
    path('brands', views.brands , name='brands'),
    path('trends', views.get_trends , name='trends'),
    path('data', views.get_data , name='data'),
    path('top', views.top_items , name='top'),
]