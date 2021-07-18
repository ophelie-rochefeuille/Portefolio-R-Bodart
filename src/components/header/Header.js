import React , { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {ReactComponent as LogoBodart} from "../../pictures/logobodart.svg";
import './header.scss';
import BurgerButton from '../sideDrawer/BurgerButton';
import cv from "../../bodart.pdf";



export default class Header extends Component {
 
    render() {
        return(
        <header>
            <div className="principal-div-header">

                <NavLink to='/homePage'> <LogoBodart /> </NavLink>
                
                <div className="inferior-div-header">

                    <NavLink to='/homePage'  activeClassName='active-link' className="menu menu-pc home-button" href="/"> Home </NavLink>
                    <NavLink to='/portefolio'  activeClassName='active-link'  className="menu menu-pc portefolio-button">Portefolio</NavLink>
                    <a href={cv} target="_blank" rel="noreferrer" activeClassName='active-link' className="menu menu-pc resume-button">CV</a>
                    <NavLink to='/about' activeClassName='active-link'  className="menu menu-pc about-button">À propos</NavLink>
                    <NavLink to='/contact' activeClassName='active-link' className="menu menu-pc contact-button">Contact</NavLink>
                </div>

                <div className='button-burger-mobile'>
                    <BurgerButton click={this.props.drawerClickHandler} />
                </div>

            </div>
        </header>
        )  
    }
}


