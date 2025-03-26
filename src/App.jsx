import React from "react";
import Login from "./Pages/registration/Login"
import SignUp from "./Pages/registration/SignUp"
import {Routes,Route} from 'react-router-dom'
function App() {
//   const {currentUser}=useAuth()
  return (
    <div>
     <Routes>
       <Route exact path="/" element={<Login />} />
       <Route exact path="/signup" element={<SignUp />} />
     </Routes>
    </div>
  );
}

export default App;
