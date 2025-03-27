import React, { useState } from 'react'
import "./registration.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {  data, Link, useNavigate } from'react-router-dom';
import { ErrorMessage, Field, Formik,Form } from 'formik';
import * as  Yup from "yup"
import axios from 'axios';
import { useAuth } from '../../context/authContext';
function SignUp() {
  const {Login}=useAuth()
    const navigate = useNavigate()
    const validationSchema= Yup.object({
      name: Yup.string()
       .required('User Name is Required'),
      phone: Yup.string()
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


   async function handleSubmit(values,{resetForm}){
      setLoading(true)
      console.log(values)
    try{ const response = await axios.post('https://yahustle.onrender/api/v1/auth/signup',values,{headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }}) 
  const data = response.data
  localStorage.getItem(data.token)
  navigate('/login')
  resetForm()
      
  setLoading(false)
  }
    catch(error){
        console.log(error)
        setLoading(false)
        alert('Error signing up')
        resetForm()
      
      }
     
    }
        
  return (
    <div className='body'>
    <div className='login-container'>
      <h1>SignUp</h1>
      <Formik
      initialValues={{
        name:'',
        phone:'',
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
      <ErrorMessage name="phone" component="div" className="error" />
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
    </div>
    </div>
  )
}

export default SignUp