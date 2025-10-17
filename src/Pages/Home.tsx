import Header from '../component/Header'


export default function home(){
    return(
        <>
            <div className='relative w-full h-screen bg-home-desktop aspect-[2/1] bg-no-repeat bg-cover bg-[center-top] z-40'>
                 <span className='absolute top-0 bottom-0 right-0 left-0 w-full h-screen bg-gradient-to-r from-slate-800/50 to-slate-800/50'></span>
                 {/* Header */}
                <Header/>
                
            </div>
        </>
    )
}