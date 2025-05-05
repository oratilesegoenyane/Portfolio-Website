import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import Tools from "./pages/Tools"
import About from "./pages/About"
import Services from "./pages/Services"
import Projects from "./pages/Projects"


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
   
  );
}

export default App;
