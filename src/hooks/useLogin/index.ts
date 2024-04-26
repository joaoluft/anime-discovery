import { useEffect, useState } from "react";
import { useLocalStorage } from "../useLocalStorage";
import { useNavigate } from "react-router-dom";
export const useLogin = () => {
  const { setLocalStorage } = useLocalStorage();
  const [background, setBackground] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const loginFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLocalStorage('user', {
      name,
      favs: []
    });

    navigate("/");
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
