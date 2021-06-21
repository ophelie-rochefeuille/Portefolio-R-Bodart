import React, {Component} from 'react';
import './skills.scss';
import {ReactComponent as LogoUXDesign} from './ux-design.svg';
import {ReactComponent as LogoUIDesign} from './ui-design.svg';
import {ReactComponent as LogoFontEndDev} from './font-end-development.svg';
import {ReactComponent as LogoProjectManagement} from './project-management.svg';
import '../../components/variables.scss';

export default class ProjectTitle extends Component {

    render () {

        return (
            <div>

            <div className='container-skills'>

              <h1 className='skills-h1-title'>Skills</h1>

                <div className='container-differents-skills'>

                <div className='container-skills-top'>

                    <div className='container-skills-top-left'>
                    <div className='container-skills-img'>
                    <div className='img-skills' > <LogoUXDesign className='svg-skills' /> </div>
                    </div>
                        <div className='div-skills-details ux-design'>
                            <h2 className='h2-skills'>UX Design</h2>
                            <p className='p-skills'>At home, we rely on our desktops and notebooks to do our shopping, to entertain us, and to keep us abreast of world events. We may not see our email servers, but we count on them to deliver our email whenever and wherever we want it.</p>
                         </div>
                    </div>
                   
                    <div className='container-skills-top-right'>
                    <div className='container-skills-img'>
                    <div className='img-skills'><LogoUIDesign className='svg-skills' /> </div>
                    </div>
                    <div className='div-skills-details ui-design'>
                        <h2 className='h2-skills'>UI design</h2>
                        <p className='p-skills'>Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market. The market today is approximately a twenty billion dollar business.</p>
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
                            <p className='p-skills'>Usage of the Internet is becoming more common due to rapid advancement of technology and the power of globalization.</p>
                        </div>
                </div>

                <div className='container-skills-bottom-right'>
                <div className='container-skills-img'>
                 <div className='img-skills'><LogoProjectManagement className='svg-skills' /></div>
                 </div>
                    <div className='div-skills-details project-managment'>
                        <h2 className='h2-skills'>Project Managment</h2>
                        <p className='p-skills'>If you are in the market for a computer, there are a number of factors to consider. Will it be used for your home, your office or perhaps even your home office combo?</p>
                    </div>
                    </div>
               
            </div> 
            <div className='div-button-skills-resume'>
                <input className='input-skills-resume' type='button' value='See Resume'></input>
            </div>
         </div>

        </div> 
    </div>
        )
           
    }}
