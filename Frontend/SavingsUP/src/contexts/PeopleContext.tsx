import { createContext, useContext, useState, type ReactNode} from "react";
import type { PersonData } from "../interfaces/person-data";

interface PeopleContextData {
  personList: PersonData[];
  setPersonList: React.Dispatch<React.SetStateAction<PersonData[]>>;
}

const PeopleContext = createContext<PeopleContextData | undefined>(undefined);

export function PeopleProvider({ children }: { children: ReactNode }) {
  const [personList, setPersonList] = useState<PersonData[]>([]);

  return (
    <PeopleContext.Provider value={{ personList, setPersonList }}>
      {children}
    </PeopleContext.Provider>
  );
}

export function usePeopleContext() {
  const context = useContext(PeopleContext);
  if (!context) {
    throw new Error("usePeopleContext must be used within a PeopleProvider");
  }
  return context;
}
