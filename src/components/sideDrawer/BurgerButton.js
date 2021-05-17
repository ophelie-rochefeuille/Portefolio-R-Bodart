import React from 'react';
import './BurgerButton.scss';

const burgerButton = props => (
   <button className='burger-button' onClick={props.click}> 
       <div className='burger-button-line' />
       <div className='burger-button-line' />
       <div className='burger-button-line' />
   </button> 
);

export default burgerButton;