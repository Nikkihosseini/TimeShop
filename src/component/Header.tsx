

export default function Header(){
    return(
        <>
        <header className="hidden md:flex fixed top-8 right-0 left-0 w-[90%] h-[6rem] uppercase text-amber-950 bg-amber-200/50 backdrop-blur-md py-2 px-4 mx-auto z-50">
            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col items-center">
                    <span className="material-symbols-outlined flex items-center justify-center bg-amber-500 rounded-full   text-amber-200 text-3xl h-12 w-12 rotate-45">watch</span>
                    <h1 className="text-2xl tracking-widest"><span className="text-amber-300">Time</span>Shop</h1>
                </div>
                <div className="h-full">
                    <ul className="flex items-center justify-between gap-14 font-semibold h-full tracking-wider">

                       <li className="flex items-center relative group hover:text-amber-300 duration-300 delay-150 cursor-pointer h-full">
                        home
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
                <div className="flex items-center gap-5">
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
        </>
    )
}