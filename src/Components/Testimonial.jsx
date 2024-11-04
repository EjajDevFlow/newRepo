import React, { useState } from 'react';
import Rakib from '../Images/Team/Rakib.jpeg';
import Sahil from '../Images/Team/Sahil.jpeg';
import Rony from '../Images/Team/Rony.jpeg';

// Testimonials data
const testimonials = [
    {
      image: Rakib,
      name: 'Rakib Hossain',
      text: 'This company provided excellent service and I highly recommend them to anyone needing web design or development.',
    },
    {
      image: Sahil,
      name: 'Sahil Kumar',
      text: 'Working with this team was a pleasure! They went above and beyond to ensure everything was perfect.',
    },
    {
      image: Rony,
      name: 'Rony Ghosh',
      text: 'The results exceeded my expectations. Their attention to detail and expertise really shows in the final product.',
    },
  ];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Handlers to switch between testimonials
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };
  
    return (
      <section id="testimonials" className="p-10 bg-gray-900 relative">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-8">Client  Review</h2>
        
        <div className="flex items-center justify-center">
          {/* Left Button */}
          <button
          onClick={handlePrev}
          className="p-3  text-white rounded-full hover:text-yellow-600 transition m-4"
        >
          <i className='bx bxs-left-arrow-circle text-4xl'></i>
        </button>
  
          {/* Testimonial Slider */}
          <div className="overflow-hidden w-full md:w-2/3 lg:w-1/2 h-60">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-none w-full flex items-center p-8 bg-gray-800 rounded-lg shadow-lg"
                >
                  {/* Image on the left side */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-32 h-32 rounded-full object-cover mr-8"
                  />
                  {/* Text on the right side */}
                  <div className="text-white ">
                    <h3 className="text-2xl font-bold mb-2 ">{testimonial.name}</h3>
                    <p className="text-lg">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Right Button */}
          <button
          onClick={handleNext}
          className="p-3 text-white rounded-full hover:text-yellow-600 transition ml-4"
        >
          <i className='bx bxs-right-arrow-circle text-4xl text-white'></i>
        </button>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
