from django.db import models

# change later to reflect admin and normal users
# see Django document for built in user function?
class User(models.Model):
    email = models.CharField(max_length=50)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    class_standing = models.CharField(max_length=10)
    join_date = models.DateTimeField(auto_now_add=True)
    #profile_pic = models.ForeignKey('Photo')
    

class FollowerToOrg(models.Model):
    user = models.ForeignKey('User');
    org = models.ForeignKey('Org');
    following_date = models.DateTimeField(auto_now_add=True)


class UserToOrg(models.Model):
    user = models.ForeignKey('User');
    org = models.ForeignKey('Org');
    join_date = models.DateTimeField(auto_now_add=True)
    # set rules so that new rows in this table are automatically added to FollowersTo'Org'

    #class 'Photo'(models.Model):
    #caption = models.CharField(max_length=64, blank=True)
    #blob = ImageField(
    #    upload_to='BlobStorage',
    #    storage=AppEngineBlobStorage(),
    #    max_length=255,
    #    blank=False,
    #)
    #serving_url = models.URLField()
    # http://stackoverflow.com/questions/18747730/storing-images-in-db-using-django-models


class Org(models.Model):
    name = models.CharField(max_length=50)
    join_date = models.DateTimeField(auto_now_add=True)
    description = models.CharField(max_length=60000)
    #logo = models.ForeignKey('Photo')
    #cover_photo = models.ForeignKey('Photo')

class PostToOrg(models.Model):
    org = models.ForeignKey('Org')
    post = models.ForeignKey('Post')

class PostToUser(models.Model):
    user = models.ForeignKey('User')
    post = models.ForeignKey('Post')

class PhotoToOrg(models.Model):
    org = models.ForeignKey('Org')
    #photo = models.ForeignKey('Photo')

class PhotoToUser(models.Model):
    user = models.ForeignKey('User')
    #photo = models.ForeignKey('Photo')

class Event(models.Model):
    name = models.CharField(max_length=100)
    event_date = models.DateTimeField()
    access_level = models.CharField(max_length=10) # 0: open 1: member only 2: officer only
    location = models.CharField(max_length=200)
    description = models.CharField(max_length=60000)
    
class Post(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=60000)
    created_date = models.DateTimeField(auto_now_add=True)

class PhotoToPost(models.Model):
    post = models.ForeignKey('Post')
    #photo = models.ForeignKey('Photo')

class EventToPost(models.Model):
    post = models.ForeignKey('Post')
    event = models.ForeignKey(Event)

class UserToPost(models.Model):
    post = models.ForeignKey('Post')
    user = models.ForeignKey('User')

class OrgToPost(models.Model):
    post = models.ForeignKey('Post')
    org = models.ForeignKey('Org')

class PhotoToEvent(models.Model):
    #photo = models.ForeignKey('Photo')
    event = models.ForeignKey(Event)

#class 'User'toEvent(models.Model): //rsvp

class EventToOrg(models.Model):
    event = models.ForeignKey(Event);
    org = models.ForeignKey('Org');
    created_date = models.DateTimeField(auto_now_add=True)

class OfficerToOrg(models.Model):
    user = models.ForeignKey('User');
    org = models.ForeignKey('Org');
    join_date = models.DateTimeField(auto_now_add=True)
