import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import GET_PRODUCTS from '@/Graphql/Query';
import ProductCard from '../ui/ProductCard';
import Product from '@/Interfaces/Product';

export function NewArrival() {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
      if (data){
        setProducts(data.allProducts)
        
      }
    }, [data])
  return (
    <>
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
      {!loading && products.map( (product,index) =>
      <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
      <div className="p-1">
      <ProductCard  key={product.id} productInfo={product}/>
      </div>
    </CarouselItem>
     )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </>
  )
}
