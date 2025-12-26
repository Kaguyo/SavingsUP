import { useEffect, useState } from 'react';
import useCreatePerson from '../hooks/people/useCreatePerson';
import useDeletePerson from '../hooks/people/useDeletePerson';
import { useGetPeopleData } from '../hooks/people/useGetPeopleData';
import type { PersonData, PersonCreateRequest } from '../interfaces/person-data';
import './PeopleHud.css'
import { usePeopleContext } from '../contexts/PeopleContext';

interface PeopleHudProps {
    personData?: PersonData[],
    isError: boolean,
    isLoading: boolean
}

export default function PeopleHud(props: PeopleHudProps) {
    const { personList, setPersonList } = usePeopleContext();

    useEffect(() => {
        if (props.personData) {
        setPersonList(props.personData);
        }
    }, [props.personData]);

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const { createPerson, isSuccess, data: createdPerson } = useCreatePerson();
    const { deletePerson } = useDeletePerson();

    useEffect(() => {

        if (isSuccess && createdPerson) {
            setPersonList(p => [...p, createdPerson]);
        }
    }, [isSuccess, createdPerson]);

    const handleAddPerson = async () => {
        if (!name || !age) {
            alert("Preencha nome e idade");
            return;
        }

        const newPerson: PersonCreateRequest = {
            name,
            age: parseInt(age)
        };

        try {
            await createPerson(newPerson);
            setName(''); 
            setAge('');
        } catch (err) {
            console.error("Erro ao criar pessoa", err);
        }
    };

    return (
        <div className="pessoas-hud">
            <div className="pessoas-hud-wrapper">

                <div className="pessoas-form-box">
                    <div id="actions-add">
                        <input
                            id="text-name"
                            className="actions-add-input"
                            type="text"
                            placeholder="Nome"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            id="text-age"
                            className="actions-add-input"
                            type="text"
                            placeholder="Idade"
                            value={age}
                            onChange={e => setAge(e.target.value)}
                        />
                    </div>
                </div>

                <div className="pessoas-submission-box">
                    <button id="add-person-btn" onClick={handleAddPerson}>
                        Adicionar
                    </button>
                    <button id="list-people-btn" onClick={useGetPeopleData}>Listar</button>
                </div>

            </div>

            <div className="content">
                {personList.map((person, index) => (
                    <div className="person-box">
                        <div className="person-row" key={person.id ?? index}>
                            <div id="person-attribute-name" className="person-attribute">Nome: {person.name}</div>
                            <div id="person-attribute-age" className="person-attribute">Idade: {person.age}</div>
                            <div id="person-attribute-age" className="person-attribute">Saldo: R${person.transactionIdList || 0}</div>
                            <div id="delete-person-btn" onClick={() => deletePerson(person.id)}>X</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}