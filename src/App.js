import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import "./App.css";

import Contact from "./Routes/Contact";

import About from "./Routes/About";
import Main from "./Routes/Main";

import Redirect from "./component/Redirect";
import {  useMode } from "./component/Context/ThemeContext";
import DataProject from "./component/DataProject";



function App(props) {
  const mode=useMode()

  return (
    <>
     <div className={!mode?"light":"dark"}>
        <Navbar />
        <Main />
        <DataProject/>
        <About />
        <Contact />
        <Footer />
        <Redirect />
        </div>
    </>
  );
}

export default App;
