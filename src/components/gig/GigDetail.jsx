import React from 'react';

const FreelancerDetail = () => {
  const freelancer = {
    name: 'John Doe',
    profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    skills: ['Web Development', 'React.js', 'Node.js', 'JavaScript'],
    rating: 4,
    about: 'I am a passionate developer with over 5 years of experience working with React.js and Node.js. I enjoy building clean, scalable, and user-friendly web applications.',
    hourlyRate: 50,
    portfolio: [
      { title: 'Portfolio Project 1', image: 'https://via.placeholder.com/400x300' },
      { title: 'Portfolio Project 2', image: 'https://via.placeholder.com/400x300' },
      { title: 'Portfolio Project 3', image: 'https://via.placeholder.com/400x300' },
    ],
  };

  return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Freelancer Info */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-8 lg:space-y-0">
            {/* Profile Section */}
            <div className="flex-1 text-center lg:text-left">
              <img
                src={freelancer.profileImage}
                alt={freelancer.name}
                className="w-40 h-40 rounded-full mx-auto lg:mx-0 shadow-lg object-cover"
              />
              <h2 className="text-3xl font-extrabold text-gray-800 mt-6">{freelancer.name}</h2>
              <div className="flex items-center justify-center lg:justify-start space-x-2 mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < freelancer.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15l-5.62 2.95 1.08-6.29L.88 6.95l6.34-.55L10 0l2.78 5.35 6.34.55-4.58 5.71 1.08 6.29L10 15z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
                <span className="text-gray-600">{freelancer.rating} / 5</span>
              </div>
            </div>

            {/* About Freelancer and Skills */}
            <div className="flex-1 lg:mt-0 text-center lg:text-left">
              <h3 className="text-xl font-semibold text-gray-800">About Me</h3>
              <p className="text-lg text-gray-600 mt-4">{freelancer.about}</p>
              <h3 className="text-xl font-semibold text-gray-800 mt-6">Skills</h3>
              <ul className="list-disc text-lg text-gray-600 mt-4 pl-6">
                {freelancer.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold text-gray-800 mt-6">Hourly Rate</h3>
              <p className="text-lg text-gray-800">${freelancer.hourlyRate} / hour</p>
            </div>
          </div>

          {/* Portfolio Section */}
          {freelancer.portfolio.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Portfolio</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {freelancer.portfolio.map((project, index) => (
                  <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-800">{project.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hire Now Button */}
          <div className="mt-16 text-center">
            <a
              href="#hire"
              className="bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Hire Now
            </a>
          </div>
        </div>
      </section>
  );
};

export default FreelancerDetail;
