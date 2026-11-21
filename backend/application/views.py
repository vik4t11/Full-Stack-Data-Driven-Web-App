from django.shortcuts import render, redirect
from .visitor_form.forms import VisitorResponseForm

def entry(request):

    if request.method == 'POST':
        form = VisitorResponseForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect('home')

    else:
        form = VisitorResponseForm()

    return render(request, '00_entry.html', {
        'form': form
    })


def home(request):
    return render(request, '01_home.html')

def manifesto(request):
    return render(request, "02_manifesto.html")

def contact(request):
    return render(request, "03_contact.html")

def shop(request):
    return render(request, "04_shop.html")

def checkout(request):
    return render(request, "05_checkout.html")

def privacy(request):
    return render(request, "06_privacy.html")

def poetry(request):
    return render(request, "07_poetry.html")