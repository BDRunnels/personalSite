import { Route, Routes } from "react-router-dom";


import Nav from "./components/Nav/Nav.component";
import ProjectCard from "./components/ProjectCard/ProjectCard.component";
import Home from "./components/Home/Home.component";
import Footer from "./components/Footer/Footer.component";

import "./index.css";
import Contact from "./components/Contact/Contact.component";
import NotFound from "./components/NotFound/NotFound.component";

const App = () => {
    
    return (
        <div className=" dark:bg-black dark:text-white bg-blue-gray-100 min-h-screen">
            <Nav />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectCard />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;