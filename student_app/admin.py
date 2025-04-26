from django.contrib import admin
from .models import Feedback, Contact, Subject, UserProfile

admin.site.register(Feedback)
admin.site.register(Contact)
admin.site.register(Subject)
admin.site.register(UserProfile)
class CustomAdminSite(admin.AdminSite):
    class Media:
        css = {
            'all': ('css/admin_custom.css',)  # path jo static folder ke andar hai
        }
        js = ()  # Agar custom JavaScript bhi add karna ho to yaha likh sakte ho

# Then use CustomAdminSite instead of default admin.site
admin_site = CustomAdminSite(name='custom_admin')