from django.db import models

class VisitorResponse(models.Model):

    VISIT_CHOICES = [
        ('curiosity', 'I am curious'),
        ('research', 'I am researching'),
        ('collaboration', 'I want to collaborate'),
        ('knickers', 'I am here for the knickers'),
        ('poetry', 'I want to read poetry'),
        ('rumour', 'I heard a rumour'),
        ('other', 'I am just browsing'),
    ]

    reason_for_visit = models.CharField(
        max_length=50,
        choices=VISIT_CHOICES
    )

    personal_response = models.TextField()

    consent = models.BooleanField(default=False)

    submitted_at = models.DateTimeField(auto_now_add=True)