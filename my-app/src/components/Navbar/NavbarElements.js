import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
//import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) /2);
    z-index: 10;
    padding-left: 8%;
    padding-right: 8%;
    .ikon::before {
        animation: 1.5s linear infinite spinner;
        animation-play-state: inherit;
        background: conic-gradient(
          hsl(360, 100%, 50%),
          hsl(315, 100%, 50%),
          hsl(270, 100%, 50%),
          hsl(225, 100%, 50%),
          hsl(180, 100%, 50%),
          hsl(135, 100%, 50%),
          hsl(90, 100%, 50%),
          hsl(45, 100%, 50%),
          hsl(0, 100%, 50%)
        );
        border-radius: 50%;
        content: "";
        height: 40px;
        width: 40px;
        position: absolute;
        top: 3%;
        left: 6%;
        right: auto;
        transform: translate3d(-50%, -50%, 0);
        will-change: transform;
      }
      
      @media screen and (max-width: 750px) {
        padding: 0 0;
        padding-left: 1%;
        padding-right: 1%;
        justify-content: flex-start;
        width: 100%;
        .ikon::before{
            visibility: hidden;
        }
        display: inline-flex;
    }
     
    }
`;


export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    padding-left: 3 5rem;
    height: 100%;
    cursor: pointer;

    @media screen and (max-width: 750px) {
        display: flex;
        padding-left: 0 0rem;
        width: auto;
        padding: 0 0.5rem;
    }

    &.active {
        color: rgb(121, 132, 234);
    }
`;



export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 800px) {
        margin-right: 0%;
    }
`;

//sign in
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 4%;

    @media screen and (max-width: 800px) {
        margin-right: 3%;
        align-items: center;
    }
`;
//sign in
export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: linear-gradient(
        90deg,
        rgb(53, 25, 240) 0%,
        rgb(121, 132, 234) 100%
      );
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer; 
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    @media screen and (max-width: 800px) {
        font-size: 14px;
        text-align: center;
        padding: 4px 10px;
    }


    &:hover {
        transition: all 0.2s ease-in-out;
        background: linear-gradient(
            90deg,
            rgb(50, 14, 123) 0%,
            rgb(167, 43, 244) 100%
          );
        color: #fff;
        transform: scale(1.1);
    }
`;







/*color: #15cdfc;*/