import React from 'react';
import {experience} from '../../Constant/Experiences';
import './Experience.css'
export const Experience=(props)=>{
    return(
        <div className='experience-container'>
           {experience.bio}
        </div>
    )
}