import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import '../../styles/SignUp.css'


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container">
        <spam className="close-btn">x</spam>
        {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
      </div>
        
    </>
  )
}

export default Form
