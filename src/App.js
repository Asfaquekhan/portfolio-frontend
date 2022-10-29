import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import "./App.css";
import Project from "./Routes/Project";
import Contact from "./Routes/Contact";

import About from "./Routes/About";
import Main from "./Routes/Main";

import NoteState from "./contextapi/NoteState";
import Redirect from "./component/Redirect";

function App(props) {
  return (
    <>
      <NoteState>
        <div className=''>
          <Navbar />
          <Main  />
          <Project />
          <About />
          <Contact />
          <Footer />
          <Redirect />
        </div>
      </NoteState>
    </>
  );
}

export default App;
