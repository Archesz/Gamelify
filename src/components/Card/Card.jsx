import React from 'react'
import './Card.scss'

function Card(props) {
    return (
        <div className='card-container'>

            <div className='card-image' style={{"backgroundImage": `url(${props.photo})`}}>

                <div className='card-row'>

                    <div className='card-infos'>
                        <span className='card-name'>{props.name}</span>
                        <span className='card-level'>Nível: {props.level}</span>
                    </div>

                    <span className='card-category'>{props.category}</span>

                </div>

            </div>

        </div>
    )
}

export default Card