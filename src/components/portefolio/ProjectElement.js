import React , { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import './projectElement.scss';



export default class ProjectElement extends Component {

    render() {
        return (
         
            <div className='main-container-portefolio-project'>
                <div className='container-project-portefolio'>
                <img className="img-porteflio" alt="project" src={this.props.project.img} />
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