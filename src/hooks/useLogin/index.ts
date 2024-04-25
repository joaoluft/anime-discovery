import { useEffect, useState } from "react";
import { useLocalStorage } from "../useLocalStorage";
export const useLogin = () => {
  const {setLocalStorage} = useLocalStorage();
  const [background, setBackground] = useState('');
  const [name, setName] = useState('');

  const loginFormHandler = (event: any) => {
    event.preventDefault();
    setLocalStorage('user', name);
  };

  useEffect(() => {
    import(
      `./../../assets/Backgrounds/${Math.floor(Math.random() * 5) + 1}.webp`
    ).then((module) => {
      setBackground(module.default);
    });
  }, []);

  return {
    background,
    name, 
    setName,
    loginFormHandler
  };
};
