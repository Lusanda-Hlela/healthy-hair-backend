from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CategoryViewSet,
    ProductViewSet,
    ProductImageViewSet,
    ReviewViewSet,
    OrderViewSet,
    OrderItemViewSet,
    ProductCategoryViewSet,
)

router = DefaultRouter()
router.register(r"categories", CategoryViewSet)
router.register(r"products", ProductViewSet)
router.register(r"product-images", ProductImageViewSet)
router.register(r"reviews", ReviewViewSet)
router.register(r"orders", OrderViewSet)
router.register(r"order-items", OrderItemViewSet)
router.register(r"product-categories", ProductCategoryViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
