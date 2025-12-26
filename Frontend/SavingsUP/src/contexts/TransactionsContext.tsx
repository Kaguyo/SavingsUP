import { createContext, useContext, useState, type ReactNode} from "react";
import type { TransactionData } from "../interfaces/transaction-data";

interface TransactionsContextData {
  transactionList: TransactionData[];
  setTransactionList: React.Dispatch<React.SetStateAction<TransactionData[]>>;
}

const TransactionsContext = createContext<TransactionsContextData | undefined>(undefined);

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [transactionList, setTransactionList] = useState<TransactionData[]>([]);

  return (
    <TransactionsContext.Provider value={{ transactionList, setTransactionList }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactionsContext() {
  const context = useContext(TransactionsContext);
  if (!context) {
    throw new Error("useTransactionsContext must be used within a TransactionsProvider");
  }
  return context;
}
