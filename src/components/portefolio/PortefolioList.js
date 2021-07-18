import React , {Component} from 'react'; 
import ProjectElement from './ProjectElement';
import dataProject from "../dataProjects/data";
import './portefolioList.scss';
import portefolioimg from "../../pictures/img_presentation_portefolio.png";
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';





export default class PortefolioList extends Component {

    constructor (props) {
        super (props);
        this.state = {
            projects: dataProject
        }
    }
    render() {
        return (
            <div>
<div className='main-container-portefolioList'>
    <div className="main-wrapper-portefolioList">
                <div className='div-container-img-h-p'>
                
                 <div className="div-portefolio-img">
                    <img className='portefolio-img' alt='portefolio' src={portefolioimg} />
                 </div>

                 <div className='div-h-p-portefolioList'>
                    <h1 className='portefolio-title-portefolioList'>Portefolio</h1>
                    <p className='paragraph-portefoliolist-first-part'>Voici une partie de mes travaux où vous verrez mes compétences, le processus de livraison de projets complexes et aussi quelques projets plus légers.</p>
                 </div>
                </div>
                </div>
                <div className='main-container-portefoliolist-project'>
                { this.state.projects.map ((p, index) => (
                    <Link to={`/portefolio/${p.id}`} className="a-project-element">
                    <ProjectElement key={p.title + index} project={p} />
                    </Link>
                ))}
                </div>
            <Footer />
            </div>
            </div>
            
        )
    }
}