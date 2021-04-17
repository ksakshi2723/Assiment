from django.shortcuts import render,HttpResponse
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from quiz_api.serializers import UserSerializer,QuizerSerializer,QuestionSerializer,\
    AnswerSerializer,ExamSerializer,FeedbackSerializer,QuizSerializer
from django.http import JsonResponse
from quiz_api.models import Quizer,Question,Answer,Exam,Feedback,Quiz,QuizTaker,TotalResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
import random
from django.db.models import Max
import base64
import json
class UserViewSet(viewsets.ModelViewSet):
   
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer                                                        



class ExamViewSet(viewsets.ModelViewSet):
    queryset=Exam.objects.all()
    serializer_class=ExamSerializer   

class FeedbackViewSet(viewsets.ModelViewSet):
    queryset=Feedback.objects.all()
    serializer_class=FeedbackSerializer

class QuizViewSet(viewsets.ModelViewSet):
    queryset=Quiz.objects.all()
    serializer_class=QuizSerializer


@api_view(['GET', 'POST'])
def quizerUser(request):
    if request.method == 'POST':
        data=request.data
        if Quizer.objects.filter(username=data['username'],password=data['password']).exists():
            user=Quizer.objects.get(username=data['username'],password=data['password'])
            
            if TotalResponse.objects.filter(user=user).exists():
                return JsonResponse({'msg':"Your test has been already submitted"})
            else:
                serializer = QuizerSerializer(user)
                if Answer.objects.filter(user=user).exists():
                    return JsonResponse({'data':serializer.data,'attempt':True})
            
                else:

                    return JsonResponse({'data':serializer.data,'attempt':False})
                    
        else:
            return JsonResponse({'msg':"Invalid credentials for login"})
  
class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


@api_view(['GET', 'POST'])
def quiz_question(request):
    if request.method == 'GET':
        data=request.data
        quiz = Quiz.objects.get(id=1)
        
        user=Quizer.objects.get(username='manish')
        quiz_user=QuizTaker.objects.get(user=user,quiz=quiz)
        if int(quiz_user.question_attemted)<=20:
            question=Question.objects.filter(quiz=quiz,difficulty=1)
            serializer = QuestionSerializer(question[0])
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def easy_question(request):
    if request.method == 'POST':
        data=request.data
        print(data)
        quiz = Quiz.objects.get(id=data['items']['id'])
        user=Quizer.objects.get(username=data['username'])
        if Answer.objects.filter(user=user,quiz=quiz).exists():
            anss=Answer.objects.filter(user=user,quiz=quiz)
            que_idx=anss[0].level_1+1
            question=Question.objects.filter(quiz=quiz,difficulty=1)
           # ans=Answer.objects.filter(user=user,quiz=quiz).update(level_1=que_idx)
            serializer = QuestionSerializer(question[que_idx-1])
          
            
            
            
            # data = base64.urlsafe_b64encode(json.dumps(serializer.data).encode()).decode()
            # # data = json.loads(base64.urlsafe_b64decode(data.encode()).decode())
            # print(data)
            return Response(serializer.data)
            
        else:
            a=Answer.objects.create(user=user,quiz=quiz,level_1=0,level_2=0,level_3=0)
            a.save()
            anss=Answer.objects.filter(user=user,quiz=quiz)
            que_idx=anss[0].level_1+1
            question=Question.objects.filter(quiz=quiz,difficulty=1)
            ans=Answer.objects.filter(user=user,quiz=quiz).update(level_1=que_idx)
            serializer = QuestionSerializer(question[que_idx-1])
            # data = base64.urlsafe_b64encode(json.dumps(serializer.data).encode()).decode()
            # print(data)
            return Response(serializer.data)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def medium_question(request):
    if request.method == 'POST':
        data=request.data
        quiz = Quiz.objects.get(id=data['items']['id'])
        user=Quizer.objects.get(username=data['username'])
        if Answer.objects.filter(user=user,quiz=quiz).exists():
            anss=Answer.objects.filter(user=user,quiz=quiz)
            que_idx=anss[0].level_2+1
            question=Question.objects.filter(quiz=quiz,difficulty=2)
            ans=Answer.objects.filter(user=user,quiz=quiz).update(level_2=que_idx)
            serializer = QuestionSerializer(question[que_idx-1])
            # data = base64.urlsafe_b64encode(json.dumps(serializer.data).encode()).decode()
            # return Response(data)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
@api_view(['GET', 'POST'])
def hard_question(request):
    if request.method == 'POST':
        data=request.data
        quiz = Quiz.objects.get(id=data['items']['id'])
        user=Quizer.objects.get(username=data['username'])
        if Answer.objects.filter(user=user,quiz=quiz).exists():
            anss=Answer.objects.filter(user=user,quiz=quiz)
            que_idx=anss[0].level_3+1
            question=Question.objects.filter(quiz=quiz,difficulty=3)
            ans=Answer.objects.filter(user=user,quiz=quiz).update(level_3=que_idx)
            serializer = QuestionSerializer(question[que_idx-1])
            # data = base64.urlsafe_b64encode(json.dumps(serializer.data).encode()).decode()
            # return Response(data)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET', 'POST'])
def save_answer(request):
    if request.method == 'POST':
        data=request.data
        user=Quizer.objects.get(username=data['username'])
        quiz=Quiz.objects.get(id=data['items']['id'])
        if QuizTaker.objects.filter(user=user,quiz=quiz).exists():
            q=QuizTaker.objects.filter(user=user,quiz=quiz)
            QuizTaker.objects.filter(user=user,quiz=quiz).update(score=data['marks'])
            return Response(status=status.HTTP_201_CREATED)
        else:
            q=QuizTaker.objects.create(user=user,quiz=quiz,score=data['marks'],question_attemted=1,completed=False)
            q.save()
            return Response(status=status.HTTP_201_CREATED)


@api_view(['GET','POST'])
def save_test(request):
    if request.method == 'POST':
        data=request.data
        user=Quizer.objects.get(username=data['items']['username'])         
        quiz=QuizTaker.objects.filter(user=user)
        result=TotalResponse.objects.create(user=user,quiz_1=quiz[0].quiz,score1=quiz[0].score,quiz_2=quiz[1].quiz\
            ,score2=quiz[1].score,quiz_3=quiz[2].quiz,score3=quiz[2].score)
        result.save()
        ans=Answer.objects.filter(user=user)
        ans.delete()
        return Response(status=status.HTTP_201_CREATED)

@api_view(['GET', 'POST'])
def feedback(request):
    if request.method == 'POST':
        data=request.data
        
        user=Quizer.objects.get(username=data['items']['username'])
        q=Feedback.objects.create(username=user,name=data['items']['Name'],email=data['items']['email'],subject=data['items']['subject'],messages=data['items']['message'])
        q.save()
        
        return Response(status=status.HTTP_201_CREATED)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)   
    
def show(request):
    user=Quizer.objects.get(username="manish")
    quiz=QuizTaker.objects.filter(user=user)
    return HttpResponse(quiz[0].score)