import React , { Component } from 'react';
import './projectElement.scss';



export default class ProjectElement extends Component {

    render() {
        const divStyleProjects = {
            backgroundImage: 'url(' + this.props.project.img +')',
            backgroundSize: 'cover',
            backgroundPosition: 'center'};

        return (
         
            <div className='main-container-portefolio-project'>
                <div className='container-project-portefolio'>
                <div className="img-portefolio"  style={divStyleProjects} />
                <div className='container-project-details-porteflio'>
                    <h1 className='title-project-portefoliolist'>{ this.props.project.title}</h1>
                    <span className='name-company'>{ this.props.project.company}</span>
                  <span className='name-category'>{this.props.project.categories}</span>
                </div>
            </div>
            </div>
          
        );
    }
}