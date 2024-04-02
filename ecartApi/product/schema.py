import graphene
from graphene_django import DjangoObjectType
from .models import Product,ProductImage,Category,Size
from datetime import date


class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        fields = "__all__"


class ProductImageType(DjangoObjectType):
    class Meta:
        model = ProductImage
        fields = "__all__"

class CategoryType(DjangoObjectType):
    class Meta:
        model = Category
        fields = "__all__"

class SizeType(DjangoObjectType):
    class Meta:
        model = Size
        fields = "__all__"

class CreateProduct(graphene.Mutation):
    product = graphene.Field(ProductType)

    class Arguments:
        product_name = graphene.String()
        gender = graphene.String()
        product_description = graphene.String()
        slug = graphene.String()
        price = graphene.Decimal()
        category_id = graphene.ID()
        images = graphene.List(graphene.ID)
        sizes = graphene.List(graphene.ID)

    def mutate(self, info, product_name, gender, product_description, price, category_id, images, sizes, slug):
        category = Category.objects.get(pk=category_id)
        product = Product(
            product_name = product_name,
            gender=gender,
            product_description= product_description,
            price= price,
            slug = slug,
            product_date=date.today(),
            category = category
        )
        product.save()
    
        for image_id in images:
            image = ProductImage.objects.get(pk=image_id)
            product.images.add(image)

        for size_id in sizes:
            size = Size.objects.get(pk=size_id)
            product.sizes.add(size)
        

        return CreateProduct(product=product)


class UpdateProduct(graphene.Mutation):
    product = graphene.Field(ProductType)
    class Arguments:
        product_id = graphene.ID(required= True) 
        product_name = graphene.String()
        gender = graphene.String()
        product_description = graphene.String()
        slug = graphene.String()
        price = graphene.Decimal()
        category_id = graphene.ID()
        images = graphene.List(graphene.ID)
        sizes = graphene.List(graphene.ID)

    def mutate(self, info,product_id, product_name=None, gender=None, category_id=None, product_description=None, price=None, images=None, sizes=None, slug=None):
        try:
            product = Product.objects.get(pk=product_id)
        except Product.DoesNotExist:
            raise Exception("Product Not Found")
        if product_name:
            product.product_name = product_name
        if gender:
            product.gender = gender
        if category_id:
            category = Category.objects.get(pk=category_id)
            product.category = category
        if product_description:
            product.product_description = product_description
        if price is not None:
            product.price = price
        if slug:
            product.slug = slug
        if images:
            product.images.clear()
            for image_id in images:
                image = ProductImage.objects.get(pk=image_id)
                product.images.add(image)

        if sizes:
            product.sizes.clear()
            for size_id in sizes:
                size = Size.objects.get(pk=size_id)
                product.sizes.add(size)

        product.save()

        return UpdateProduct(product=product)


class DeleteProduct(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)

    success = graphene.Boolean()

    def mutate(self,info,id):
        try:
            product = Product.objects.get(pk=id)
        except Product.DoesNotExist:
            raise Exception("Product Not Found")

        product.delete()
        return DeleteProduct(success=True)


class AddProductImage(graphene.Mutation):
    product_image = graphene.Field(ProductImageType)

    class Arguments:
        color = graphene.String()
        image = graphene.String()

    def mutate(self, info, color, image):
        product_image = ProductImage(color=color)
        product_image.image.image.save('image.jpg',image)
        product_image.save()

        return AddProductImage(product_image=product_image)

class UpdateProductImage(graphene.Mutation):
    product_image = graphene.Field(ProductImageType)
    class Arguments:
        id = graphene.ID(required=True)
        color = graphene.String()
        image = graphene.String()

    def mutate(self, info , id, color , image):
        try:
            product_image = ProductImage.objects.get(pk=id)
        except ProductImage.DoesNotExist:
            raise Exception("Product Image Not Found")

        if color is not None:
            product_image.color = color
        if image is not None:
            product_image.image = image
        product_image.save()
        return UpdateProductImage(product_image=product_image)

class DeleteProductImage(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
    success = graphene.Boolean()
    def mutate(self, info , id):
        try:
            product_image = ProductImage.objects.get(pk=id)
        except ProductImage.DoesNotExist:
            raise Exception("Product Image Not Found")
        product_image.save()
        return DeleteProductImage(success=True)


class AddCategory(graphene.Mutation):
    category_type = graphene.Field(CategoryType)

    class Arguments:
        category = graphene.String()

    def mutate(self, info, category):
        new_category = Category(category=category)
        new_category.save()
        return AddCategory(category_type=new_category)





class Query(graphene.ObjectType):
    all_products = graphene.List(ProductType)
    all_sizes = graphene.List(SizeType)
    all_product_images = graphene.List(ProductImageType)
    all_category = graphene.List(CategoryType) 

    def resolve_all_products(self, info, **kwargs):
        return Product.objects.all()

    def resolve_all_sizes(self, info, **kwargs):
        return Size.objects.all()

    def resolve_all_product_images(self, info, **kwargs):
        return ProductImage.objects.all()

    def resolve_all_category(self, info, **kwargs): 
        return Category.objects.all() 





class Mutation(graphene.ObjectType):
    createProduct = CreateProduct.Field()
    updateProduct = UpdateProduct.Field()
    deleteProduct = DeleteProduct.Field()
    addProductImage = AddProductImage.Field()
    updateProductImage = UpdateProductImage.Field()
    deleteProductImage = DeleteProductImage.Field()
    addCategory = AddCategory.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)


