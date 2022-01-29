from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from tiltdb import views

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = routers.DefaultRouter()
router.register('venues', views.VenueViewSet)
router.register('machines', views.MachineViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('', include('accounts.urls')),
    path('api-auth/', include('rest_framework.urls')),
  
]