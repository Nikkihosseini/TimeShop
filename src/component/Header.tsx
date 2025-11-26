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

                       <li className="flex items-center relative group hover:text-amber-300 duration-300 delay-150 cursor-pointer h-full">
                        <Link to='/'>
                        home
                        </Link>
                        <span className="absolute left-0 bottom-[-7px] h-0.5 bg-amber-400 w-0 group-hover:w-full transition-all ease-in-out duration-300 delay-150"></span>
                       </li>
                       
                       <li className="flex items-center relative group hover:text-amber-300 duration-300 delay-150 cursor-pointer h-full">
                        <Link to='/'>
                            Category
                        </Link>
                        <span className="absolute left-0 bottom-[-7px] h-0.5 bg-amber-400 w-0 group-hover:w-full transition-all ease-in-out duration-300 delay-150"></span>
                        </li>
                       
                       <li className="flex items-center relative group hover:text-amber-300 duration-300 delay-150 cursor-pointer h-full">
                        <Link to='/'>
                            Collection
                        </Link>
                        <span className="absolute left-0 bottom-[-7px] h-0.5 bg-amber-400 w-0 group-hover:w-full transition-all ease-in-out duration-300 delay-150"></span>
                        </li>
                       
                       <li className="flex items-center relative group hover:text-amber-300 duration-300 delay-150 cursor-pointer h-full">
                        <Link to='/'>
                            Contact
                        </Link>
                        <span className="absolute left-0 bottom-[-7px] h-0.5 bg-amber-400 w-0 group-hover:w-full transition-all ease-in-out duration-300 delay-150"></span>
                        </li>
                       
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
        <div className= "inline-block md:hidden text-amber-950 bg-amber-200/50 backdrop-blur-md w-52 fixed top-0 bottom-0 px-2 pt-2 z-50">
                            <h2 className="font-semibold text-center tracking-widest text-xl border-b-2 border-b-amber-950 mb-4 w-full pb-2 uppercase">
                               <span className="text-amber-300 tracking-widest">Time</span>Shop
                            </h2>
                            <ul className='flex flex-col gap-8 items-start justify-between text-xl font-semibold'>
                                <li className="hover:bg-amber-950/30 w-full transition-all">
                                    <Link to='/'
                                    className="flex items-start gap-1 mr-4 hover:text-soft-lavender pl-2"> Home
                                    </Link>
                                </li>
                                <li className="hover:bg-amber-950/30 w-full transition-all">
                                    <Link to='/'
                                    className="flex items-start gap-1 mr-4 hover:text-soft-lavender pl-2"> Category
                                    </Link>
                                </li>
                                <li className="hover:bg-amber-950/30 w-full transition-all">
                                    <Link to='/'
                                    className="flex items-start gap-1 mr-4 hover:text-soft-lavender pl-2"> Collection
                                    </Link>
                                </li>
                                <li className="hover:bg-amber-950/30 w-full transition-all">
                                    <Link to='/'
                                    className="flex items-start gap-1 mr-4 hover:text-soft-lavender pl-2"> Contact
                                    </Link>
                                </li>
                                <li className="hover:bg-amber-950/30 w-full transition-all">
                                    <Link to='/'
                                    className="flex items-start gap-1 mr-4 hover:text-soft-lavender pl-2">Search <span className="material-symbols-outlined cursor-pointer">search</span>
                                    </Link>
                                </li>
                                <li className="hover:bg-amber-950/30 w-full transition-all">
                                    <Link to='/'
                                    className="flex items-start gap-1 mr-4 hover:text-soft-lavender pl-2">settings <span className="material-symbols-outlined cursor-pointer">settings</span>
                                    </Link>
                                </li>
                                <li className="hover:bg-amber-950/30 w-full transition-all">
                                    <Link to='/'
                                    className="flex items-start gap-1 mr-4 hover:text-soft-lavender pl-2">profile <span className="material-symbols-outlined cursor-pointer">person</span>
                                    </Link>
                                </li>
                                <li className="hover:bg-amber-950/30 w-full transition-all">
                                    <Link to='/'
                                    className="flex items-start gap-1 mr-4 hover:text-soft-lavender pl-2">shopping cart <span className="material-symbols-outlined">shopping_bag</span>
                                    </Link>
                                </li>
                                <div className="lg:flex items-center gap-5 hidden">
                    
                    
                    
                    <div className="relative cursor-pointer">
                         
                         <span className="absolute top-[12px] right-[-5px] flex items-center justify-center h-5 w-5 bg-amber-400 rounded-full">
                            0
                        </span>
                    </div>
                </div>
                            </ul>
        </div>
        </>
    )
}