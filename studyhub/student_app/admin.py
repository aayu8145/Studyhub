from django.contrib import admin
from .models import Feedback, Contact, Subject, UserProfile
from django.contrib.admin.sites import AdminSite

# Custom admin site class
class MyAdminSite(AdminSite):
    site_header = "StudyHub Admin"
    site_title = "StudyHub Admin Portal"
    index_title = "Manage StudyHub Content"

    class Media:
        css = {
            "all": ("css/custom_admin.css",)  # Link to your custom CSS
        }

# Create instance of custom admin site
admin_site = MyAdminSite(name='myadmin')

# Register models with custom admin site only
admin_site.register(Feedback)
admin_site.register(Contact)
admin_site.register(Subject)
admin_site.register(UserProfile)
