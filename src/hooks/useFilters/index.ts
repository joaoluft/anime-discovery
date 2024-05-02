import { useContext } from "react";
import { useParameters } from "../useParameters"
import { FilterContext } from "../../contexts/FilterContext";
import { Filters } from "../../types/Filters";

export const useFilters = () => {
  const { setParam, removeParam } = useParameters();

  const { setFilters } = useContext(FilterContext);

  const setFilterHandler = (filter: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (value) {  
      setParam(filter, value);
    } else {
      removeParam(filter);
    }

    setFilters((prevFilters: Filters) => ({ ...prevFilters, [filter]: value }));
  };

  return { setFilterHandler }
}