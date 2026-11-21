"""
URL configuration for website project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# Import Django's admin site and URL routing helpers.
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # Route administrative requests to Django's built-in admin interface.
    path('admin/', admin.site.urls),
    # Delegate all other requests to the studio application's URL configuration.
    path('', include('application.urls')),
]