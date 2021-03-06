from django.db import models
from django.contrib.auth.models import User

Question_Type=((1,"easy"),(2,'medium'),(3,'hard'))
Answer=((1,1),(2,2),(3,3),(4,4))
class Quizer(models.Model):
    id=models.AutoField(primary_key=True)
    username=models.CharField(max_length=50,blank=False,unique=True)
    password=models.CharField(max_length=50,blank=False)
    def __str__(self):
        return self.username
    
class Quiz(models.Model):
    author = models.ForeignKey(User, on_delete=models.DO_NOTHING, default=None)
    title = models.CharField(max_length=255, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    times_taken = models.IntegerField(default=0, editable=False)

    @property
    def question_count(self):
        return self.questions.count()
    
    class Meta:
        verbose_name_plural = "Quizzes"
        ordering = ['id']

    def __str__(self):
        return self.title

class Question(models.Model):
    quiz = models.ForeignKey(
        Quiz, 
        related_name='questions', 
        on_delete=models.DO_NOTHING
    )
    
    questions= models.CharField(max_length=255, default='',blank=True)
    
    option1=models.CharField(max_length=255,default=" ",blank=True)

    option2=models.CharField(max_length=255,default=" ",blank=True)

    option3=models.CharField(max_length=255,default=" ",blank=True)
 
    option4=models.CharField(max_length=255,default=" ",blank=True)
   
    correct_option=models.IntegerField(choices=Answer,default=1)
    difficulty=models.IntegerField(default=1,choices=Question_Type)
    class Meta:
            ordering = ['id']

    def __str__(self):
        return self.questions


class Exam(models.Model):
    exam=models.AutoField(primary_key=True)
    active=models.BooleanField(default=False)
    section1=models.ForeignKey(Quiz,related_name="section1",on_delete=models.CASCADE)
    section2=models.ForeignKey(Quiz,related_name="section2",on_delete=models.CASCADE)
    section3=models.ForeignKey(Quiz,related_name="section3",on_delete=models.CASCADE)
    
    
class QuizTaker(models.Model):

    user = models.ForeignKey(Quizer,on_delete=models.CASCADE)
    quiz = models.ForeignKey(Quiz,on_delete=models.CASCADE)
    score = models.IntegerField(default=0)
    question_attemted=models.IntegerField(default=0)
    completed = models.BooleanField(default=False)
    date_finished = models.DateTimeField(null=True,auto_now_add=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.user.username
    class Meta:
        unique_together = (('user', 'quiz'))

# class QuizResponse(models.Model):
#     user=models.ForeignKey(Quizer,on_delete=models.CASCADE)
class TotalResponse(models.Model):
    user=models.ForeignKey(Quizer,on_delete=models.CASCADE)
    quiz_1=models.CharField(max_length=50,default="")
    score1=models.IntegerField()
    quiz_2=models.CharField(max_length=50,default="")
    score2=models.IntegerField()
    quiz_3=models.CharField(max_length=50,default="")
    score3=models.IntegerField()
    @property
    def total(self):
        return self.score1+self.score2+self.score3
    def __str__(self):
        return self.user.username

class Answer(models.Model):
    user = models.ForeignKey(Quizer,on_delete=models.CASCADE)
    quiz = models.ForeignKey(Quiz,on_delete=models.CASCADE)
    level_1=models.IntegerField(default=0)
    level_2=models.IntegerField(default=0)
    level_3=models.IntegerField(default=0)
    
    class Meta:
        unique_together = (('user', 'quiz'))
    def __str__(self):
        return self.user.username



class Feedback(models.Model):
    username=models.ForeignKey(Quizer,on_delete=models.CASCADE,default=1)
    name=models.CharField(max_length=100,default="")
    email=models.CharField(max_length=100,default="")
    subject=models.CharField(max_length=100,default="")
    messages=models.CharField(max_length=200,default="")

