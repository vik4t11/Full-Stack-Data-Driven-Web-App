from django.urls import path
from . import views

urlpatterns = [
    path('', views.entry, name='entry'),
    path('home/', views.home, name='home'),
    path("manifesto/", views.manifesto, name="manifesto"),
    path("contact/", views.contact, name="contact"),
    path("shop/", views.shop, name="shop"),
    path("checkout/", views.checkout, name="checkout"),
    path("privacy/", views.privacy, name="privacy"),
    path("poetry/", views.poetry, name="poetry"),
]