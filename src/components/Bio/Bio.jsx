import React from 'react'
import './Bio.scss';

function Bio(props){
    return (
        <div className={`bio-container`}>
            <div className={`bio-header ${props.color}`}></div>
            
            <span className="bio-name">{props.name}</span>

            <div className={`bio-photo`} style={{"backgroundImage": `url(${props.photo})`}}/>

            <div className={`bio-badge ${props.color}`}>{props.type}</div>
            
            <div className={`bio-infos`}>

                <div className="bio-col">
                    <span className="bio-label">Nível:</span>
                    <span className="bio-result">0</span>
                </div>

                <div className="bio-col">
                    <span className="bio-label">Divisão:</span>
                    <span className="bio-result">Nome</span>
                </div>

            </div>

            <span className="bio-category">{props.category}</span>

        </div>
    )
}

export default Bio