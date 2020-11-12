import React from 'react'
import './Portfolio.css'
import { SideNav } from '../SideNav/SideNav';
import { SectionC } from '../SectionContainer/SectionC';
 const Portfolio=({handleSelectionClick,about,skills,projects,experience,selectedHeading,selectedQuote,selectedSection})=> {
    return (
        <div className='portfolio-container'>
        <div className='sidenav-container'>
        <SideNav
            handleSelectionClick={handleSelectionClick} 
        />
         </div>
        <div className='main-section-container'>
            <SectionC 
                about={about}
                skills={skills}
                projects={projects}
                experience={experience}
                selectedHeading={selectedHeading}
                selectedSection={selectedSection} 
                selectedQuote={selectedQuote}
            />
        </div>
        </div>
    )
}

export default Portfolio;
