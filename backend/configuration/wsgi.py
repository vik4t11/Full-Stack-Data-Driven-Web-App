"""
WSGI config for website project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/6.1/howto/deployment/wsgi/
"""

# Import the os module to configure Django's settings module.
import os

# Import Django's WSGI application factory.
from django.core.wsgi import get_wsgi_application

# Set the default settings module used by Django.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'nelifont.settings')

# Create the WSGI application callable for deployment servers.
application = get_wsgi_application()
