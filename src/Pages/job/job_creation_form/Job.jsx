import { Button, Modal } from '@mui/material';
import React, { useState } from 'react';

function Job({ title, description, location, salary }) {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProject(null);
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-gray-800 text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-500 text-sm"><strong>Location:</strong> {location}</p>
      <p className="text-gray-500 text-sm"><strong>Salary:</strong> {salary}</p>
      <div className="mt-4">
      <Button variant="outlined" color="inherit" size="medium" style={{ color: '#4A5568',borderColor:'4A5568' }} onClick={()=>handleOpenModal()}>
        Apply
      </Button>
      </div>
      <Modal open={openModal} onClose={handleCloseModal}>
        <div className="flex justify-center items-center h-full">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700 mb-4"><strong>Description:</strong> {description}</p>
            <p className="text-gray-700 mb-4"><strong>Requirements:</strong> {salary}</p>
            <Button variant="contained" sx={{mx:1}} color="primary" onClick={handleCloseModal}>
              Bid for this project
            </Button>
            <Button variant="outlined" sx={{mx:1}} color="secondary" onClick={handleCloseModal} className="mt-4">
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Job;