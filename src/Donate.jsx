import Layout from "./layouts.jsx/Layout";
import { Link } from "react-router-dom";

function Donate(){
    return(
        <>
        <Layout>
          <div className="mt-10 flex flex-col items-center">
            <h1 className="text-2xl font-semibold text-stone-200 ">Donate</h1>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-3">
                <a href="" className="p-5 bg-stone-950/30 font-semibold text-stone-100 rounded-xl text-center hover:bg-green-800/30">Donate Rs. 50</a>
                <a href="" className="p-5 bg-stone-950/30 font-semibold text-stone-100 rounded-xl text-center hover:bg-green-800/30">Donate Rs. 100</a>
                <a href="" className="p-5 bg-stone-950/30 font-semibold text-stone-100 rounded-xl text-center hover:bg-green-800/30">Donate Rs. 200</a>
                <a href="" className="p-5 bg-stone-950/30 font-semibold text-stone-100 rounded-xl text-center hover:bg-green-800/30">Donate Rs. 500</a>
                <a href="" className="p-5 bg-stone-950/30 font-semibold text-stone-100 rounded-xl text-center hover:bg-green-800/30">Donate Rs. 1000</a>
                <a href="" className="p-5 bg-stone-950/30 font-semibold text-stone-100 rounded-xl text-center hover:bg-green-800/30">Donate Rs. 10,000</a>
            </div>
            <h1 className="mt-10 text-2xl font-semibold text-stone-200 ">Donate</h1>
            <p className="p-1 text-stone-200 ">Donate your wish using QR given below</p>
            <div className="mt-5 rounded-2xl h-[200px] w-[200px] bg-stone-50 flex items-center">
                <div className="bg-stone-900 m-5 h-[150px] w-[150px] blur-lg">

                </div>

            </div>
           </div>
        </Layout>
        </>
    )
}

export default Donate;