import React from 'react'
import "./ClassHeader.scss"
import { IoChevronBackOutline } from 'react-icons/io5'

function ClassHeader(props) {
    return (
        <div className='header-container'>
            
            <button className={`btn-back ${props.color}`}>
                <IoChevronBackOutline />
            </button>

            <div className='header-text'>
                <span className='class-name'>{props.name}</span>
                <span className='class-category'>{props.category}</span>
            </div>

        </div>
    )
}

export default ClassHeader