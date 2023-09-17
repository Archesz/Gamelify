import React from 'react'

function Item(props) {
    return (
        <div className="item-container">
            
            <div className="item-img">
                <img src="" className="img" alt=""/>
            </div> 

            <span className="item-name">{props.name}</span>

        </div>
    )
}

export default Item