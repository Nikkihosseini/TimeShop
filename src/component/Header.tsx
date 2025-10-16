

export default function Header(){
    return(
        <>
           <header className="hidden md:flex fixed top-8 right-0 left-0 w-[90%] h-20 z-30 bg-amber-100/20 backdrop-blur-md p-3 mx-auto">
            <div>
                <span className="material-symbols-outlined">watch</span>
                <h1>Time Shop</h1>
            </div>
            <div>
                <ul>
                    <li>home</li>
                    <li>Category</li>
                    <li>Collection</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
               <span className="material-symbols-outlined">search</span>
               <span className="material-symbols-outlined">settings</span>
               <span className="material-symbols-outlined">person</span>
               <span className="material-symbols-outlined">shopping_bag</span>
            </div>
            </header>
        </>
    )
}