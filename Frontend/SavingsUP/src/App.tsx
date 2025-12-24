import MainMenu from './components/MainMenu';
import Header from './components/Header';
import Footer from './components/Footer';

import { useTransactionData } from './hooks/useTransactionData';
import { useCategoryData } from './hooks/useCategoryData';
import { usePersonData } from './hooks/usePersonData';

import './App.css';

export const API_URL = 'http://localhost:7071';

function App() {

  const {
    data: transactionData,
    isLoading: isTxLoading,
    isError: txError
  } = useTransactionData();

  const {
    data: personData,
    isLoading: isPersonLoading,
    isError: personError
  } = usePersonData();

  const {
    data: categoryData,
    isLoading: isCategoryLoading,
    isError: categoryError
  } = useCategoryData();

  const isLoading = isTxLoading || isPersonLoading || isCategoryLoading;
  const isError = txError || personError || categoryError;

  if (isLoading) return <p>Carregando dados...</p>;
  if (isError) return <p>Erro ao carregar dados!</p>;

  return (
    <>
      <Header />
      <div className="box">
        <div className="main-content">
          <MainMenu 
            transactionData={transactionData!}
            personData={personData!}
            categoryData={categoryData!}
            isError={isError}
            isLoading={isLoading}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
