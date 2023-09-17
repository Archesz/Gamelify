import React from 'react'
import './Skills.scss';

function Skills(props) {
    return (
        <div className="skills-container">
            
            <span className="skills-name">Habilidades & Conhecimentos</span>    

            <div className="skills-field">
                {props.skills.map((skill) => {
                    return(
                        <div className='skill'> 
                            <span className="skill-name">{skill}</span>
                            <span className="skill-level">0</span> 
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Skills