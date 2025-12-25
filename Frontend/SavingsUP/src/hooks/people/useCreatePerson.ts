import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import type { PersonCreateRequest, PersonData } from "../../interfaces/person-data";
import { API_URL } from "../../App";

const postPerson = async (createPerson: PersonCreateRequest): Promise<PersonData> => {
  const response = await axios.post<PersonData>(`${API_URL}/pessoas`, createPerson);
  return response.data;
}

export default function useCreatePerson() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postPerson,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['person-data'] });
    }
  });

  return {
    ...mutation,
    createPerson: mutation.mutateAsync
  };
}
