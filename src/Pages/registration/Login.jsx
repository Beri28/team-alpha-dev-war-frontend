import React, { useState } from 'react'
import "./registration.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from'react-router-dom';
import { Formik,Form,ErrorMessage,Field } from 'formik';
import * as Yup from 'yup'
function Login() {
    
    const [loading, setLoading] =useState(false)
    function handleSubmit(values){
        console.log("submit clicked");
    }
    const validationSchema = Yup.object({
      email: Yup.string()
       .email('Invalid email')
       .required('Required'),
      password: Yup.string()
       .min(6, 'Password must be at least 6 characters')
       .required('Required'),
    }) 
  return (
    <div className='body'>
    <div className='login-container'>
      <h1>Login</h1>
      <Formik
      validationSchema={validationSchema}
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validateOnBlur={true}
      validateOnChange={true}

      >
        {({handleSubmit,isValid,dirty})=>(
      <Form className="input" onSubmit={handleSubmit} >
        <label htmlFor="l1">Email</label><br />
      <Field className="input" name="email" type="email" placeholder='Email' />
      <ErrorMessage name='email' component="div" className='error' />
      <br />
      <label htmlFor="l2">Password</label><br />
      <Field className="input" name="password" type="password" placeholder= "Type your password" />
      <ErrorMessage name='password' component="div" className='error' />
      <br />
      <button type="submit" disabled={!isValid || !dirty || loading} >{loading?"Logging in...":"Submit"}</button>
      <p className='signup'>Don't have an account? <Link to="/signup">Sign Up</Link> </p>
      </Form>
      )}
      </Formik>
    </div>
    </div>
  )
}

export default Login