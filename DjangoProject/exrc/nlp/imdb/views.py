import json
from django.http import JsonResponse
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser

from exrc.nlp.imdb.services import NaverMovieService


@api_view(['POST'])
def review(request):
    # print(f"######## Post id is {request.POST['id']} ########")
    # return JsonResponse({'result':
    #             NaverMovieService().process(request.POST['id'])})
    # #print(f'######################{type(resp)}########################{resp}')

    id = json.loads(request.body)  # json to dict
    print(f"######## Post id is {id} type is {type(id)} ########")
    a = NaverMovieService().process(id)
    print(f'리턴결과 : {a}')
    return JsonResponse({'result': a})


