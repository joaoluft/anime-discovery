export const useLocalStorage = () => {
  const setLocalStorage = (key: string, value: object) => {
    localStorage.setItem(key, JSON.stringify(value));
  }

  const getLocalStorage = (key: string) => {
    try {
      const storedItem = localStorage.getItem(key);
      return storedItem ? JSON.parse(storedItem) : {
        name: '',
      };
    } catch (err) {
      return err;
    }
  }

  const deleteLocalStorage = (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      return err;
    }
  }

  return { setLocalStorage, getLocalStorage, deleteLocalStorage };
};