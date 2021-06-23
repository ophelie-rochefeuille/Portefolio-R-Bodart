import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideDrawer.scss';

const sideDrawer = props => (
    <nav className='side-drawer'>
        <ul className='main-container-list-menu-burger'>
            <li className="list-menu-burger"><NavLink to='/homePage'  activeClassName='active-link' className="menu-burger home-button" href="/" onClick={props.click}> Home </NavLink></li>
            <li className="list-menu-burger"><NavLink to='/portefolio'  activeClassName='active-link'  className="menu-burger portefolio-button" onClick={props.click}>Portefolio</NavLink></li>
            <li className="list-menu-burger"><a activeClassName='active-link' className="menu-burger resume-button"href="/" onClick={props.click}>Resume</a></li>
            <li className="list-menu-burger"><NavLink to='/about' activeClassName='active-link'  className="menu-burger about-button" onClick={props.click}>About</NavLink></li>
            <li className="list-menu-burger"><NavLink to='/contact' activeClassName='active-link' className="menu-burger contact-button" onClick={props.click}>Contact</NavLink></li>
        </ul>
    </nav>
);



export default sideDrawer;