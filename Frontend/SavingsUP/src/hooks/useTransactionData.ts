import { useQuery } from "@tanstack/react-query";
import { API_URL } from '../App'
import axios, { type AxiosPromise } from "axios";
import type { TransactionData } from "../interfaces/transaction-data";

const fetchData = async (): AxiosPromise<TransactionData> => {
  const response = await axios.get<TransactionData>(API_URL+'/transacoes')
  return response;
}

export function useTransactionData(){
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['transaction-data']
  });

  return {
    ...query,
    data: query.data?.data
  };
}