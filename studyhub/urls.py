"""
URL configuration for studyhub project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
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
from django.contrib import admin
from django.urls import path
from student_app import views
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import views as auth_views
from django.views.generic import TemplateView  
from django.urls import path, include

admin.site.site_header = "Study Hub Admin"
admin.site.site_title = "Study Hub Admin Portal"
admin.site.index_title = "Welcome to Study Hub Admin Portal"









urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html'), name='home'),  
    path('', views.home, name='home'),
    path('bTech/', views.bTech, name='bTech'),
    path('register/', views.register, name='register'),  
    path('login/', views.user_login, name='login'),
    path('logout/', auth_views.LogoutView.as_view(next_page='/'), name='logout'),
    path('MCA/', views.MCA, name='MCA'),
    path('sample/', views.sample, name='sample'),
    path('BSCIT/', views.BSCIT, name='BSCIT'),
    path('BCAnotes/', views.BCAnotes, name='BCAnotes'),
    path('BCA_DS/', views.BCA_Data_Scince, name='BCA_DS'),
    path('BCA_CS/', views.BCA_CS, name='BCA_CS'),
    path('BCA_AIML/', views.BCA_AIML, name='BCA_AIML'),
    path('feedback/', views.feedback_view, name='feedback'),
    path('csec/', views.contact_us, name='contact_us'),
    path('search/', views.search_view, name='search'),
    path('oauth/', include('social_django.urls', namespace='social')),
  
    
  
    
   
]
