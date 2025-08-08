import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
            <div className="bg-stone-50/10 flex justify-center p-4 rounded-xl mx-3 my-5 mt-20">
                <Link to='/'><h1 className="text-stone-300 font-semibold text-xl">مدرسة الإقراء</h1></Link>
            </div>
        </>
    )
}


export default Footer;