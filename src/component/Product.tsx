import type { ProductType  } from '../types/types'





export default function Product({id,image,name,price,prePrice} :ProductType){
    return(
        <>
            <div id={id} className='flex items-center justify-center flex-col h-auto w-[330px]'>
                <div className='relative h-[310px] w-[310px]'>
                    <img className='h-full w-full' src={image} alt="product-img"/>
                <div className='absolute top-1/3 right-0 my-auto'>
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

                <div className='flex justify-center items-center flex-col gap-5 mt-5 px-2 w-full text-center'>
                    <p className='text-slate-600 line-clamp-1 w-[85%] font-semibold'>
                       {name}
                    </p>
                    <div className='flex justify-between items-center gap-5'>
                        {prePrice && (
                            <span className='text-slate-300 line-through'>
                              ${prePrice}
                            </span>
                        )}
                        <span className='font-bold text-orange-500'>
                            ${price}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}