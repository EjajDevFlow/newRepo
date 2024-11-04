import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Banner from './Components/Banner';
import About from './Components/About';
import Services from './Components/Service';
import Team from './Components/Team';
import OurFeatures from './Components/Features';
import Testimonials from './Components/Testimonial';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Team2 from './Components/Team2';


const App = () => {
  return (
    <Router>
      <div className="bg-black text-white" id="Home" style={{ fontFamily: "'Roboto', sans-serif" }}>
        <NavBar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/features" element={<OurFeatures />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
         <Route path="team2" element={<Team2 />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
