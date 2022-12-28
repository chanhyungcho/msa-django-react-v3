from django.urls import re_path as url

from exrc.nlp.imdb import views as view_imdb

urlpatterns = [
    url(r'naver-movie-review', view_imdb.review)

]