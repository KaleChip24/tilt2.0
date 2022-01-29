from django.urls import path
from . import views
from rest_framework_simplejwt import views as jwt_views



urlpatterns = [
    path('user/signIn/', jwt_views.TokenObtainPairView.as_view(),
        name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(),
        name='token_refresh'),
    path('user/signIn/', views.LoginView.as_view(), name="auth-login"),
    path('user/signUp/', views.RegisterUserView.as_view(), name="user-signup"),
]