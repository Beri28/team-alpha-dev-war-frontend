// import React, { useState } from 'react';
// import UserTestimonial from './UserTestimonial';

// function Testimonials(props) {
//     const [reviews,setReviews]=useState([
//         {
//           userName:'User 001',  
//           date:'3/24/2025',  
//           rating:4,  
//           body:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,  
//         },
//         {
//           userName:'User 002',  
//           date:'2/04/2020',  
//           rating:5,  
//           body:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,  
//         },
//         {
//           userName:'User 003',  
//           date:'12/24/2024',  
//           rating:3,  
//           body:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,  
//         },
//         {
//           userName:'User 004',  
//           date:'3/24/2025',  
//           rating:4,  
//           body:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,  
//         },
//     ])
//     return (
//         <div className='sm:max-w-[80%] max-w-[90%] mx-auto pb-5'>
//             <p className='text-3xl font-bold py-8 text-center font-[cursive]'>What our customers say</p>
//             <div className='grid sm:grid-cols-3 gap-4'>
//             {reviews.map((review,index)=>(
//                 <UserTestimonial key={review.id?review.id:index} review={review} />
//             ))}
//             </div>
//         </div>
//     );
// }

// export default Testimonials;
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      position: 'CEO, TechCorp',
      rating: 5,
      text: 'This platform helped me find the perfect freelancer for our web development project. Highly recommended!',
      isPositive: true,
    },
    {
      name: 'Jane Smith',
      position: 'Marketing Manager, Webify',
      rating: 3,
      text: 'The platform is okay. The search process could use improvement, but the freelancers are skilled.',
      isPositive: false,
    },
    {
      name: 'Michael Johnson',
      position: 'Founder, StartupCo',
      rating: 4,
      text: 'Great service! We found talented individuals for our graphic design work. A bit more transparency would help.',
      isPositive: true,
    },
    {
      name: 'Sara Lee',
      position: 'Product Manager, FinTechX',
      rating: 3,
      text: 'Good experience overall, but I feel the platform could have more diverse options in certain niches.',
      isPositive: false,
    },
  ];

  return (
    <section className="py-16 max-w-[80%] mx-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 ${testimonial.isPositive ? 'border-l-4 border-green-500' : 'border-l-4 border-yellow-500'}`}>
              <div className="flex items-center mb-4">
                <div className="text-xl font-semibold text-gray-700">{testimonial.name}</div>
                <div className="ml-2 text-sm text-gray-500">{testimonial.position}</div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
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
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
