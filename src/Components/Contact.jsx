import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">

        {/* Get In Touch Section */}
        <div className="bg-gray-800 rounded-lg p-8 mb-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address Card */}
            <div className="bg-light rounded-lg p-5 flex flex-col justify-between h-full shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-light-blue text-2xl mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h4 className="text-yellow-500">Address</h4>
              </div>
              <p className="text-white mb-0">Sukant Nagar, Kolkata, 700098</p>
            </div>

            {/* Email Card */}
            <div className="bg-light rounded-lg p-5 flex flex-col justify-between h-full shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-light-blue text-2xl mr-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <h4 className="text-yellow-500">Mail Us</h4>
              </div>
              <p className="text-white mb-0">
                <a href="mailto:innovberg04@gmai.com" className="hover:text-yellow-300">innovberg04@gmai.com</a>
              </p>
            </div>

            {/* Telephone Card */}
            <div className="bg-light rounded-lg p-5 flex flex-col justify-between h-full shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-light-blue text-2xl mr-4">
                  <i className="fa fa-phone-alt transform rotate-90"></i>
                </div>
                <h4 className="text-yellow-500">Telephone</h4>
              </div>
              <p className="text-white mb-0">+91  9332162237</p>
            </div>
          </div>
        </div>

        {/* Contact Form and Map Container */}
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">Send Your Massage</h2>
            <form action="#" method="POST">
              {/* Name */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                  placeholder="Your Message"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  class="mt-6 px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-yellow-800 to-yellow-500 rounded shadow-md hover:shadow-lg transition duration-300 mx-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Map */}
          <div className="bg-gray-800 p-2 rounded-lg shadow-lg h-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7467.465501918024!2d88.4122925731153!3d22.562007452186275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027433ec31aeb9%3A0x1fe3b97aa8d1a375!2sSukant%20Nagar%2C%20Sector%20IV%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal%20700098!5e0!3m2!1sen!2sin!4v1729856178105!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;