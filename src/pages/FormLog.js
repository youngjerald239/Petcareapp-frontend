import React, {useState} from 'react'
import FormSignup from './FormSignup'
import FormSuccess from "./FormSuccess"
import "./FormLog.css"

const FormLog = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }
    return (
        <>
        <div className="form-container">
            <span className="close-btn">X</span>
            <div className="form-content-left">
                <img src="https://images.unsplash.com/photo-1597806999047-9456837df754?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="dog" className="form-img"/>
            </div>
            {!isSubmitted ? (<FormSignup submitForm={submitForm}/>) : (<FormSuccess/>)}
        </div>
            
        
        </>
    )
}

export default FormLog
