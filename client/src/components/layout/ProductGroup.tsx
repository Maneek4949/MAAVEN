import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import GET_PRODUCTS from '@/Graphql/Query';
import ProductCard from '../ui/ProductCard';
import Product from '@/Interfaces/Product';


function ProductGroup() {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
      if (data){
        setProducts(data.allProducts)
        
      }
    }, [data])

  return (
    <div className='w-100 flex overflow-hidden'> 
      {!loading && products.map( product =><ProductCard  key={product.id} productInfo={product}/>)}
    </div>
  )
}

export default ProductGroup