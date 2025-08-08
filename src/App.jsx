import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Admission from "./Admission";
import Blog from "./Blog";
import Donate from "./Donate";
import ContactUs from "./ContactUs";

function App(){
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/admission" element={<Admission/>}/>
                    <Route path="/blog" element={<Blog />}/>
                    <Route path="/donate" element={<Donate />}/>
                    <Route path="/contact" element={<ContactUs/>}/>

                </Routes>
            </Router>
        </>
    )
}


export default App;