import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";
import { Filters } from "../../types/Filters";

type FilterContextProps = {
  children: ReactNode;
};

type FilterContextTypes = {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
};

const defaultFilters: Filters = {
  type: "",
  order: "",
  rating: "",
};

export const FilterContext = createContext<FilterContextTypes>({
  filters: defaultFilters,
  setFilters: () => defaultFilters,
});

export const FilterContextProvider = ({ children }: FilterContextProps) => {
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};