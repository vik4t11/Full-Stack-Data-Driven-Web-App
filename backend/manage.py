#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    # Point Django to this project's settings module unless already configured.
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'configuration.settings')
    try:
        # Import Django's command runner only when the script is invoked.
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        # Provide an actionable message when Django is unavailable.
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    # Start the command-line utility when run directly.
    main()
