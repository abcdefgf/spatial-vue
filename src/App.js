import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Features from './components/pages/Features';
import Contact from './components/pages/Contact';
import NoPage from './components/pages/NoPage';


function App() {
  return (

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    
  )
}

export default App;
