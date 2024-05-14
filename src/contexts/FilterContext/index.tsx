import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";
import { IFilters } from "../../interfaces/IFilters";

type FilterContextProps = {
  children: ReactNode;
};

type FilterContextTypes = {
  filters: IFilters;
  setFilters: Dispatch<SetStateAction<IFilters>>;
};

const defaultFilters: IFilters = {
  type: "",
  order: "",
  rating: "",
};

export const FilterContext = createContext<FilterContextTypes>({
  filters: defaultFilters,
  setFilters: () => defaultFilters,
});

export const FilterContextProvider = ({ children }: FilterContextProps) => {
  const [filters, setFilters] = useState<IFilters>(defaultFilters);

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};