from exrc.nlp.imdb.services import NaverMovieService

if __name__ == '__main__':
    result = NaverMovieService().process("쓰레기")
    print(f"긍정률 : {result}")