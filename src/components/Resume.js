import React , {Component} from 'react'; 
import { Link } from 'react-router-dom';
import cv from "../bodart.pdf";





export default class Resume extends Component {

    render() {
        console.log(cv)
        return (
            <div className='main-container-resume'>
            <a href={cv}>hey </a>
             
            </div>
        )
    }
}