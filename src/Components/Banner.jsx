import React from 'react';
import banner from '../Images/banner.png';

const Banner = () => {
  return (
    <section className=" flex items-center justify-between px-12 bg-gray-900 text-yellow-500 ">
     
      <div className="w-1/2 text-center">
        <h1 className="text-5xl font-bold">
          WELCOME TO INNOVBERG
        </h1>
        <span className="block text-2xl mt-4">
          A Good Business Needs a Great Website
        </span>
        <button 
          className="mt-6 px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-yellow-800 to-yellow-500 rounded shadow-md hover:shadow-lg transition duration-300 mx-auto"
          onClick={() => window.location.href = '/'}
        >
          Explore More
        </button>
      </div>
      <div className="w-1/2 flex justify-end mt-0">
        <img 
          src={banner} 
          alt="Banner" 
          className="object-contain"
          style={{}}
        />
      </div>
    </section>
  );
};

export default Banner;
