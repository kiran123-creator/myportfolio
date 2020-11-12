import React from 'react';
import './SectionC.css';
import { About } from '../About/About';
import { Skills } from '../Skills/Skills';
import { Projects } from '../Projects/Projects';
import { experience } from '../../Constant/Experiences';
import { Experience } from '../Experience/Experience';

export const SectionC=({about,skills,selectedHeading,selectedQuote,selectedSection})=>{
  return(
      <div className='section-container'>
          <div className='section-handling-container'>
              <h1 className='main-heading'>{selectedHeading}</h1>
              <p className='main-quote'>{selectedQuote}</p>
          </div>
          <div className='section-component'>
                 {
                     { 
                         about:<About/>,
                         skills:<Skills/>,
                         projects:<Projects/>,
                         experience:<Experience/>

                     }[selectedSection]
                 }
          </div>
      </div>
  )
}