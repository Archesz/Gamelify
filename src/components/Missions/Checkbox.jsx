import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'

function Checkbox(props){
    if(props.check === "check"){
        return (
            <div className="checkbox-container check">
                <AiOutlineCheck />
            </div>
        )
    } else{
        return (
            <div className="checkbox-container no-check">
                
            </div>
        )
    }
}

export default Checkbox