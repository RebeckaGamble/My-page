import React from 'react'
import useForm from './useForm'
import '../../styles/SignUp.css'
import validate from './validateInfo'

const FormSignup = ({submitForm}) => {

const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

  return (
   <div className="form-content">
    <form className="form" onSubmit={handleSubmit}>
        <h1>Registrering</h1>
    <div className="center">
        <div className="form-input">
            <label htmlFor="username" 
                className='form-label'>
                Användarnamn:
            </label>
            <input 
                id="username"
                type="text" 
                name="username" 
                className='form-input' 
                placeholder='Skriv in ditt användarnamn' 
                value={values.username}
                onChange={handleChange}
            />
            {errors.username && <p className="form-inputs">{errors.username}</p>}
        </div>
        <div className="form-input">
            <label htmlFor="email" 
                className='form-label'>
                E-post:
            </label>
            <input 
                id="email"
                type="email" 
                name="email" 
                className='form-input' 
                placeholder='Skriv in e-post' 
                value={values.email}
                onChange={handleChange}
            />
            {errors.email && <p className="form-inputs">{errors.email}</p>}
        </div>
        <div className="form-input">
            <label htmlFor="password" 
                className='form-label'>
                Lösenord:
            </label>
            <input 
                id="password"
                type="password" 
                name="password" 
                className='form-input' 
                placeholder='Skriv in ditt lösenord' 
                value={values.password}
                onChange={handleChange}
            />
            {errors.password && <p className="form-inputs">{errors.password}</p>}
        </div>
        <div className="form-input">
            <label htmlFor="password2" 
                className='form-label'>
                Bekräfta lösenord:
            </label>
            <input 
                id="password2"
                type="password" 
                name="password2" 
                className='form-input' 
                placeholder='Upprepa lösenord'
                value={values.password2}
                onChange={handleChange} 
            />
            {errors.password2 && <p className="form-inputs">{errors.password2}</p>}
        </div>
        <div className='input-buttons'>
            <button className="form-input-btn" type="submit">Registrera</button>
            <span className="form-input-login">Har du redan ett konto? Logga in <a href='/signin'>här</a></span>
        </div>
       
        </div>
    </form>
   </div>
  )
}

export default FormSignup