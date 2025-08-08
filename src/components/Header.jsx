import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header(){

    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(prev => !prev)

    return(
        <>
            <div className="p-3 lg:pr-5 lg:m-5 bg-stone-50/10    border-stone-200 rounded-xl mt-5 mx-3  flex items-center justify-between">
                 <h1 className="text-xl text-white ml-2">Madarsa-e-Iqra</h1>
                 <span onClick={toggleMenu} class="text-white material-symbols-outlined lg:hidden"><span className="lg:hidden">menu</span></span>
                 <div className="hidden lg:flex gap-5 text-stone-50">
                    <Link>About</Link>
                    <Link>Admission</Link>
                    <Link>Blog</Link>
                    <Link>Donate</Link>
                    <Link>Contact us</Link>
                 </div>


            </div> 

            {open && 
                <div className="flex flex-col p-2  bg-stone-200/10 m-3 rounded-xl  ">
                    <Link className="p-2 text-stone-50 font-semibold hover:bg-stone-100/10 m-1 rounded-lg">About</Link>
                    <Link className="p-2 text-stone-50 font-semibold hover:bg-stone-100/10 m-1 rounded-lg">Admission</Link>
                    <Link className="p-2 text-stone-50 font-semibold hover:bg-stone-100/10 m-1 rounded-lg">Blog</Link>
                    <Link className="p-2 text-stone-50 font-semibold hover:bg-stone-100/10 m-1 rounded-lg">Donate</Link>
                    <Link className="p-2 text-stone-50 font-semibold hover:bg-stone-100/10 m-1 rounded-lg">Contact us</Link>
                </div>
            }

        </>
    )
}

export default Header;