import { createContext, useContext, useState, type ReactNode} from "react";
import type { CategoryData } from "../interfaces/category-data";

interface CategoryContextData {
  categoryList: CategoryData[];
  setCategoryList: React.Dispatch<React.SetStateAction<CategoryData[]>>;
}

const CategoryContext = createContext<CategoryContextData | undefined>(undefined);

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [categoryList, setCategoryList] = useState<CategoryData[]>([]);

  return (
    <CategoryContext.Provider value={{ categoryList, setCategoryList }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategoryContext() {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategoryContext must be used within a CategoryProvider");
  }
  return context;
}
