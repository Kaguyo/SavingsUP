import { useState } from 'react';
import './TransactionsHud.css';
import type { TransactionData } from '../interfaces/transaction-data'

interface TransactionHudProps {
  transactionData: TransactionData
  isLoading: boolean,
  isError: boolean
}
export default function TransactionsHud(props: TransactionHudProps) {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [listedTransactions setListedTransactions] = useState([])

  function handleDescriptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length > 200){
        // Aqui poderia inserir mensagem de operação inválida etc...
        setDescription(d => d = e.target.value.slice(0, 200));
        return;
    }

    setDescription(d => d = e.target.value);
  }
  function handleCurrencyChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value;

    const onlyNumbers = raw.replace(/\D/g, "");

    // Se não houver nada, limpa
    if (onlyNumbers.length === 0) {
        setValue("");
        return;
    }

    // Caso haja até 2 dígitos, tratar como centavos
    if (onlyNumbers.length <= 2) {
        const cents = onlyNumbers.padStart(2, "0");
        setValue(`0,${cents}`);
        return;
    }

    // Separar parte inteira e centavos
    const cents = onlyNumbers.slice(-2);
    let integerPart = onlyNumbers.slice(0, -2);

    // Remove zeros iniciais da parte inteira, se houver
    while (integerPart.length > 1 && integerPart[0] === "0") {
        integerPart = integerPart.slice(1);
    }

    if (integerPart.length > 3) {
        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    let finalValue = `${integerPart},${cents}`;

    setValue(finalValue);

  }

  

  if (props.isLoading) return <p>Carregando...</p>;

  if (props.isError) return <p>Erro ao carregar.</p>;

  return (
    <div className="transacoes-hud">
      <div className="transacoes-hud-wrapper">

        <div className="transacoes-form-box">
          <div id="actions-add">

            <select className="actions-add-input" id="actions-type-select">
              <option value="" label="Tipo..."/>
              <option value="receita">Receita</option>
              <option value="despesa">Despesa</option>
            </select>

            <select className="actions-add-input" id="actions-person-select">
              <option value="" label="Pessoa..."/>
            </select>

            <input
              id="text-description"
              className="actions-add-input"
              type="text"
              placeholder="Descrição"
              value={description}
              onChange={handleDescriptionChange}
            />

            <input
              id="text-value"
              className="actions-add-input"
              type="text"
              placeholder="Valor"
              value={value}
              onChange={handleCurrencyChange}
            />

          </div>

          <div id="actions-list">
            <select className="actions-list-input">
              <option value="" label="Filtrar por..."></option>
            </select>
            <select className="actions-list-input">
              <option value="" label="abcd..."></option>
            </select>
          </div>

        </div>

        <div className="transacoes-submission-box">
          <button id="add-person-btn">Adicionar</button>
          <button id="list-people-btn" onClick={() => {}}>Listar</button>
        </div>

      </div>
      <div className="content">
        {
          listedTransactions.map((lt: TransactionData) => 
          <div className="transaction-item">
            <ul className="transaction-properties">
              <li><div>{lt.type}</div></li>
              <li><div>{lt.categoryId}</div></li>
              <li><div>{lt.description}</div></li>
              <li><div>{lt.value}</div></li>
            </ul>
          </div>)
        }
      </div>
    </div>
  );
}
