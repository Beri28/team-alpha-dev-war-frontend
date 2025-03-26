import React from "react";
import { useAuth } from "./context/authContext";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  const {currentUser}=useAuth()
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
      
    </>
  );
}

export default App;
