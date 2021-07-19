import React, {Component} from 'react';
import './skills.scss';
import {ReactComponent as LogoUXDesign} from "../../pictures/ux-design.svg";
import {ReactComponent as LogoUIDesign} from "../../pictures/ui-design.svg";
import {ReactComponent as LogoFontEndDev} from "../../pictures/font-end-development.svg";
import {ReactComponent as LogoProjectManagement} from "../../pictures/project-management.svg";
import "../../variables/variables.scss";
import cv from '../../Bodart_raphael_CV.pdf';

export default class ProjectTitle extends Component {

    render () {

        return (
            <div className='container-skills'>

            <div className='container-skills-secondary'>

              <h1 className='skills-h1-title'>Skills</h1>

                <div className='container-differents-skills'>

                <div className='container-skills-top'>

                    <div className='container-skills-top-left'>
                    <div className='container-skills-img'>
                    <div className='img-skills' > <LogoUXDesign className='svg-skills' /> </div>
                    </div>
                        <div className='div-skills-details ux-design'>
                            <h2 className='h2-skills'>UX Design</h2>
                            <p className='p-skills'>Tests avec les Utilisateurs, Audit et autres méthodologies sans utilisateur, Conception d’interfaces, Zonings & wireframes, Méthodologies UX (persona, scénario d’usage), Conception d’expériences utilisateurs.</p>
                         </div>
                    </div>
                   
                    <div className='container-skills-top-right'>
                    <div className='container-skills-img'>
                    <div className='img-skills'><LogoUIDesign className='svg-skills' /> </div>
                    </div>
                    <div className='div-skills-details ui-design'>
                        <h2 className='h2-skills'>UI design</h2>
                        <p className='p-skills'>Conception de logotypes, Création d’interfaces mobile et web, Conception et réalisation d’une charte graphique, Conception et maintenabilité d’un Design System.</p>
                    </div>
                    </div>
                   
                   
              </div>
               
             <div className='container-skills-bottom'>

             <div className='container-skills-bottom-left'>
                <div className='container-skills-img'>
                 <div className='img-skills'><LogoFontEndDev className='svg-skills' /> </div>
                 </div>
                    <div className='div-skills-details front-end-development'>
                            <h2 className='h2-skills'>Front-End Development</h2>
                            <p className='p-skills'>Intégration HTML5 / CSS3, Développement JavaScript (React, JS Vanilla), C / C++, Conception et développement d’un UIKit en lien avec le Design System côté design.</p>
                        </div>
                </div>

                <div className='container-skills-bottom-right'>
                <div className='container-skills-img'>
                 <div className='img-skills'><LogoProjectManagement className='svg-skills' /></div>
                 </div>
                    <div className='div-skills-details project-managment'>
                        <h2 className='h2-skills'>Project Managment</h2>
                        <p className='p-skills'>Planification, Gestion des ressources, LEAN & Agile, Management/Recrutement, Conception de cahiers des charges.</p>
                    </div>
                    </div>
               
            </div> 
            <div className='div-button-skills-resume'>
            <a href={cv} target="_blank" rel="noreferrer">  <input className='input-skills-resume' type='button' value='Voir le CV'></input></a>
    
            </div>
         </div>

        </div> 
    </div>
        )
           
    }}
