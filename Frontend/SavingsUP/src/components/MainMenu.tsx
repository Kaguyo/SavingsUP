import CategoriesHud from './CategoriesHud';
import PeopleHud from './PeopleHud';
import TransactionsHud from './TransactionsHud';

import './MainMenu.css';
import { useState, type JSX } from 'react';

import type { TransactionData } from '../interfaces/transaction-data';
import type { PersonData } from '../interfaces/person-data';
import type { CategoryData } from '../interfaces/category-data';

export type ActiveRow = 'pessoas' | 'categorias' | 'transacoes';

interface MainMenuProps {
  transactionData: TransactionData;
  personData: PersonData;
  categoryData: CategoryData;
  isError: boolean,
  isLoading: boolean
}

function MainMenu(props: MainMenuProps) {
  const components: Record<ActiveRow, () => JSX.Element> = {
    transacoes: () => <TransactionsHud isError={props.isError} isLoading={props.isLoading} transactionData={props.transactionData}/>,
    pessoas: () => <PeopleHud isError={props.isError} isLoading={props.isLoading} personData={props.personData}/>,
    categorias: () => <CategoriesHud isError={props.isError} isLoading={props.isLoading} categoryData={props.categoryData}/>,
  };

  const [activeRow, setActiveRow] = useState<ActiveRow>('pessoas');

  function handleActiveRow(row: ActiveRow) {
    setActiveRow(row);
  }

  return (
    <div className="main-menu">
      <ul id="menu-list" className="no-dots">
        <li
          className="menu-item"
          onClick={() => handleActiveRow('pessoas')}
        >
          Pessoas
        </li>
        <li
          className="menu-item"
          onClick={() => handleActiveRow('categorias')}
        >
          Categorias
        </li>
        <li
          className="menu-item"
          onClick={() => handleActiveRow('transacoes')}
        >
          Transações
        </li>
      </ul>

      <div className="menu-display">
        {components[activeRow]()}
      </div>
    </div>
  );
}

export default MainMenu;
