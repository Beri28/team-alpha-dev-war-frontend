import React from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Footer from '../../Components/footer/Footer';
import Gig from '../../components/gig/Gigs';
import Filter from '../../components/filter/Filter';
import { useParams } from 'react-router-dom';

const Services = () => {
  const { category } = useParams();
  console.log(category)
  return (
    <>
        <Navbar />
            <Filter category={category} />
            {category==='all'?
            <div>
              <Gig title="Writing & Translation" />
              <Gig title="Development & IT" />
              <Gig title="Design and creative" />
              <Gig title="Sales and Marketing" />
            </div>
            :
            <Gig title={category} />
            }
            
        <Footer />
    </>
  );
};

export default Services;
