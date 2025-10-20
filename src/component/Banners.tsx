import Btn from "./Btn";




export default function banners(){
    return(
        <>
            <div>
                <div>

                <img src="/public/image/banner1.jpg" alt="banner1" />
                <div>
                    <span>Limited offer</span>
                    <strong>30% Off</strong>
                    <span>on watches</span>
                    <Btn text="Shop Now"/>
                </div>
                
                </div>
                <div>

                <img src="/public/image/banner2.jpg" alt="banner2" />
                <div>
                    <span>Watches</span>
                    <strong>For Your</strong>
                    <Btn text="Shop Now"/>
                </div>
                
                </div>
            </div>
        </>
    )
}