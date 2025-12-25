import { useEffect } from 'react';
import type { CategoryData } from '../interfaces/category-data';
import './CategoriesHud.css'
import { useCategoryContext } from '../contexts/CategoryContext';

interface CategoriesHudProps {
    isError: boolean,
    isLoading: boolean,
    categoryData?: CategoryData[]
}
export default function CategoriesHud(props: CategoriesHudProps){

    const { categoryList, setCategoryList } = useCategoryContext();

    useEffect(() => {
        if (props.categoryData) {
            setCategoryList(props.categoryData);
        }
    }, [props.categoryData]);
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
                {categoryList?.map((category, index) => (
                    <div className="category-box">
                        <div className="category-row" key={category.id ?? index}>
                            <div id="category-attribute-name" className="category-attribute">Descrição: {category.description}</div>
                            <div id="category-attribute-age" className="category-attribute">Finalidade: {category.purpose}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}