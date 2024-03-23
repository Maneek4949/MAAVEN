from django.urls import path
from .views import *


urlpatterns = [
    path('all',ProductView.as_view()),
    path('<str:slug>',ProductDetailView.as_view())

]