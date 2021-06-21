import React, {Component} from 'react';
import presentationProjectPicture from './rectangle.jpg';
import  './projectTitle.scss';
import './homePage.scss';

export default class ProjectTitle extends Component {

    render () {

        return (
            <div>

            <div className='container-project'>
                <div className='container-box'>
                    <div className='container-picture-box'>
                    <img className='picture-project' alt='Poject Picture' src={presentationProjectPicture}></img>
                    </div>
                </div>


                <div className='title-project-text'>
                    <h1 className='title-class'>Project Title</h1>
                    <p className='paraph-project'>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training? Not too many people! That is what the MCSE boot camps are for.</p>
                    <div className='container-button-see-more'>
                    <input type='button' value='See more' className="button-see-more" />
                    </div>
                    
                </div>   
            </div>

            <div className='container-project'>
               
                
                <div className='title-project-text-two'>
                    <h1 className='title-class'>Project Title</h1>
                    <p className='paraph-project'>Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes with handhelds and workers in the field stay in touch with the central office via their notebooks. At home, we rely on our desktops and notebooks to do our shopping, to entertain us, and to keep us abreast of world events. We may not see our email servers, but we count on them to deliver our email whenever and wherever we want it.</p>
                    <div className='container-button-see-more'>
                    <input type='button' value='See more' className="button-see-more" />
                    </div>
                    
                </div>  
                <div className='container-box-two'>
                    <div className='container-picture-box'>
                    <img className="picture-project" alt='Poject Picture' src={presentationProjectPicture}></img>
                    </div>
                </div> 
            </div> 
    </div>
        )
           
    }}
