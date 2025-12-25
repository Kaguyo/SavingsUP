import { useQuery } from "@tanstack/react-query";
import { API_URL } from '../../App'
import axios, { type AxiosPromise } from "axios";
import type { CategoryData } from "../../interfaces/category-data";

const fetchData = async (): AxiosPromise<CategoryData[]> => {
  const response = await axios.get<CategoryData[]>(API_URL+'/categorias')
  console.log("RECEIVED CATEGORIES:", response)
  return response;
}

export function useGetCategoriesData(){
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['category-data']
  });

  return {
    ...query,
    data: query.data?.data
  };
}