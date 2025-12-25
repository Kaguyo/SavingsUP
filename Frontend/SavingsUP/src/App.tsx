import Header from './components/Header';
import Footer from './components/Footer';

import { useGetTransactionsData } from './hooks/transactions/useGetTransactionsData';
import { useGetCategoriesData } from './hooks/categories/useGetCategoriesData';
import { useGetPeopleData } from './hooks/people/useGetPeopleData';
import { PeopleProvider } from "./contexts/PeopleContext";
import { CategoryProvider } from "./contexts/CategoryContext";

import './App.css';
import MainMenu from './components/MainMenu';

export const API_URL = 'https://localhost:7071';

function App() {

  const {
    data: transactionData,
    isError: txError
  } = useGetTransactionsData();

  const {
    data: personData,
    isLoading: isPersonLoading,
    isError: personError
  } = useGetPeopleData();

  const {
    data: categoryData,
    isError: categoryError
  } = useGetCategoriesData();

  const isLoading = isPersonLoading
  const isError = personError

  if (isLoading) return <p>Carregando dados...</p>;
  if (isError) return <p>Erro ao carregar dados!</p>;

  return (
    <>
      <Header />
      <div className="box">
        <div className="main-content">
          <PeopleProvider>
          <CategoryProvider>
            <MainMenu 
              transactionData={transactionData}
              personData={personData}
              categoryData={categoryData}
              isError={isError}
              isLoading={isLoading}
            />
            </CategoryProvider>
          </PeopleProvider>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
