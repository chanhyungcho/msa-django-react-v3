from django.urls import re_path as url

from django1 import views as view_django1

urlpatterns = [
    url(r'user-list', view_django1.user_list),
    url(r'login', view_django1.login)
]