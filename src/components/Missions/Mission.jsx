import React from 'react'
import Checkbox from './Checkbox'

function Mission(props) {
    return (
        <div className="Mission-container">
            <Checkbox check={props.check}/>
            <span className={`Mission-text text-${props.check}`}>{props.text}</span>
        </div>
    )
}

export default Mission