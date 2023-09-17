import React from 'react'
import ClassHeader from '../components/ClassHeader/ClassHeader';
import Bio from '../components/Bio/Bio';
import Keywords from '../components/Keywords/Keywords';
import Resume from '../components/Resume/Resume';
import Skills from '../components/Skills/Skills';
import Inventory from '../components/Inventory/Inventory';
import Missions from '../components/Missions/Missions';

import '../styles/classe.scss';

function Classe(props) {
    return (
        <div className="classe-container">
            
            <div className="classe-header">

                <ClassHeader name="Atleta" category="Físico" color="red"/>

            </div>
            
            <div className='classe-row'>

                <div className="left">

                    <Bio color="red" name="Atleta" type="Classe" category="Físico" photo={"https://i0.wp.com/www.thebarbell.com/wp-content/uploads/2023/02/michael-b-jordan-workout-1.jpg?fit=1009%2C782&ssl=1"}/>
                    <Keywords color="red" words={["Disciplina", "Saudável", "Exercícios", "Musculação", "Energia", "Força", "Fitness", "Corpo", "Saúde", "Treinamento", "Nutrição", "Atividade"]}/>

                </div>

                <div className="right">
                    <Resume />
                    <Skills skills={["Disciplina", "Disciplina", "Disciplina", "Disciplina", "Disciplina", "Disciplina", "Disciplina", "Disciplina", "Disciplina", "Disciplina"]}/>
                    
                    <div className="row">
                        <Inventory items={["Garrafa d'Água", "Bracedeira", "Headphone", "Camisa Dry-Fit", "Calça", "Tênis Reto"]}/>
                        <Missions />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Classe