"""
ASGI config for website project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/6.1/howto/deployment/asgi/
"""

# Import the operating-system module for environment-variable access.
import os

# Import Django's ASGI application factory.
from django.core.asgi import get_asgi_application

# Use these project settings unless another settings module is already configured.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'configuration.settings')

# Create the ASGI callable used by Django's ASGI server.
application = get_asgi_application()
