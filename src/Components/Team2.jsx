import React from 'react';
import team1 from '../Images/Team2/AnisurKhan.jpeg';
import team2 from '../Images/Team2/MuksadKhan.jpeg';
import team3 from '../Images/Team2/RajibulKhan.jpeg';
import team4 from '../Images/Team2/SadekMirza.jpeg';
import team5 from '../Images/Team2/SkAslam.jpeg';
import team6 from '../Images/Team2/SkMosin.jpeg';
import team7 from '../Images/Team2/SkToufik.jpeg';

// Sample team members data
const teamMembers = [
  {
    name: 'Anisur Khan',
    role: '',
    image: team1,
    social: {
      instagram: '',
      facebook: '',
      twitter: '',
      linkedin: '',
    },
  },
  { name: 'Muksad Khan',
    role: '',
    image: team2,
    social: {
      instagram: '',
      facebook: '',
      twitter: '',
      linkedin: '',
    },
  },
  { name: 'Rajibul Khan',
    role: '',
    image: team3,
    social: {
      instagram: '',
      facebook: '',
      twitter: '',
      linkedin: '',
    },
  },

  { name: 'Sadek Mirza',
    role: '',
    image: team4,
    social: {
      instagram: '',
      facebook: '',
      twitter: '',
      linkedin: '',
    },
  },
  { name: 'Sk Aslam',
    role: '',
    image: team5,
    social: {
      instagram: '',
      facebook: '',
      twitter: '',
      linkedin: '',
    },
  },
  { name: 'Sk Mosin',
    role: '',
    image: team6,
    social: {
      instagram: '',
      facebook: '',
      twitter: '',
      linkedin: '',
    },
  },
  { name: 'Sk Toufik',
    role: '',
    image: team7,
    social: {
      instagram: '',
      facebook: '',
      twitter: '',
      linkedin: '',
    },
  },
  ];

const Team2 = () => {
    return (
      <section id="team" className="p-10 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-6 text-white">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-10 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative w-72 h-96 bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-500"
            >
              {/* Team member image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay for text */}
              <div className="absolute bottom-0 left-0 right-0  p-4 text-center bg-black bg-opacity-50 text-white ">
              {/* Team member name */}
              <h3 className="text-2xl font-bold shadow-lg">{member.name}</h3>

              {/* Team member role */}
              <p className="text-sm">{member.role}</p>
              
              {/* Social media links */}
              <div className="mt-3 flex justify-center space-x-4">
                {/* Instagram */}
                <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram text-white hover:text-yellow-500 text-xl"></i>
                </a>

                {/* Facebook */}
                <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook text-white hover:text-yellow-500 text-xl"></i>
                </a>

                {/* Twitter */}
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter text-white hover:text-yellow-500 text-xl"></i>
                </a>

                {/* LinkedIn */}
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin text-white hover:text-yellow-500 text-xl"></i>
                </a>
              </div>
            </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default Team2;
