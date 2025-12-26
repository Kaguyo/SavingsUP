import Header from './components/Header';
import Footer from './components/Footer';

import { useGetTransactionsData } from './hooks/transactions/useGetTransactionsData';
import { useGetCategoriesData } from './hooks/categories/useGetCategoriesData';
import { useGetPeopleData } from './hooks/people/useGetPeopleData';
import { PeopleProvider } from "./contexts/PeopleContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";

import './App.css';
import MainMenu from './components/MainMenu';
import { TransactionsProvider } from './contexts/TransactionsContext';

export const API_URL = 'https://localhost:7071';

function App() {

  const {
    data: transactionData,
    error: personErrorObj
  } = useGetTransactionsData();

  const {
    data: personData,
    isLoading: isPersonLoading,
    isError: personError
  } = useGetPeopleData();

  const {
    data: categoryData,
  } = useGetCategoriesData();

  const isLoading = isPersonLoading
  const isError = personError

  if (isLoading) return <><Header /><div id="loading-modal"><div id="app-loading-box"><p>Carregando dados...</p></div></div><Footer /></>;
  
  if (isError) return   <><Header /><div id="loading-modal"><div id="app-error-box"><p>Erro ao carregar dados!</p>
  <p id="app-error-message">{personErrorObj?.message ?? "Erro desconhecido"}</p></div></div><Footer /></>;

  return (
    <>
      <Header />
      <div className="box">
        <div className="main-content">
          <PeopleProvider>
          <CategoriesProvider>
          <TransactionsProvider>
            <MainMenu 
              transactionData={transactionData}
              personData={personData}
              categoryData={categoryData}
              isError={isError}
              isLoading={isLoading}
            />
          </TransactionsProvider>
          </CategoriesProvider>
          </PeopleProvider>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
