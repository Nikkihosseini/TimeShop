import productData  from '../Data/productData.json'
import type { ProductType  } from '../types/types'
import Product from './Product'


export default function Products(){

    const products: ProductType [] = productData;

    return(
        <>
            <div className="my-20">
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-10">
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