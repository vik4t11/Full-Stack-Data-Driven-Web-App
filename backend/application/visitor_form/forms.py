from django import forms
from .models import VisitorResponse


class VisitorResponseForm(forms.ModelForm):
    class Meta:
        model = VisitorResponse
        fields = [
            'reason_for_visit',
            'personal_response',
            'consent'
        ]

        labels = {
            'reason_for_visit': 'What led you to this space?',
            'personal_response': 'Tell me more...',
            'consent': 'I consent to share my anonymous responce with Neli'
        }
