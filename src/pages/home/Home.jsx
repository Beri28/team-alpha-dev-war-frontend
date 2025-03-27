import React, { useContext } from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Footer from '../../Components/footer/Footer';
import {useAuth } from '../../context/authContext';
import HowItWorksSection from './components/how/How';
import WhyChooseUsSection from './components/Choose_Us/Choose';
import FeaturedCategories from './components/featured/Featured';
import Testimonials from './components/testimonials/Testimonials';
import GetStarted from './components/Get_Started/GetStarted';

// I am working on a freelance web application for Cameroonians and i will need your help with building some components using tailwind css and material UI for it

function Home() {
    const {currentUser}=useAuth()
    console.log(currentUser)
    return (
        <div className=''>
            <Navbar />
            <Hero />
            <HowItWorksSection />
            <WhyChooseUsSection />
            <FeaturedCategories />
            <Testimonials />
            <GetStarted />
            <br />
            <br />
            <br />
            <Footer />
        </div>
    );
}

export default Home;