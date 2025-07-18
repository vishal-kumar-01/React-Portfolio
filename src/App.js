import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar  from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skill from  './pages/Skill';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Footer from "./components/Footer";




function App() {
  return(
    <Router>

      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skill" element={<Skill/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>

  )
}
export default App;