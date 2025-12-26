import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import type { TransactionCreateRequest, TransactionData } from "../../interfaces/transaction-data";
import { API_URL } from "../../App";

const postTransaction = async (createTransaction: TransactionCreateRequest): Promise<TransactionData> => {
  const response = await axios.post<TransactionData>(`${API_URL}/transacoes`, createTransaction);
  return response.data;
}

export default function useCreateTransaction() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postTransaction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transaction-data'] });
    }
  });

  return {
    ...mutation,
    createTransaction: mutation.mutateAsync
  };
}
