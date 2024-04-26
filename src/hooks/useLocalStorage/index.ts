export const useLocalStorage = () => {
  const setLocalStorage = (key: string, value: string) => {
      localStorage.setItem(key, JSON.stringify(value));
  }

  const getLocalStorage = (key: string) => {
    try{
        const storedItem = localStorage.getItem(key);
        return storedItem ? JSON.parse(storedItem) : null;
    } catch(err) {
        return err;
    }
  }

  return {setLocalStorage, getLocalStorage};
};
