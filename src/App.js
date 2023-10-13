import Footer from "./component/Footer";
import Navbar from "./component/navbar/Navbar";
import "./App.css";



import About from "./Routes/About";
import Main from "./Routes/Main";

import Redirect from "./component/Redirect";
import {  useMode } from "./component/Context/ThemeContext";

import ContactNew from "./component/ContactNew";
import ProjectList from "./component/projects/ProjectList";





function App(props) {
  const mode=useMode()
  

  return (
    <>
     <div className={!mode?"light":"dark"}>
        <Navbar />
        <Main />
        <ProjectList/>
        <About />
        <ContactNew />
        <Footer />
       
        <Redirect />
       
        </div>
    </>
  );
}

export default App;
