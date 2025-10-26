import type { Product } from './types/types'





export default function Product({id,image,name,price,prePrice} :Product){
    return(
        <>
            <div id={id}>
                <div>
                    <img src={image} alt="product-img"/>
                <div>
                    <div>
                        <span className="material-symbols-outlined">visibility</span>
                    </div>
                    <div>
                        <span className="material-symbols-outlined">shopping_cart</span>
                    </div>
                    <div>
                        <span className="material-symbols-outlined">favorite</span>
                    </div>
                </div>
                </div>

                <div>
                    <p>
                        {name}
                    </p>
                    <div>
                        <span>
                            {price}
                        </span>
                        <span>
                            {prePrice}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}