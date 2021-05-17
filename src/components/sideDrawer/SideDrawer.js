import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideDrawer.scss';

const sideDrawer = props => (
    <nav className='side-drawer'>
        <ul>
            <li><NavLink to='/homePage'  activeClassName='active-link' className="menu home-button" href="/"> Home </NavLink></li>
            <li><NavLink to='/portefolio'  activeClassName='active-link'  className="menu portefolio-button">Portefolio</NavLink></li>
            <li><a activeClassName='active-link' className="menu resume-button"href="/">Resume</a></li>
            <li><NavLink to='/about' activeClassName='active-link'  className="menu about-button">About</NavLink></li>
            <li><NavLink to='/contact' activeClassName='active-link' className="menu contact-button">Contact</NavLink></li>
        </ul>
    </nav>
);



export default sideDrawer;