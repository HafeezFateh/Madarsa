import Header from "./components/Header";

function Home(){
    return(
        <>
            <Header />
            <div className="flex justify-center mt-5">
                <h1 className="font-[inter] font-bold bg-gradient-to-br from-stone-500 to-stone-100 bg-clip-text text-transparent text-4xl p-4 ">مدرسة الإقراء</h1>
            </div>
        
        </>
    )
}

export default Home;