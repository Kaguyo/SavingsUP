import './CategoriesHud.css'


export default function CategoriesHud(props){

    return(
        <div className="categorias-hud">
            <div className="categorias-hud-wrapper">

                <div className="categorias-form-box">
                    <div id="actions-add">
                        <input id="add-finalidade-select" className="actions-add-input" type="text" placeholder="Descrição" />
                        <select className="actions-add-input" id="categorias-actions-transaction-select">
                            <option value="" label="Finalidade..."></option>
                            <option value="receita">Receita</option>
                            <option value="despesa">Despesa</option>
                            <option value="despesa/receita">Despesa/Receita</option>
                        </select>
                        
                    </div>

                    <div id="actions-list">
                        <select className="actions-list-input" id="categorias-select">
                            <option value="" label="Finalidade..."/>
                            <option value="receita">Receita</option>
                            <option value="despesa">Despesa</option>
                            <option value="despesa/receita">Despesa/Receita</option>
                        </select>
                    </div>
                </div>

                <div className="categorias-submission-box">
                    <button id="add-person-btn">Adicionar</button>
                    <button id="list-people-btn">Listar</button>
                </div>
                
            </div>
            <div className="content">

            </div>
        </div>
    );
}