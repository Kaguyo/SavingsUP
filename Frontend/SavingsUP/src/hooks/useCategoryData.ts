import { useQuery } from "@tanstack/react-query";
import { API_URL } from '../App'
import axios, { type AxiosPromise } from "axios";
import type { CategoryData } from "../interfaces/category-data";

const fetchData = async (): AxiosPromise<CategoryData> => {
  const response = await axios.get<CategoryData>(API_URL+'/categorias')
  return response;
}

export function useCategoryData(){
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['category-data']
  });

  return {
    ...query,
    data: query.data?.data
  };
}