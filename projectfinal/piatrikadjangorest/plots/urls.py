
from django.conf.urls import url 
from plots import views 
 
urlpatterns = [ 
    url(r'^plots/$', views.master),
    url(r'^plots/(?P<pk>[0-9]+)$', views.master_detail),
    url(r'^ryots/$', views.master),
    url(r'^ryots/(?P<pk>[0-9]+)$', views.master_detail),
]
