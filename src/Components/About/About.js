import React from 'react';
import {about} from '../../Constant/About';
import './About.css';
export const About=(props)=>{
    return(
        <div className='about-container'>
           {about.bio}  
        </div> 
    )
}
