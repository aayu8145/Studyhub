from django.shortcuts import render, redirect
from .models import Contact
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
from .models import Subject
from student_app import views







def home(request):
    return render(request, 'index.html')

# Course Pages
def bTech(request):
    return render(request, 'B.Tech.html')

def MCA(request):
    return render(request, 'MCA.html')

def sample(request):
    return render(request, 'sample.html')

def BSCIT(request):
    return render(request, 'BSCIT.html')

def BCAnotes(request):
    return render(request, 'BCAnotes.html')

def BCA_Data_Scince(request):
    return render(request, 'BCA_DS.html')

def BCA_CS(request):
    return render(request, 'BCA_CS.html')

def BCA_AIML(request):
    return render(request, 'BCA_AIML.html')

def register(request):
    if request.method == "POST":
        full_name = request.POST.get('full_name', '').strip()
        email = request.POST.get('email', '').strip()
        password1 = request.POST.get('password1', '')
        password2 = request.POST.get('password2', '')

        if password1 != password2:
            messages.error(request, "Passwords do not match")
            return redirect('register')

        if User.objects.filter(email=email).exists():
            messages.error(request, "Email already registered")
            return redirect('register')

        if User.objects.filter(username=full_name).exists():
            messages.error(request, "Username already taken")
            return redirect('register')

        user = User.objects.create_user(username=full_name, email=email, password=password1)
        user.save()
        messages.success(request, "Registration successful! You can log in now.")
        return redirect('login')

    return render(request, 'login.html')  


def user_login(request):
    if request.method == "POST":
        username = request.POST.get('username', '').strip()
        password = request.POST.get('password', '').strip()

        if not User.objects.filter(username=username).exists():
            messages.error(request, "User does not exist")
            return redirect('login')

        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth_login(request, user)
            messages.success(request, "Login successful!")
            return redirect('home')
        else:
            messages.error(request, "Invalid password")
            return redirect('login')

    return render(request, 'login.html')  


def logout_view(request):
    if request.user.is_authenticated:
        auth_logout(request)
        request.session.flush()
        messages.success(request, "Logged out successfully!")
    return redirect('home')
# views.py
from django.shortcuts import render, redirect
from .models import Feedback  

def feedback_view(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        course = request.POST.get('course')
        email = request.POST.get('email')
        message = request.POST.get('message')
        Feedback.objects.create(name=name, course=course, email=email, message=message)
        return redirect('/')  
    return render(request, 'your_template.html')  

def contact_us(request):
    # your logic here

    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        # Save data to Contacts model
        Contact.objects.create(name=name, email=email, message=message)
        messages.success(request, "Thank you for contacting us!")

        return redirect('contact_us')  # or wherever you want to redirect
    return render(request, 'index.html')  # your contact page template
def search_view(request):
    query = request.GET.get('query', '').strip()
    
    # Debug print to check if query is received
    print(f"Search query received: '{query}'")
    
    if query:
        results = Subject.objects.filter(name__icontains=query)
        # Debug print to check results
        print(f"Found {results.count()} results")
    else:
        results = None
    
    context = {
        'is_search_page': True,
        'query': query,
        'results': results,
        'all_subjects': Subject.objects.all()  
    }
    return render(request, 'BCAnotes.html', context)

    

   
        

