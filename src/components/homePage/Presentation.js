import React , { Component } from 'react';
import {NavLink} from 'react-router-dom';
import pictureBodart from "../../pictures/bitmap.jpg";
import './presentation.scss';
import cv from "../../bodart.pdf";



export default class Presentation extends Component {

    render() {
        return (
        <div className="container-principal-presentation-profil">
            <div className="secondary-container-presentation-profil">

                <div className='picture-bodart-div'>
                    <img className='picture-bodart' alt="Raphaël Bodart" src={pictureBodart} />  
                </div>

                <div className="container-text-presentation-profil">
                    <h1 className="h1-title-presentation-profil">Raphaël Bodart</h1>
                    <h2 className='h2-presentation'>Product Designer</h2>
                    <p className='p-presentation'>Passionate about new technologies, for me my work is a passion. I love discovering new things and not restricting myself to a single sector of activity.</p>
                    <NavLink to='/portefolio' className='button-presentation projects-button-presentation'>Projects</NavLink>
                    <a href={cv} target="_blank" rel="noreferrer" className='button-presentation resume-button-presentation'>Resume</a>
                </div> 
            </div>
        </div>
        )
    }
}