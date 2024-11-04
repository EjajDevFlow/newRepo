import React from 'react';
import feature1 from '../Images/feature1.png'
import feature2 from '../Images/feature2.png'
import feature3 from '../Images/feature3.png'
import feature4 from '../Images/feature4.png'
// Features array with images
const features = [
  {
    title: 'Custom Website Design',
    description: '',
    image: feature1, // Add the path to the image
  },
  {
    title: 'Responsive and Mobile-Friendly',
    description: '',
    image:feature2,
  },
  {
    title: 'E-commerce Solutions',
    description: '',
    image: feature3,
  },
  {
    title: 'Search Engine Optimization (SEO)',
    description: '',
    image: feature4,
  },
];

const OurFeatures = () => {
  return (
    <section id="features" className="p-10 bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-yellow-500 mb-8">Our Features</h2>
      <div className="flex flex-wrap justify-center ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-80  transition-transform flex flex-col items-center mt-6 "
          >
            {/* Image above the text */}
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-48 object-contain rounded-t-lg transform hover:scale-105 mb-4"
            />

            {/* Text content */}
            <h3 className="text-xl font-bold mb-4 text-yellow-500 text-center">{feature.title}</h3>
            <p className="text-white text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurFeatures;
