import React from 'react'
import './Inventory.scss';
import Item from './Item';

function Inventory(props) {
    return (
        <div className="inventory-container">

            <span className="inventory-name">Inventário</span>

            <div className="inventory-field">

                {props.items.map((item) => {
                    return(
                        <Item name={item}/>
                    )
                })}

            </div>

        </div>
    )
}

export default Inventory