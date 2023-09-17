import React from 'react'
import './Keywords.scss';

function Keywords(props) {
    return (
        <div className="keywords-container">
            <span className="keywords-name">Personalidade & Keywords</span>

            <div className="keywords-field">

                {props.words.map((word) => {
                    return(
                        <div className={`keywords-badge ${props.color}`}>
                            <span>{word}</span>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Keywords