import React from "react";
import { useAuth } from "./context/authContext";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./Pages/registration/Login";
import SignUp from "./Pages/registration/SignUp"; 
import JobCreationForm from "./Pages/job/job_creation_form/JobCreationForm";
import JobSeeker from "./Pages/job/job_seekers/JobSeekers";
import JobList from "./Pages/job/job_creation_form/JobList";
import EmployerPage from "./Pages/employers/Employers";

import Service from "./Pages/servicedetails/Service";
import FreelancersShowcase from "./pages/Gigs/Gigs";
function App() {
  const {currentUser}=useAuth()
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gigs' element={<FreelancersShowcase />} />
            <Route path='/gigDetail' element={<FreelancersShowcase />} />
            <Route exact path="/servicedetails" element={<Service />} />
            <Route exact path="/viewfreelancers" element={<JobSeeker />} />
            <Route exact path="/createjob" element={<JobCreationForm />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      
    </>
  );
}

export default App;
