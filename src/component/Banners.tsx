import Btn from "./Btn";




export default function banners(){
    return(
        <>
            <div className="flex items-center justify-between gap-x-8 h-64 text-amber-50">
                <div className="basis-1/2 h-full">

                <img className="h-full w-full object-cover" src="/public/image/banner1.jpg" alt="banner1" />
                <div className="flex flex-col items-center justify-center">
                    <span>Limited offer</span>
                    <strong className="font-bold">30% Off</strong>
                    <span>on watches</span>
                    <Btn text="Shop Now"/>
                </div>
                
                </div>
                <div className="basis-1/2 h-full">

                <img className="h-full w-full object-cover" src="/public/image/banner2.jpg" alt="banner2" />
                <div className="flex flex-col items-center justify-end uppercase">
                    <span>Watches</span>
                    <strong className="font-bold">For Your</strong>
                    <Btn text="Shop Now"/>
                </div>
                
                </div>
            </div>
        </>
    )
}



