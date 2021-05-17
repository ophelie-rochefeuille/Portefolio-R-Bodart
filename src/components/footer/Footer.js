import React  from 'react';
import {ReactComponent as Made} from './path.svg';
import {ReactComponent as Dribbble} from './dribble.svg';
import {ReactComponent as Linkedin} from './linkedin.svg';
import './footer.scss';


export default class HomePage extends React.Component {

    render() {
        return (
            <footer>
                <div className='footer-base'>
                <div className='made-with'>
                    <span className='p-made'>Made with {<Made />} by Raphaël & Ophélie</span>
                </div>

                <div className='social-network'>
                <a href='https://dribbble.com/RaphaelBodart'><Dribbble className='social-network-logo' /></a>
                <a href='https://fr.linkedin.com/in/raphael-bodart'><Linkedin className='social-network-logo'  /></a>
                </div>
                </div>
                
            </footer>
        )
    }
}