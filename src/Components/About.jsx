import React from 'react';
import about from '../Images/about1.png'

const About = () => {
  return (
    <section id="about " className="p-10 bg-gray-900" style={{ fontFamily: "'Roboto', sans-serif" }}>
      
      {/* Image and Text Section */}
      <div  className="flex flex-col lg:flex-row items-center justify-center gap-10 " style={{width:"1200px"}}>
        {/* Left Side: Image */}
        <div className="lg:w-1/2 w-full">
            <img src={about} alt="About Us" className="object-cover w-full h-auto" />
        </div>

        {/* Right Side: Additional Text */}
        <div className="lg:w-1/2 w-full text-white  ">
          <h2 className="text-5xl font-semibold mb-4 text-yellow-500">About Us</h2>

          <p className="text-lg leading-relaxed">
            At INNOVBERG, our mission is to push the boundaries of web experiences using cutting-edge 3D technologies. 
            We focus on creating dynamic, interactive, and immersive solutions that help businesses and individuals 
            engage their audiences like never before.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sunt repudiandae eveniet optio excepturi quam beatae quo fugit impedit, pariatur quasi odio. Quidem ex provident dolor perferendis, consequuntur nostrum excepturi!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;