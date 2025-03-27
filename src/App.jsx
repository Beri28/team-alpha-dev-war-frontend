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

import ServiceDetails from "./pages/Services/components/ServiceDetail";
import Services from "./pages/Services/Services";
import FreelanceOnboarding from "./pages/onboarding/Onboarding";
import Gig from "./components/gig/Gigs";
// import DataContextProvider from "./context/dataContext";
function App() {
  return (

    <>
    {/* <DataContextProvider> */}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<Home />} />
            <Route exact path="/hire" element={<EmployerPage />} />
            <Route path='/services/:category' element={<Services />} />
            <Route path="/servicedetails" element={<ServiceDetails />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/onboard" element={<FreelanceOnboarding />} />
            <Route exact path="/employer" element={<EmployerPage />} />
            <Route exact path="/viewfreelancers" element={<JobSeeker />} />
            <Route exact path="/createjob" element={<JobCreationForm />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
        </Routes>
    {/* </DataContextProvider> */}
    </>

  );
}

export default App;
