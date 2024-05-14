import { useContext } from "react";
import { useParameters } from "../useParameters"
import { FilterContext } from "../../contexts/FilterContext";
import { IFilters } from "../../interfaces/IFilters";

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

    setFilters((prevFilters: IFilters) => ({ ...prevFilters, [filter]: value }));
  };

  return { setFilterHandler }
}