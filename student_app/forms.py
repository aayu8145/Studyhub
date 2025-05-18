from django import forms
from .models import Feedback
from .models import Contact

class FeedbackForm(forms.ModelForm):
    class Meta:
        model = Feedback
        fields = '__all__'  

class ContactForm(forms.ModelForm): 
    class Meta:
        model = Contact
        fields = '__all__'

