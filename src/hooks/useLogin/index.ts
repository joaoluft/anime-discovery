import { useEffect, useState } from "react";
import { useLocalStorage } from "../useLocalStorage";
import { useNavigate } from "react-router-dom";
export const useLogin = () => {
  const { setLocalStorage } = useLocalStorage();
  const [background, setBackground] = useState<string>("");
  const [name, setName] = useState<string>("");
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
    setBackground(`/Backgrounds/${Math.floor(Math.random() * 5) + 1}.webp`);
  }, []);

  return {
    background,
    name,
    setName,
    loginFormHandler
  };
};
