import { createContext, useContext, useState, type ReactNode} from "react";
import type { CategoryData } from "../interfaces/category-data";

interface CategoriesContextData {
  categoryList: CategoryData[];
  setCategoryList: React.Dispatch<React.SetStateAction<CategoryData[]>>;
}

const CategoriesContext = createContext<CategoriesContextData | undefined>(undefined);

export function CategoriesProvider({ children }: { children: ReactNode }) {
  const [categoryList, setCategoryList] = useState<CategoryData[]>([]);

  return (
    <CategoriesContext.Provider value={{ categoryList, setCategoryList }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategoriesContext() {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error("useCategoriesContext must be used within a CategoriesProvider");
  }
  return context;
}
