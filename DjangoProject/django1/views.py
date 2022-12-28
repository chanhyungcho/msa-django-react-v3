from django.http import JsonResponse
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser

from django1.services import UserService


@api_view(['GET'])
def user_list(request):
    return JsonResponse({'users':
                             UserService().get_users()})

@api_view(['GET'])
def login(request):
    pass

