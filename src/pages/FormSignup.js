import React from 'react'
import useForm from '../components/useForm'
import validateInfo from '../components/validateInfo' 
import "./FormLog.css"

const FormSignup = (submitForm) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validateInfo)

    return (
       <div className="form-content-right">
           <form className="form" onSubmit={handleSubmit}>
               <h1>Join today and find many new furry friends! Create your account by filling out the information below.</h1>
               <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                    username
                    </label>
                        <input id="username" type="text"  className="form-input" placeholder="Enter your username" value={values.username} onChange={handleChange}/>
                    {errors.username && <p>{errors.username}</p>}               
               </div>
               <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                    Email Address
                    </label>
                        <input id="email" type="email" className="form-input" placeholder="Enter your email" value={values.email} onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}                   
               </div>
               <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                    Password
                    </label>
                        <input id="password" type="password" className="form-input" placeholder="Enter your password" value={values.password} onChange={handleChange}/>
                        {errors.password && <p>{errors.password}</p>}                    
               </div>
               <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                    Confirm Password
                    </label>
                        <input id="password2" type="password" className="form-input" placeholder="Enter password again" value={values.password2} onChange={handleChange}/> 
                        {errors.password2 && <p>{errors.password2}</p>}                  
               </div>
               <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                </button>
                <span className="form-input-login">
                   Already have an account? Login <a href="#">here</a> 
                </span>
           </form>
       </div>
    )
}

export default FormSignup
