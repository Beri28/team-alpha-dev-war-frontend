import React from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Footer from '../../Components/footer/Footer';
import Gig from '../../components/gig/Gigs';
import Filter from '../../components/filter/Filter';

const FreelancersShowcase = () => {
  return (
    <>
        <Navbar />
            <Filter />
            <Gig title="Copy writers" />
            <Gig title="Web designers" />
            <Gig title="Digital marketers" />
        <Footer />
    </>
  );
};

export default FreelancersShowcase;
