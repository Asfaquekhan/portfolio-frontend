import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import "./App.css";
import Project from "./Routes/Project";
import Contact from "./Routes/Contact";

import About from "./Routes/About";
import Main from "./Routes/Main";

import Redirect from "./component/Redirect";
import StateContext, {  useMode } from "./component/Context/ThemeContext";



function App(props) {
  const mode=useMode()
console.log(mode)
  return (
    <>
     <div className={!mode?"light":"dark"}>
     
     <StateContext>
        <Navbar />
        <Main />
        <Project />
        <About />
        <Contact />
        <Footer />
        <Redirect />
        </StateContext>
        </div>
    </>
  );
}

export default App;
