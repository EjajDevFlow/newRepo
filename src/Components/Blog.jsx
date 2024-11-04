// Blog.js
import React from "react";
import Banner from '../Images/blog.png';
import feature1 from '../Images/feature1.png'
import feature2 from '../Images/feature2.png'
import feature3 from '../Images/feature3.png'
import feature4 from '../Images/feature4.png'


const BlogCard = ({ title, description, image }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative overflow-hidden">
                <img src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-50"></div>
            </div>
            <div className="p-5">
                <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
                <p className="text-gray-700 text-sm mb-4">{description}</p>
                <button className="mt-6 px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-yellow-800 to-yellow-500 rounded shadow-md hover:shadow-lg transition duration-300 mx-auto">
            Explore More
          </button>
            </div>
        </div>
    );
};

const Blog = () => {
    const blogPosts = [
        {
            title: "Understanding React Components",
            description: "A brief introduction to components in React and how they help in building modular UIs.",
            image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D", // Replace with actual images
        },
        {
            title: "Tailwind CSS Tips & Tricks",
            description: "Learn some advanced Tailwind CSS techniques to streamline your styling workflow.",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            title: "Getting Started with JavaScript",
            description: "An introductory guide to JavaScript for beginners and those wanting to refresh their skills.",
            image: "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            title: "Understanding React Components",
            description: "A brief introduction to components in React and how they help in building modular UIs.",
            image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D", // Replace with actual images
        },
        {
            title: "Tailwind CSS Tips & Tricks",
            description: "Learn some advanced Tailwind CSS techniques to streamline your styling workflow.",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            title: "Getting Started with JavaScript",
            description: "An introductory guide to JavaScript for beginners and those wanting to refresh their skills.",
            image: "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
        },
    ];

    return (
        <div>
            <div className="relative w-full h-[400px]">
                <img src={Banner} alt="Banner" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg- bg-opacity-30"></div>
            </div>
            <div className="p-8 bg-gray-900">
                <h2 className="text-3xl font-bold text-center mb-8">Blog Section</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <BlogCard
                            key={index}
                            title={post.title}
                            description={post.description}
                            image={post.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
