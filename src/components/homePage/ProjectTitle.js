import React, {Component} from 'react';
import presentationProjectPicture from './rectangle.jpg';
import  './projectTitle.scss';
import './homePage.scss';
import dataProject from "../data";
import { Link } from 'react-router-dom';



export default class ProjectTitle extends Component {
 constructor (props) {
     super (props);
     this.state = {
         projects: dataProject
      }
 }

 
    render () {
    
 const descriptionLastProject = dataProject[dataProject.length - 1];
 const descriptionSecondLastProject = dataProject[dataProject.length - 2];

 console.log(descriptionLastProject);
 console.log(descriptionSecondLastProject);

        return (
            <div>

            <div className='container-project'>
                <div className='container-box'>
                    <div className='container-picture-box'>
                    <img className='picture-project' alt='Poject Picture' src={descriptionLastProject.img}></img>
                    </div>
                </div>


                <div className='title-project-text'>
                    <h1 className='title-class'>{descriptionLastProject.title}</h1>
                    <p className='paraph-project'>{descriptionLastProject.content}</p>
                    <div className='container-button-see-more'>
                     <Link to={`/portefolio/${descriptionLastProject.id}`}><input type='button' value='See more' className="button-see-more" /></Link>
        
                    </div>
                    
                </div>   
            </div>

            <div className='container-project'>
               
                
                <div className='title-project-text-two'>
                    <h1 className='title-class'>{descriptionSecondLastProject.title}</h1>
                    <p className='paraph-project'>{descriptionSecondLastProject.content}</p>
                    <div className='container-button-see-more'>
                    <Link to={`/portefolio/${descriptionSecondLastProject.id}`} ><input type='button' value='See more' className="button-see-more" /></Link>
                    </div>
                    
                </div>  
                <div className='container-box-two'>
                    <div className='container-picture-box'>
                    <img className="picture-project" alt='Poject Picture' src={descriptionSecondLastProject.img}></img>
                    </div>
                </div> 
            </div> 
    </div>
        )
           
    }}
