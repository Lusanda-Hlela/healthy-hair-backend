from django.contrib import admin
from .models import (
    Category,
    Product,
    ProductImage,
    Review,
    Order,
    OrderItem,
    ProductCategory,
)


# ---------- Inline Classes ----------
class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1  # empty slots for adding new images


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0
    readonly_fields = ("product", "quantity")


# ---------- Custom Admin Models ----------
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)

    class Meta:
        verbose_name_plural = "Categories"


@admin.register(ProductCategory)
class ProductCategoryAdmin(admin.ModelAdmin):
    list_display = ("product", "category")
    search_fields = ("product__name", "category__name")

    class Meta:
        verbose_name_plural = "Product Categories"


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "price")
    search_fields = ("name", "description")
    inlines = [ProductImageInline]


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ("user", "product", "rating")
    search_fields = ("user__username", "product__name")
    list_filter = ("rating",)


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "total_price")
    search_fields = ("user__username", "id")
    inlines = [OrderItemInline]


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ("order", "product", "quantity")
    search_fields = ("product__name", "order__id")
