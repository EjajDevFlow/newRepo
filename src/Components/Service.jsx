import React from 'react';

// Sample services data with images
import service1 from '../Images/Service/service1.jpg';
import service2 from '../Images/Service/service2.jpg';
import service3 from '../Images/Service/service3.jpg';
import service4 from '../Images/Service/service4.png';
import service5 from '../Images/Service/service5.jpg';
import service6 from '../Images/Service/service6.jpg';
import {useNavigate} from 'react-router-dom';
const services = [
    
    {
        title: 'Responsive Website ',
        description: 'In today’s mobile-first world, having a responsive website is essential for reach ing your audience across all devices.We specialize in designing and developing websites that automatically adapt to any screen size, whether your users are on a smartphone, tablet, or desktop.',
        image: service1,
    },
    {
        title: 'Landing Page',
        description: 'Maximize conversions with custom-designed landing pages tailored to your marketing goals. At Innovberg, we crea te high-impact landing pages that are visually engaging, easy to navigate, and strategically optimized to drive action.',
        image: service2,
    },
    {
        title: 'Redesign Website',
        description: 'we offer professional website redesign services to transform your site into a modern, user-friendly, and conversion-focused platform. Our team evaluates your existing website and implements design and functionality improvements to enhance user experience and align with current web standards.',
        image: service3,
    },
    {
        title: 'Promotion Videos',
        description: 'Bring your brand to life with captivating promotional videos designed to engage, inform, and inspire your audience. We specialize in creating high-quality prom otional videos that highlight your produ cts, services, or brand story.',
        image: service4,
    },
    {
        title: 'Social Media Management',
        description: 'Bring your brand to life with captivating promotional videos designed to engage, inform, and inspire your audience. We specialize in creating high-quality prom otional videos that highlight your produ cts, services, or brand story.',
        image: service5,
    },
    {
        title: 'Graphic design',
        description: 'Transform your ideas into stunning visu al communications with our comprehen sive graphic design services. We create unique and impactful designs that captu re your brands essence and resonate with your target audience.',
        image: service6,
    },
];

const Services = () => {

        const handleLogoClick = () => {
          navigate('services');
          window.location.reload(); // Refresh
        };
    return (
        <section id="services" className="p-10 bg-gray-900">
            <h2 className="text-4xl font-bold text-center mb-6 text-yellow-500">Our Services</h2>
            <p className='mb-5 text-center '>At Innovberg, we offer full responsive websites to delivering professional graphic design and video editing services, we ensure that every project reflects your unique vision. Whether you need a dynamic website to engage your audience, eye-catching graphics to boost your brand, or high-quality video content, our team is ready to bring your ideas to life with precision and creativity.</p>
            <div className="flex flex-wrap justify-center gap-10">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="w-80 p-6 bg-gray-700 rounded-lg shadow-lg transform hover:scale-110 transition duration-500" 
                        style={{width:'360px'}}
                    >
                        {/* Image at the top */}
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                        />
                        
                        {/* Title and description below the image */}
                        <h3 className="text-2xl font-bold mb-4 text-yellow-500">{service.title}</h3>
                        <p className="text-white mb-4 text-sm">{service.description}</p>
                        
                        {/* Learn More button */}
                        <button className=" px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-yellow-800 to-yellow-500 rounded shadow-md hover:shadow-lg transition duration-300 mx-auto" onClick={() => window.location.href = 'services'}>
            Explore More
          </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
