import Layout from "./layouts.jsx/Layout"

function ContactUs(){
    return(

        <>
        <Layout>
   <div className="mt-10">
                <h1 className="text-xl font-semibold text-stone-200 text-center">Contact us</h1>
                <form action="" className="mx-10 lg:mx-30 mt-5 flex flex-col gap-2 text-white">
                    <label htmlFor="" className="text-xl  text-stone-100">Name</label>
                    <input type="text" className="focus:outline-0 bg-stone-50/10 rounded-lg p-1 w-full " />
                    <label htmlFor="" className="text-xl  text-stone-100">Email</label>
                    <input type="email" className="focus:outline-0 bg-stone-50/10 rounded-lg p-1 w-full " />
                    <label htmlFor="" className="text-xl  text-stone-100">Message</label>
                    <textarea type="text" className="focus:outline-0 bg-stone-50/10 rounded-lg p-1 w-full "></textarea>
                    <div className="flex justify-end">
                        <input type="submit" className="px-10 py-1 rounded-lg mt-2 text-white bg-green-900/50" />
                    </div>
                    
                </form>
            </div>
        </Layout>
        </>
    )
}

export default ContactUs;