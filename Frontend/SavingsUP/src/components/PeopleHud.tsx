import type { PersonData } from '../interfaces/person-data';
import './PeopleHud.css'

interface PeopleHudProps {
    personData: PersonData,
    isError: boolean,
    isLoading: boolean
}
export default function PeopleHud(props: PeopleHudProps){

    return(
        <div className="pessoas-hud">
            <div className="pessoas-hud-wrapper">

                <div className="pessoas-form-box">
                    <div id="actions-add">
                        <input id="text-name" className="actions-add-input" type="text" placeholder="Nome" />
                        <input id="text-age" className="actions-add-input" type="text" placeholder="Idade" />
                        <select className="actions-add-input" id="pessoas-actions-transaction-select" >
                            <option value="" label="Transações..."/>

                        </select>                        
                    </div>

                </div>

                <div className="pessoas-submission-box">
                    <button id="add-person-btn">Adicionar</button>
                    <button id="list-people-btn">Listar</button>
                </div>
                
            </div>
            <div className="content">

            </div>
        </div>
    );
}