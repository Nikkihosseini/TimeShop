import type { ProductType  } from '../types/types'





export default function Product({id,image,name,price,prePrice} :ProductType){
    return(
        <>
            <div id={id} className='h-auto w-[330px]'>
                <div className='h-[310px] w-[310px]'>
                    <img className='h-full w-full' src={image} alt="product-img"/>
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