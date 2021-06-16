import React , {Component} from 'react'; 
import ProjectElement from './ProjectElement';
import dataProject from '../data';
import './portefolioList.scss';
import portefolioimg from './group-2.png';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import ProjectPage from './ProjectPage';





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
                <div className='div-container-img-h-p'>
                <div className="div-portefolio-img">
                    <img className='portefolio-img' alt='portefolio image' src={portefolioimg} />
                </div>
                <div className='div-h-p-portefolioList'>
                    <h1 className='portefolio-title-portefolioList'>Portefolio</h1>
                    <p className='paragraph-portefoliolist-first-part'>Here is a part of my works where you’ll see my skills, the delivery process of complex projects and also some lighter projects.</p>
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