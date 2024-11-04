import React from 'react';
import team1 from '../Images/Team/Team1.jpg';
import team2 from '../Images/Team/Team2.jpg';
import team3 from '../Images/Team/Team3.jpg';
import team4 from '../Images/Team/Team4.jpeg';
import team5 from '../Images/Team/Team5.jpeg';
import team6 from '../Images/Team/Team6.jpeg';
import team7 from '../Images/Team/Team7.jpeg';
import team8 from '../Images/Team/Team8.jpg';

// Sample team members data
const teamMembers = [
  {
    name: 'Saikh Jasir',
    role: 'Founder',
    image: team6,
    social: {
      instagram: 'https://www.instagram.com/shaikh.jasir_/',
      facebook: 'https://www.facebook.com/shaikh.jasir.17/',
      twitter: 'https://x.com/SkJasir1',
      linkedin: 'https://www.linkedin.com/in/sk-jasir-software-developer/',
    },
  },
  {
    name: 'SK Ejaj',
    role: 'Co-founder & COO ',
    image: team3,
    social: {
      instagram: 'https://www.instagram.com/ig_ejaj?igsh=MW1idjA2aXpmMTdo',
      facebook: 'https://www.facebook.com/skejaj.sk.12?mibextid=ZbWKwL',
      twitter: 'https://x.com/SkEjaj17?t=1TqMYr7L1RJNdP-e1A3d4g&s=08',
      linkedin: 'https://www.linkedin.com/in/sk-ejaj-711315243?trk=contact-info',
    },
  },
    {
      name: 'Rishika Kumari',
      role: 'HR manager & Project Manager',
      image: team1,
      social: {
        instagram: 'https://www.instagram.com/_rishika_one8/',
        facebook: '',
        twitter: '',
        linkedin: 'https://www.linkedin.com/in/rishika-kumari-b91472274/',
      },
    },
    {
      name: 'Rashni Khatun',
      role: 'Developer',
      image: team2,
      social: {
        instagram: 'https://www.instagram.com/',
        facebook: 'https://www.facebook.com/profile.php?id=100073180478460&mibextid=ZbWKwL',
        twitter: '',
        linkedin: 'https://www.linkedin.com/in/rashni-khatun-577929254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
    },
   
  
    {
      name: 'Ikramul Molla',
      role: 'Lead Developer',
      image: team4,
      social: {
        instagram: 'https://instagram.com/icon_ikra',
        facebook: 'https://m.facebook.com/icon.ikra.3',
        twitter: '',
        linkedin: 'https://linkedin.com/in/ikramul-molla',
      },
    },
    {
      name: 'Ayet ',
      role: 'Mannager ',
      image: team8,
      social: {
        instagram: 'https://www.instagram.com/ayet_lm10/',
        facebook: 'https://www.facebook.com/luckythe.ayet?mibextid=LQQJ4d',
        twitter: 'https://x.com/Ayet_Khan01',
        linkedin: '',
      },
    },
    {
      name: 'Sujan Samanta',
      role: 'Video Editor & Social Media Manager',
      image: team5,
      social: {
        instagram: 'https://www.instagram.com/sujan.creation?igsh=MTVuZ29vendqemNpZw==',
        facebook: 'https://www.facebook.com/share/1DetexqM3C/',
        twitter: 'https://x.com/sujan0099?t=tbz1MlmxAQdTVXaxERrGlg&s=09',
        linkedin: 'https://www.linkedin.com/in/sujan-samanta-1a8a9a267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
    },
    {
      name: 'Farhat Ali ',
      role: 'junior Videographer & Editor',
      image:  team7 ,
      social: {
        instagram: 'https://www.instagram.com/mikejohnson',
        facebook: 'https://www.facebook.com/mikejohnson',
        twitter: 'https://www.twitter.com/mikejohnson',
        linkedin: 'https://www.linkedin.com/in/mikejohnson',
      },
    },
  ];

const Team = () => {
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

export default Team;
