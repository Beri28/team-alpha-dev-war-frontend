// import React from 'react';

// const freelancers = [
//   {
//     name: 'John Doe',
//     skills: ['Web Development', 'React.js', 'Node.js'],
//     rating: 4,
//     profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
//     link: '#',
//   },
//   {
//     name: 'Jane Smith',
//     skills: ['Graphic Design', 'UI/UX Design', 'Figma'],
//     rating: 5,
//     profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
//     link: '#',
//   },
//   {
//     name: 'Michael Johnson',
//     skills: ['Content Writing', 'SEO', 'Copywriting'],
//     rating: 3,
//     profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
//     link: '#',
//   },
//   {
//     name: 'Sarah Lee',
//     skills: ['Data Analysis', 'Excel', 'Python'],
//     rating: 4,
//     profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
//     link: '#',
//   },
// ];

// const Gig = ({title}) => {
//   return (
//     <section className="py-16 max-w-[80%] mx-auto">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">
//           {title}
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {freelancers.map((freelancer, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
//             >
//               <img
//                 src={freelancer.profileImage}
//                 alt={freelancer.name}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{freelancer.name}</h3>
//                 <p className="text-sm text-gray-600 mb-4">
//                   {freelancer.skills.join(', ')}
//                 </p>
//                 <div className="flex items-center mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <svg
//                       key={i}
//                       className={`w-5 h-5 ${
//                         i < freelancer.rating ? 'text-yellow-400' : 'text-gray-300'
//                       }`}
//                       fill="currentColor"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 15l-5.62 2.95 1.08-6.29L.88 6.95l6.34-.55L10 0l2.78 5.35 6.34.55-4.58 5.71 1.08 6.29L10 15z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   ))}
//                 </div>
//                 <a
//                   href={freelancer.link}
//                   className="block outline-1 outline-black text-black hover:text-white text-center py-2 rounded-lg mt-4 hover:bg-black transition duration-300"
//                 >
//                   View Profile
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gig;
import React, { useState } from "react";
import { Button, Modal } from "@mui/material";

// Sample project data, you can fetch this from an API.
const projectsData = [
  {
    id: 1,
    title: "Web Development for E-commerce",
    description: "Looking for a skilled developer to create an online store.",
    requirements: "Experience with Shopify or WooCommerce.",
    category: "Web Development",
    location: "Yaoundé, Cameroon",
    budget: "$500 - $1000",
  },
  {
    id: 2,
    title: "Graphic Design for Marketing Campaign",
    description: "Need a designer to create engaging marketing materials.",
    requirements: "Experience in Adobe Creative Suite.",
    category: "Design",
    location: "Douala, Cameroon",
    budget: "$300 - $500",
  },
  // Add more projects as needed
];

const Gig = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-black mb-4 text-center">Find Work</h2>
      <div className="mb-8">
        {/* Filters */}
        <div className="flex justify-between">
          <select className="border border-gray-300 rounded p-2">
            <option>Category</option>
            <option>Web Development</option>
            <option>Design</option>
            <option>Writing</option>
          </select>
          <select className="border border-gray-300 rounded p-2">
            <option>Location</option>
            <option>Yaoundé</option>
            <option>Douala</option>
          </select>
          <select className="border border-gray-300 rounded p-2">
            <option>Budget</option>
            <option>Under $500</option>
            <option>$500 - $1000</option>
          </select>
        </div>
      </div>

      {/* Project Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div key={project.id} className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 cursor-pointer" onClick={() => handleOpenModal(project)}>
            <h3 className="font-semibold text-black">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <p className="text-gray-500">Category: {project.category}</p>
            <p className="text-gray-500">Location: {project.location}</p>
            <p className="text-gray-500">Budget: {project.budget}</p>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <Modal open={openModal} onClose={handleCloseModal}>
          <div className="flex justify-center items-center h-full">
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
              <h3 className="text-xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-700 mb-4"><strong>Description:</strong> {selectedProject.description}</p>
              <p className="text-gray-700 mb-4"><strong>Requirements:</strong> {selectedProject.requirements}</p>
              <Button variant="contained" color="primary" onClick={handleCloseModal}>
                Bid for this project
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleCloseModal} className="mt-4">
                Close
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Gig;