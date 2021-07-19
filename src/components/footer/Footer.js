import React  from 'react';
import {ReactComponent as Made} from "../../pictures/path.svg";
import {ReactComponent as Dribbble} from "../../pictures/dribble.svg";
import {ReactComponent as Linkedin} from "../../pictures/linkedin.svg";
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
                <a href='https://dribbble.com/RaphaelBodart' target="_blank"><Dribbble className='social-network-logo dribble-logo' /></a>
                <a href='https://fr.linkedin.com/in/raphael-bodart' target="_blank"><Linkedin className='social-network-logo linkedin-logo'/></a>
                </div>
                </div>
                
            </footer>
        )
    }
}