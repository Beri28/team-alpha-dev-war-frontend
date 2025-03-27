import React, { useState } from 'react'
// import "./registration.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {  Link } from'react-router-dom';
import { ErrorMessage, Field, Formik,Form } from 'formik';
import * as  Yup from "yup"
import { useAuth } from '../../context/authContext';
import { Post } from '../../functions/apiCalls';
function SignUp() {
  const {Login}=useAuth()
    // const [email,setEmail]=useState('')
    // const [name,setName]=useState('')
    // const [telephone,setTelephone]=useState(0)
    // const [password,setPassword]=useState('')
    const validationSchema= Yup.object({
      name: Yup.string()
       .required('User Name is Required'),
      telephone: Yup.string()
       .required('Phone Number is Required'),
      email: Yup.string()
       .email('Invalid email')
       .required('Email is Required'),
      password: Yup.string()
       .min(8, 'Password must be at least 8 characters')
       .required('Password is Required'),
       confirm_password: Yup.string()
       .required('Required')
       .oneOf([Yup.ref('password')], 'Passwords must match')

    })
    const [loading,setLoading] = useState(false)
    // console.log("Clicked")
    // console.log(email,name,telephone,password)

   async function handleSubmit(values){
      console.log(values)
        console.log("submit clicked");
    }
        
  return (
    <div className='body max-w-[80%] mx-auto'>
    <div className='login-container max-w-[80%] mx-auto'>
      <h1>SignUp</h1>
      <Formik
      initialValues={{
        name:'',
        telephone:'',
        email:'',
        password:'',
        confirm_password:'',
      }}
      validationSchema={validationSchema}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={handleSubmit}
      >
        {({handleSubmit,dirty,isValid}) => (
      <Form  onSubmit={handleSubmit}>
        <label htmlFor="l1">Name</label><br />
      <Field className="input" id="l1" type="text" name="name" placeholder='type your name' /><br />
      <ErrorMessage name="name" component="div" className="error" />  
      <label  htmlFor="l3">Phone</label><br />
      <Field className="input" id="l3" name="phone" type="text" placeholder= "Phone" />
      <ErrorMessage name="telephone" component="div" className="error" />
      <br />
      <label htmlFor="l2">Email</label><br />
      <Field className="input" id="l2" type="email" name="email" placeholder= "example@gmail.com" />
      <ErrorMessage name="email" component="div" className="error" />
      <br />
      <label htmlFor="l4">Password</label><br />
      <Field className="input" id="l4" name="password" type="password" />
      <ErrorMessage name="password" component="div" className="error" />
      <br />
      <label htmlFor="l5">Confirm Password</label><br />
      <Field className="input" id="l5" name="confirm_password" type="password" />
      <ErrorMessage name="confirm_password" component="div" className="error" />
      <br />
      <button type='submit' disabled={!isValid || !dirty || loading}>{loading? "SigningUp...":"Submit"}</button>
      <p className='signup'>Already have an account? <Link to="/login">Login</Link> </p>
      </Form>
      )}
      </Formik>
      {/* <form action="" className=" mt-4 border p-5 rounded-2" onSubmit={(e)=>{handleSubmit(e)}}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} name="username" placeholder="Enter username" required/>
                    <div className="form-text"></div>
                </div>
                <div className="form-text text-danger"></div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="telephone">Contact</label>
                    <input type="tel" className="form-control" name="telephone" placeholder="Enter contact" value={telephone} onChange={(e)=>{setTelephone(e.target.value)}} required />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Enter password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
                    
                </div>
                <div className="form-group mt-3">
                    <button type="submit" className="btn btn-outline-success w-100">Register</button>
                </div>
                <div className="form-group mt-3" onClick={()=>{}}>
                    {type== "Register" && <div className="form-text fw-bold">Already have an account?<Link to='/login'>Login</Link></div>}
                    {type== "Login" && <div className="form-text fw-bold">Don't have an account?<Link to='/signup'>Register</Link></div>}
                </div>
          </form> */}
    </div>
    </div>
  )
}

export default SignUp