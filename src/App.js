import Footer from './component/Footer';
import Navbar from './component/Navbar';
import './App.css';
import Project from './Routes/Project';
import Contact from './Routes/Contact';
import {Route,Routes} from 'react-router-dom'
import Skill from './Routes/Skill';
import About from './Routes/About';
import Main from './Routes/Main';

import NoteState from './contextapi/NoteState';

function App(props) {
   
  return(
    <>
    <NoteState>
 <div>
  <Navbar/>
  <Routes >
  <Route path='/' element={<Main/>}/>
  <Route path='/project' element={<Project/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/skill' element={<Skill/>}/>
  <Route path='/about' element={<About />}/>
  </Routes>
    <Footer/>
    
   </div>
   </NoteState>
   </>
  );
}

export default App;
