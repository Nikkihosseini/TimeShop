import Btn from "./Btn";




export default function banners(){
    return(
        <>
            <div className="flex items-center justify-between gap-x-8 h-64 text-amber-50">
                <div className="relative basis-1/2 h-full">

                <img className="h-full w-full object-cover" src="/public/image/banner1.jpg" alt="banner1" />
                <div className="absolute top-[62px] left-[52px] flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <span>Limited offer</span>
                        <strong className="font-bold">35% Off</strong>
                        <span>on watches</span>
                    </div>
                    <Btn text="Shop Now"/>
                </div>
                
                </div>
                <div className="relative basis-1/2 h-full">

                <img className="h-full w-full object-cover" src="/public/image/banner2.jpg" alt="banner2" />
                <div className="absolute flex flex-col items-center justify-end uppercase">
                    <span>Watches</span>
                    <strong className="font-bold">For Your</strong>
                    <Btn text="Shop Now"/>
                </div>
                
                </div>
            </div>
        </>
    )
}



