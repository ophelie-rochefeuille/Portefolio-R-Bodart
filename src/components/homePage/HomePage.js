import React  from 'react';
import Presentation from './Presentation';
import ProjectTitle from './ProjectTitle';
import Skills from './Skills';
import Footer from '../footer/Footer';
import "../../variables/variables.scss";


export default class HomePage extends React.Component {

   
    render() {

        return (
           
 
            <div className='home-page-principal'>
                <Presentation /> 
                <ProjectTitle />
                <Skills />
                <Footer />
            </div>
        )
    }
}


