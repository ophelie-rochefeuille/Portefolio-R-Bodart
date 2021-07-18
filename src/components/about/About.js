import React , {Component} from 'react'; 
import Footer from '../footer/Footer';
import './about.scss';
import bodartpng from "../../pictures/bodart.png";
import vision from "../../pictures/montains.png";
import climbing from "../../pictures/climbing.png";
import career from "../../pictures/career.png";



export default class PortefolioList extends Component {

    render() {
    return (

    <div className='main-container-about'>

        <div className='background-div-about'>
            <div className='container-about-hi'>
                 <img className='bodartpng' alt='Raphaël Bodart' src={bodartpng}  />
             <div className='div-presentation-about'>
                 <h1 className='name-h1-about'>Salut, moi c'est Raphaël 👋</h1>
                 <p className='presentation-about'>Si vous êtes ici, c'est évident que vous voulez en savoir un peu plus sur moi ! Je vais essayer de résumer qui je suis et ce qui me motive.</p>
             </div>
            </div>
        </div>


        <div className='container-about-hobbies'>

            <div className='p-about-second-presentation-div'>
                <p className='paragraph-second-presentation-about'>Passionné des nouvelles technologies, pour moi mon travail est une passion. J’adore découvrir de nouvelles choses et ne pas me restreindre à un seul secteur d’activité.</p>
            </div>



            <div className='div-hobbies'>
                <img alt='Raphaël Bodart' className='hobbies-img' src={vision} />

                <div className='h1-paraph-hobbies'>
                     <h1>Vision</h1>
                     <p>J'aime quand j'ai besoin de parcourir un produit, de déployer une stratégie UX et de le développer par itération. Pour moi un produit est un projet que l’on façonne avec le temps.</p>
                </div>
            
            </div>

            <div className='div-hobbies'>
                <img alt='Company' className='hobbies-img' src={career} />

                <div className='h1-paraph-hobbies'>
                    <h1>Parcours</h1>
                    <p>J'ai un master en direction artistique et design UX. J’ai principalement travaillé dans des start-ups early/middle stage où j’ai pu créer et améliorer des produits.</p> 
                </div>
            </div>


            <div className='div-hobbies'>
                <img alt='Raphaël Bodart climbing' className='hobbies-img' src={climbing} />

                <div className='h1-paraph-hobbies'>
                    <h1>Hobbies</h1>
                    <ul className='hobbies-ul'>
                        <li className='hobbies-list'>Escalade (en bloc) 🧗</li>
                        <li className='hobbies-list'>Jeux Vidéos (Dofus, WOW, CSS, etc.) 👾</li>
                        <li className='hobbies-list'>Musique (Rock, Metal, Electro Swing) 🤘</li>
                        <li className='hobbies-list'>Voyages (Tahiti, USA, Guyanna, etc.) 🌎</li>
                    </ul>
                </div>
            </div>
        </div>

    <Footer  />
    </div>
    )
    }
    }