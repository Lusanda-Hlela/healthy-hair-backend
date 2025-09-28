"""
URL configuration for nexus project.
"""

from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from accounts.views import UserListView, RegisterView, LogoutView
from django.shortcuts import redirect

# Swagger / Redoc schema
schema_view = get_schema_view(
    openapi.Info(
        title="Nexus API",
        default_version="v1",
        description="API documentation for Nexus E-commerce Backend",
        terms_of_service="https://www.example.com/terms/",
        contact=openapi.Contact(email="support@example.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


# Root redirect to Swagger
def root_redirect(request):
    return redirect("/swagger/")


urlpatterns = [
    path("", root_redirect),  # Redirect root URL to Swagger
    path("admin/", admin.site.urls),
    path("api/", include("store.urls")),
    # JWT Authentication
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/logout/", LogoutView.as_view(), name="logout"),
    # User Management
    path("api/register/", RegisterView.as_view(), name="register"),
    path("api/users/", UserListView.as_view(), name="user-list"),
    # API Documentation
    path(
        "swagger/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    path("redoc/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"),
]
