import React from 'react'
import useForm from '../components/useForm'
import validateInfo from '../components/validateInfo' 
import "./FormLog.css"

const FormSignup = (submitForm) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validateInfo)

    return (
       <div className="form-content-right">
           <form className="form" onSubmit={handleSubmit}>
               <h1 style={{fontSize:"17px"}}>Create your account by filling out the information below.</h1>
               <div className="form-inputs">
               <label for="username">Username</label>
                        <input placeholder="Enter your username" id="username" type="text" class="validate"  onChange={handleChange}/>                    
               </div>
               <div className="form-inputs">
               <label for="email">Email</label>
               <input placeholder="Enter your email address" id="email" type="email" class="validate" onChange={handleChange}/>                        
               </div>
               <div className="form-inputs">
               <label for="password">Password</label>
               <input placeholder="Enter your password" id="password" type="password" class="validate" onChange={handleChange}/>                             
               </div>
               <div className="form-inputs">
               <label for="password2">Confirm Password</label>
               <input placeholder="Enter your password again" id="password2" type="password" class="validate" onChange={handleChange}/> 
                                          
               </div>
               <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                </button>
                <span className="form-input-login">
                   Already have an account? Login <a href="">here</a> 
                </span>
           </form>
       </div>
    )
}

export default FormSignup
