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
                 <div className='absolute right-0 left-0 top-10 overflow-y-hidden h-full md:min-h-screen flex items-center justify-center'>
                    <div className='flex flex-col items-center gap-y-12 text-center'>
                        <div className='text-amber-50'>
                            <h2 className='font-bold text-4xl uppercase'>
                                More than a watch — defining style
                            </h2>
                            <h3 className='mt-5 font-serif text-lg italic tracking-wide'>
                                Timeless beauty — always flawless
                            </h3>
                        </div>
                        <div className='flex items-center gap-x-8'>
                            <Btn text='shop now'/>
                            <Btn text='about us' style={{backgroundColor: '#f59e0b', color: '#fffbeb'}}/>
                        </div>
                    </div>
                 </div>
                 
            </div>
        </>
    )
}