from django.urls import path,include
from Rest1 import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('',views.SnippetList.as_view()),
    path('snippets/', views.SnippetList.as_view()),
    path('snippets/<int:pk>/', views.SnippetDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)