import React from 'react';
import './GetStarted.css'
import img from '../../../../assets/imgs/images6.jpg'
const GetStarted = () => {
  return (
    <section className="text-white bg h-[40%]">
      <div className="bg-[#00000080] mx-auto py-16">
        <div className="max-w-[80%] mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Get Started Today and Find the Perfect Freelancer
            </h2>
            <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto lg:mx-0">
              Whether you're a business in need of top talent or a freelancer looking for your next project, our platform connects you with the right opportunities.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="#sign-up"
                className="bg-white text-blue-600 hover:bg-blue-100 hover:text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
              >
                Sign Up Now
              </a>
              <a
                href="#learn-more"
                className="bg-transparent border-2 border-white text-white hover:border-blue-600 hover:text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
            <img
              src={img}
              alt="Freelancers working"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
