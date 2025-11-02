import type { ProductType  } from '../types/types'





export default function Product({id,image,name,price,prePrice} :ProductType){
    return(
        <>
            <div id={id} className='flex items-center justify-center flex-col w-[330px] sm:h-auto sm:w-auto 2xl:w-[330px]'>
                <div className='relative h-[330px] w-[330px] sm:h-auto sm:w-auto 2xl:h-[310px] 2xl:w-[310px] cursor-pointer group'>
                    <span className='absolute inline-block h-full w-full bg-amber-300/10 backdrop-blur-sm invisible group-hover:visible transition-all duration-200 delay-100'></span>
                    <img className='h-full w-full object-cover' src={image} alt="product-img"/>
                <div className='flex flex-col items-center justify-center gap-3 text-slate-500 absolute top-1/4 right-0 my-auto invisible group-hover:visible transition-all duration-200 p-2'>
                    <div className='flex items-center justify-center h-10 w-10 border-2 border-slate-500 rounded-full hover:text-orange-500 hover:border-orange-500 transition-all'>
                        <span className="material-symbols-outlined">visibility</span>
                    </div>
                    <div className='flex items-center justify-center h-10 w-10 border-2 border-slate-500 rounded-full hover:text-orange-500 hover:border-orange-500 transition-all'>
                        <span className="material-symbols-outlined">shopping_cart</span>
                    </div>
                    <div className='flex items-center justify-center h-10 w-10 border-2 border-slate-500 rounded-full hover:text-orange-500 hover:border-orange-500 transition-all'>
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