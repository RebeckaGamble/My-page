import React from 'react'
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import '../../styles/index.css'



const Navbar = () => {

  return (
    <>
    <Nav>
        <NavLink to="/">
            <div className='ikon'></div>
            <h1 className='gamble'> Gamble</h1>
        </NavLink>
        
        <NavMenu>   
            <NavLink to="/Numbers" >
                Numbers
            </NavLink>
            <NavLink to="/Calculator" >
                Calculator
            </NavLink>
            <NavLink to="/Weather" >
                Weather
            </NavLink>
            <NavLink to="/TodoList" >
                Todo
            </NavLink>
            <NavLink to="/SignUp" >
                Sign up
            </NavLink>

        </NavMenu>
        
        <NavBtn>
            <NavBtnLink to="/SignIn">Sign in</NavBtnLink>
        </NavBtn>

       
    </Nav>
        <div className='test'>
            <h1 className='title'>Min testsida!</h1>
        </div>
    
    </>
  )
}

export default Navbar;


