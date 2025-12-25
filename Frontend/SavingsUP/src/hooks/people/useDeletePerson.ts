import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../../App";

const deletePerson = async (personId: string): Promise<void> => {
  await axios.delete(`${API_URL}/pessoas/${personId}`);
}

export default function useDeletePerson() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deletePerson,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['person-data'] });
    }
  });

  return {
    ...mutation,
    deletePerson: mutation.mutateAsync
  };
}
