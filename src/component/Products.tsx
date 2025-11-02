import productData  from '../Data/productData.json'
import type { ProductType  } from '../types/types'
import Product from './Product'


export default function Products(){

    const products: ProductType [] = productData;

    return(
        <>
            <div className="flex items-center justify-center my-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-12">
                    {products.map((product: ProductType ) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            prePrice={product.prePrice}
                            category={product.category}
                            inStock={product.inStock}
                            isLiked={product.isLiked}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}