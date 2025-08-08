import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header(){

    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(prev => !prev)

    return(
        <>
            <div className="p-2 border  border-stone-200 rounded-xl m-2   flex items-center justify-between">
                 <h1 className="text-xl">Madarsa-e-Iqra</h1>
                 <span onClick={toggleMenu} class="material-symbols-outlined">menu</span>


            </div> 

            {open && 
                <div className="flex flex-col p-2  bg-stone-200  ">
                    <Link className="p-2 font-semibold hover:bg-stone-300 m-1 rounded-lg">About</Link>
                    <Link className="p-2 font-semibold hover:bg-stone-300 m-1 rounded-lg">Admission</Link>
                    <Link className="p-2 font-semibold hover:bg-stone-300 m-1 rounded-lg">Blog</Link>
                    <Link className="p-2 font-semibold hover:bg-stone-300 m-1 rounded-lg">Donate</Link>
                    <Link className="p-2 font-semibold hover:bg-stone-300 m-1 rounded-lg">Contact us</Link>
                </div>
            }

        </>
    )
}

export default Header;