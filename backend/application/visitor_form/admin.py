from django.contrib import admin
from .models import VisitorResponse

@admin.register(VisitorResponse)
class VisitorResponseAdmin(admin.ModelAdmin):

    list_display = (
        'reason_for_visit',
        'consent',
        'submitted_at',
    )

    list_filter = (
        'reason_for_visit',
        'consent',
        'submitted_at',
    )

    ordering = ('-submitted_at',)
