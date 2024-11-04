import React from 'react';
import logo from '../Images/logo.jpg'; // Update the path to your logo image
import {useNavigate} from 'react-router-dom';
const Footer = () => {
  const handleLogoClick = () => {
    navigate('/');
    window.location.reload(); // Refresh
  };

  const navigate = useNavigate();

  return (
    <footer className="bg-gray-800 text-white p-10 shadow-2xl">
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <div className='flex items-center'>
            <img src={logo} alt="Logo" className="h-10 m-4 rounded-full cursor-pointer" onClick={handleLogoClick}/>
            <h3 className="text-lg font-bold m-4">INNOVBERG</h3>
          </div>
          <p className="text-sm">At Innovberg, we are passionate about creating innovative solutions that solve real-world problems.</p>
          <p>Founded with the belief that big ideas can come from small beginnings, we are driven by </p><p>a desire to make a meaningful impact in our industry.</p>
        </div>

        <div className='flex w-1/2'>
          <div className="flex flex-col items-start w-1/2">
            <h2 className='text-xl mb-2 font-bold'>Quick Links</h2>
            <a href="#about" className="text-lg hover:underline mb-1" onClick={() => navigate('/about')}>About Us</a>
            <a href="#services" className="text-lg hover:underline mb-1"onClick={() => navigate('/services')}>Services</a>
            <a href="#features" className="text-lg hover:underline mb-1"onClick={() => navigate('/features')}>Features</a>
            <a href="#Blog" className="text-lg hover:underline mb-1"onClick={() => navigate('/blog')}>Blog</a>
            <a href="#contact" className="text-lg hover:underline mb-1"onClick={() => navigate('/contact')}>Contact</a>
          </div>

          <div className="flex flex-col items-start w-1/2">
            <h2 className='text-xl mb-2 font-bold'>Support</h2>
            <a href="#about" className="text-lg hover:underline mb-1">Privacy Policy</a>
            <a href="#services" className="text-lg hover:underline">Terms & Conditions</a>
            <a href="#features" className="text-lg hover:underline">Support</a>
            <a href="#Blog" className="text-lg hover:underline">FAQ</a>
            <a href="#contact" className="text-lg hover:underline">Help</a>
          </div>

          <div className="flex flex-col items-start w-1/2">
            <h2 className='text-xl mb-2 font-bold'>Contact Info</h2>
            <a href="https://www.google.com/maps?q=Sukant+Nagar,Kolkata,700098" target="_blank" className="text-md hover:underline mb-1"><i className="fas fa-map-marker-alt mr-2"></i>Sukant Nagar,Kolkata,700098</a>
            <a href="mailto:innovberg04@gmai.com" className="text-md hover:underline"><i className="fas fa-envelope mr-2"></i>innovberg04@gmai.com</a>
            <a href="tel:+919332162237" className="text-md hover:underline"><i className="fa fa-phone-alt mr-2 transform rotate-90"></i>+91 9332162237</a>
          </div>
        </div>
      </div>

      {/* Thin Line Above Copyright */}
      <hr className="my-4 border-white border-t-2" />

      {/* Copyright Section */}
      <div className="text-center text-sm"></div>
    </footer>
  );
};

export default Footer;
