import { Link } from "react-router-dom"


export default function Header(){
    return(
        <>
        <header className="hidden sm:flex fixed top-8 right-0 left-0 w-[90%] h-[6rem] uppercase text-amber-950 bg-amber-200/50 backdrop-blur-md py-2 px-4 mx-auto z-50">
            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col items-center">
                    <span className="material-symbols-outlined flex items-center justify-center bg-amber-500 rounded-full  text-amber-200 text-3xl h-12 w-12 rotate-45">watch</span>
                    <h1 className="hidden md:flex text-2xl tracking-widest"><span className="text-amber-300">Time</span>Shop</h1>
                </div>
                <div className="h-full">
                    <ul className="flex items-center justify-between gap-7 md:gap-14 font-semibold h-full tracking-wider">

                       <li>
                        <Link to='/' className="flex items-center relative group hover:text-amber-300 duration-300 delay-150 cursor-pointer h-full">
                        home
                        </Link>
                        
                        <span className="absolute left-0 bottom-[-7px] h-0.5 bg-amber-400 w-0 group-hover:w-full transition-all ease-in-out duration-300 delay-150"></span>
                       </li>
                       
                       <li className="flex items-center relative group hover:text-amber-300 duration-300 delay-150 cursor-pointer h-full">
                        Category
                        <span className="absolute left-0 bottom-[-7px] h-0.5 bg-amber-400 w-0 group-hover:w-full transition-all ease-in-out duration-300 delay-150"></span></li>
                       
                       <li className="flex items-center relative group hover:text-amber-300 duration-300 delay-150 cursor-pointer h-full">
                        Collection
                        <span className="absolute left-0 bottom-[-7px] h-0.5 bg-amber-400 w-0 group-hover:w-full transition-all ease-in-out duration-300 delay-150"></span>
                        </li>
                       
                       <li className="flex items-center relative group hover:text-amber-300 duration-300 delay-150 cursor-pointer h-full">
                        Contact
                        <span className="absolute left-0 bottom-[-7px] h-0.5 bg-amber-400 w-0 group-hover:w-full transition-all ease-in-out duration-300 delay-150"></span></li>
                       
                    </ul>
                </div>
                <div className="lg:flex items-center gap-5 hidden">
                    <span className="material-symbols-outlined cursor-pointer">search</span>
                    <span className="material-symbols-outlined cursor-pointer">settings</span>
                    <span className="material-symbols-outlined cursor-pointer">person</span>
                    <div className="relative cursor-pointer">
                         <span className="material-symbols-outlined">shopping_bag</span>
                         <span className="absolute top-[12px] right-[-5px] flex items-center justify-center h-5 w-5 bg-amber-400 rounded-full">
                            0
                        </span>
                    </div>
                </div>
                <div className="flex lg:hidden items-end justify-end cursor-pointer text-right">
                    <span className="material-symbols-outlined">
                        more_vert
                    </span>
                </div>

                  <div className="hidden items-center gap-5">
                    <span className="material-symbols-outlined cursor-pointer">search</span>
                    <span className="material-symbols-outlined cursor-pointer">settings</span>
                    <span className="material-symbols-outlined cursor-pointer">person</span>
                    <div className="relative cursor-pointer">
                         <span className="material-symbols-outlined">shopping_bag</span>
                         <span className="absolute top-[12px] right-[-5px] flex items-center justify-center h-5 w-5 bg-amber-400 rounded-full">
                            0
                        </span>
                    </div>
                </div>

            </div>
        </header>
        {/* Mobile Header */}
        <div className="sm:hidden flex items-center justify-between fixed top-3 right-0 left-0 w-[90%] h-[4rem] uppercase text-amber-950 bg-amber-200/50 backdrop-blur-md py-2 px-4 mx-auto z-50">
            <div>
                <h1 className="flex text-lg tracking-widest"><span className="text-amber-300">Time</span>Shop</h1>
            </div>
        {/* Hamburger Btn */}
            <div className="flex items-center justify-center cursor-pointer overflow-hidden w-6 h-6 z-50">
                <span className="hamburger-line z-50"></span>
            </div>
        </div>
        {/* Mobile Menu List  */}
        <div className= "inline-block md:hidden dark:bg-void-black bg-crt-white border-r-2 border-r-neon-blue w-52 fixed top-0 bottom-0 bg-gray-250 px-2 pt-2 z-50">
                            <h2 className="font-PoppinsBold text-neon-blue text-center tracking-widest text-sm border-b-2 border-b-neon-blue mb-4 w-full pb-2">
                                Projects Archive
                            </h2>
                            <ul className='flex flex-col gap-8 items-start justify-between text-[12px] xl:text-sm'>
                                <li>
                                    <Link to='/'
                                    className="flex items-center justify-center gap-1 mr-4  text-pastel-glitch-purple dark:text-lime-crt-glow hover:text-soft-lavender dark:hover:text-retro-mint-greencursor-pointer">Home
                                    <img className='inline-block w-5 h-5 xl:w-7 xl:h-7' src="/png-icon/sword.png" alt="sword-png"/></Link>
                                </li>
                                <li>
                                    <Link to='/Project'
                                    className="flex items-center justify-center gap-1 mr-4 text-pastel-glitch-purple dark:text-lime-crt-glow hover:text-soft-lavender dark:hover:text-retro-mint-greencursor-pointer">Projects
                                    <img className='inline-block w-5 h-5 xl:w-7 xl:h-7' src="/png-icon/star.png" alt="star-png"/></Link>
                                </li>
                                <li>
                                    <Link to='/About'
                                    className="flex items-center justify-center gap-1 mr-4 text-pastel-glitch-purple dark:text-lime-crt-glow hover:text-soft-lavender dark:hover:text-retro-mint-greencursor-pointer">About
                                    <img className='inline-block w-5 h-5 xl:w-7 xl:h-7' src="/png-icon/heart.png" alt="heart-png"/></Link>
                                </li>
                                <li>
                                    <Link to='/Contact'
                                    className="flex items-center justify-center gap-1 mr-4 text-pastel-glitch-purple dark:text-lime-crt-glow hover:text-soft-lavender dark:hover:text-retro-mint-greencursor-pointer">Contact
                                    <img className='inline-block w-5 h-5 xl:w-7 xl:h-7' src="/png-icon/chat.png" alt="chat-png"/></Link>
                                </li>
                            </ul>
        </div>
        </>
    )
}