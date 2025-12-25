import { useQuery } from "@tanstack/react-query";
import { API_URL } from '../../App'
import axios, { type AxiosPromise } from "axios";
import type { PersonData } from "../../interfaces/person-data";

const fetchData = async (): AxiosPromise<PersonData[]> => {
  const response = await axios.get<PersonData[]>(API_URL+'/pessoas')
  console.log("RECEIVED PEOPLE:", response.data)
  return response;
}

export function useGetPeopleData(){
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['person-data']
  });

  return {
    ...query,
    data: query.data?.data
  };
}