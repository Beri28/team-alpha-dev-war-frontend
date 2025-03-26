import React from 'react';
import ServiceCard from './ServiceCard';
import servicesData from '../../service.js'; 

function Service() {
  
  const specificService = servicesData[0];
  console.log(specificService)
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Service Details</h1>
      <ServiceCard service={specificService} /> {/* Pass the specific service */}
    </div>
  );
}

export default Service;