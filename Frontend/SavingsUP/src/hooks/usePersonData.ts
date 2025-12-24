import { useQuery } from "@tanstack/react-query";
import { API_URL } from '../App'
import axios, { type AxiosPromise } from "axios";
import type { PersonData } from "../interfaces/person-data";

const fetchData = async (): AxiosPromise<PersonData> => {
  const response = await axios.get<PersonData>(API_URL+'/pessoas')
  return response;
}

export function usePersonData(){
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['transaction-data']
  });

  return {
    ...query,
    data: query.data?.data
  };
}