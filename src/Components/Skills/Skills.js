import React from 'react';
import './Skill.css';
import {skills} from '../../Constant/Skills';
import {SkillCard} from '../../SkillCard/SkillCard';

export const Skills=({props})=>{
    return(
        <div className='skills-container'>
            {/* <h1>industry knowledge</h1>
            <div className='industry-skill-container'>
                {
                    skills.industryKnowledge.map(skill=><SkillCard  skill={skill}/>  )
                }
            </div> */}
            <h1>TechSkills</h1>
            <div className='industry-skill-container'>
                {
                    skills.techSkills.map(skill=><SkillCard skill={skill}/>  )
                }
            </div>
            <h1>InterpersonalSkills</h1>
            <div className='industry-skill-container'>
                {
                    skills.interpersonalSkills.map(skill=><SkillCard  skill={skill}/>  )
                }
            </div>
        </div>
    )
}