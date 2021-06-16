import React , {Component} from 'react'; 
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import './about.scss';
import bodartpng from './bodart.png';
import vision from './montains.png';
import climbing from './climbing.png';
import career from './career.png';



export default class PortefolioList extends Component {

    render() {
        return (
            <div className='main-container-about'>
                <div className='background-div-about'>
                <div className='container-about-hi'>
                    <img className='bodartpng' alt='Raphaël Bodart' src={bodartpng}  />
                    <div className='div-presentation-about'>
                    <h1 className='name-h1-about'>Hi, I'm Raphaël</h1>
                    <p className='presentation-about'>If you’re here, it’s obvious that you want to learn a little bit more about me! I'll try to summarize who I am and what drive me.</p>

                    </div>
                </div>
                </div>
               

                <div className='container-about-hobbies'>
                    <div className='p-about-second-presentation-div'>
                          <p className='paragraph-second-presentation-about'>Passionate about new technologies, for me my work is a passion. I love discovering new things and not restricting myself to a single sector of activity. (To rework)</p>
                    </div>
                  


                    <div className='div-hobbies'>

                        <img alt='Raphaël Bodart' className='hobbies-img' src={vision} />

                        <div className='h1-paraph-hobbies'>
                        <h1>Vision</h1>
                        <p>I love when I need to go through a product, deploy a UX strategy and developpe it by iteration. (To rework)</p>
                        </div>
                                        
                    </div>

                    <div className='div-hobbies'>

                    <img alt='Company' className='hobbies-img' src={career} />

                    <div className='h1-paraph-hobbies'>
                    <h1>Career</h1>
                    <p>I have a master's degree of Art Direction and UX Design. Mostly worked in startup company. (to rework)</p> 
                    </div>
                    </div>

                    <div className='div-hobbies'>

                    <img alt='Raphaël Bodart climbing' className='hobbies-img' src={climbing} />
                    <div className='h1-paraph-hobbies'>
                        <h1>Hobbies</h1>
                       <ul className='hobbies-ul'>
                           <li className='hobbies-list'>Climbing (bouldering) 🧗</li>
                           <li className='hobbies-list'>Video Games (Dofus, WOW, CSS, etc.) 👾</li>
                           <li className='hobbies-list'>Music (Rock, Metal, Electro Swing) 🤘</li>
                           <li className='hobbies-list'>Travels (Tahiti, USA, Guyanna, etc.) 🌎</li>
                       </ul>
                    </div>
                    </div>
                </div>

            <Footer  />

            </div>
        )
    }
}