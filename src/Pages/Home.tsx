import Header from '../component/Header'


export default function home(){
    return(
        <>
            <div className='w-full h-screen bg-home-desktop aspect-[2/1] bg-no-repeat bg-cover bg-[center-top]'>
                <Header/>
            </div>
        </>
    )
}