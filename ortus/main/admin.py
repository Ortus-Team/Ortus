from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User

from main.models import Member, Org, FollowerToOrg, UserToOrg, PostToOrg, PostToUser

# Define an inline admin descriptor for Member model
# which acts a bit like a singleton
class MemberInline(admin.StackedInline):
    model = Member
    can_delete = True
    verbose_name_plural = 'member'

# Define a new User admin
class UserAdmin(BaseUserAdmin):
    inlines = (MemberInline, )

class OrgAdmin(admin.ModelAdmin):
    model = Org
    list_display = ("name", "description", "join_date")
    search_fields = ("name", "description")

class FollowerToOrgAdmin(admin.ModelAdmin):
    model = FollowerToOrg
    list_display = ("follower", "org", "following_date")
    search_fields = ("follower", "org")

class UserToOrgAdmin(admin.ModelAdmin):
    model = UserToOrg
    list_display = ("user", "org", "join_date")
    search_fields = ("user", "org")

class PostToOrgAdmin(admin.ModelAdmin):
    model = PostToOrg
    list_display = ("org", "post")
    search_fields = ("org", "post")

class PostToUserAdmin(admin.ModelAdmin):
    model = PostToUser
    list_display = ("post", "user")
    serach_fields = ("post", "user")


# Re-register UserAdmin
admin.site.unregister(User)
admin.site.register(User, UserAdmin)
admin.site.register(Org, OrgAdmin)
admin.site.register(FollowerToOrg, FollowerToOrgAdmin)
admin.site.register(UserToOrg, UserToOrgAdmin)
admin.site.register(PostToOrg, PostToOrgAdmin)
admin.site.register(PostToUser, PostToUserAdmin)

