import Btn from "./Btn";




export default function banners(){
    return(
        <>
            <div className="flex items-center justify-between gap-x-8 h-64 text-amber-50 w-full">
                <div className="relative basis-1/2 h-full w-full overflow-hidden">

                <img className="h-full w-full object-cover" src="/public/image/banner1.jpg" alt="banner1" />


                <div className="absolute inset-0 bg-gradient-to-l from-stone-950/60 to-transparent"></div>

                <div className="absolute top-0 left-[20px] flex flex-col items-center justify-between uppercase h-full py-2">
                    <span className="font-CormorantGaramond text-lg">Limited offer</span>
                    <strong className="font-bold text-6xl">35% Off</strong>
                    <span className="font-CormorantGaramond text-lg">on watches</span>
                    <Btn text="Shop Now"/>
                </div>
                
                </div>
                <div className="relative basis-1/2 h-full w-full overflow-hidden">

                <img className="h-full w-full object-cover" src="/public/image/banner2.jpg" alt="banner2" />

                   <div className="absolute inset-0 bg-gradient-to-r from-stone-950/60 to-transparent"></div>

                <div className="absolute top-0 right-[20px] flex flex-col items-center justify-between uppercase h-full py-2">
                    <span className="font-CormorantGaramond text-right text-2xl w-40 font-extralight">Watches</span>
                    <strong className="font-CormorantGaramond text-7xl text-right w-48">For Your</strong>
                    <Btn text="Shop Now"/>
                </div>
                
                </div>
            </div>
        </>
    )
}



