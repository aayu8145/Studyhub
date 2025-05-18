from django.contrib import admin
from .models import Feedback, Contact, Subject, UserProfile

admin.site.register(Feedback)
admin.site.register(Contact)
admin.site.register(Subject)
admin.site.register(UserProfile)
