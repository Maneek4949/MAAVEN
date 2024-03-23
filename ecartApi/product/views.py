from django.shortcuts import render  
from rest_framework.views import APIView  
from rest_framework.response import Response  
from rest_framework import status  
from .models import Product
from .serializers import ProductSerializer  


class ProductView(APIView):
    
    def get(self,request,*args,**kwargs):
        result = Product.objects.all()
        serializer = ProductSerializer(result,many=True)
        return Response({'status': 'success', "students":serializer.data}, status=200)  

    def post(self,request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            
            return Response({"status":"success","data": serializer.data},status=200)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class ProductDetailView(APIView):
    
    def get(self, request, slug):
        
        result = Product.objects.get(slug=slug)

        if slug:
            serializer = ProductSerializer(result)
            return Response({"status":"success","data": serializer.data},status=200)
        else:
            return Response({"status": "Data Not Found", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


