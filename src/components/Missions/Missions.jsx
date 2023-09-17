import React from 'react'
import Mission from './Mission'
import './Missions.scss';

function Missions(props) {
    return (
        <div className="missions-container">
            <span className="missions-name">Missões</span>

            <div className="missions-field">

                <Mission text="Esteja em uma academia Esteja em uma academia Esteja em uma academia Esteja em uma academia Esteja em uma academia ." check="check"/>
                <Mission text="Esteja em uma academia." check="false"/>

            </div>

        </div>
    )
}

export default Missions