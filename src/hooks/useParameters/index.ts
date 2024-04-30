import { useLocation, useNavigate } from 'react-router-dom';

export const useParameters = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const removeParam = (key: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete(key);
    const newSearchParams = searchParams.toString();
    navigate(`${location.pathname}?${newSearchParams}`);
  };

  const setParam = (key: string, value: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(key, value);
    const newSearchParams = searchParams.toString();
    navigate(`${location.pathname}?${newSearchParams}`);
  };

  const getParam = (key: string) => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(key);
  };

  return { removeParam, setParam, getParam };
};