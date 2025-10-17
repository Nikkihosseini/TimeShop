import Header from '../component/Header'
import Btn from '../component/Btn'



export default function home(){
    return(
        <>
            <div className='relative w-full h-screen bg-home-desktop aspect-[2/1] bg-no-repeat bg-cover bg-[center-top]'>
                 <span className='absolute top-0 bottom-0 right-0 left-0 w-full h-screen bg-gradient-to-r from-slate-800/50 to-slate-800/50'></span>

                {/* Header */}
                <Header/>

                {/* Home */}
                 <div className='absolute flex items-center justify-center w-full h-full'>
                    <div className='text-amber-50'>
                        <h2>
                            More than a watch — defining style
                        </h2>
                        <h3>
                            Timeless beauty — always flawless
                        </h3>
                    </div>
                    <div className=''>
                        <Btn text='shop now'/>
                        <Btn text='about us'/>
                    </div>
                 </div>
                 
            </div>
        </>
    )
}