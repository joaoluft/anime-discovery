import { useEffect, useState } from "react";

export const useLogin = () => {
  const [background, setBackground] = useState(null);

  useEffect(() => {
    import(
      `./../../assets/Backgrounds/${Math.floor(Math.random() * 5) + 1}.webp`
    ).then((module) => {
      setBackground(module.default);
    });
  }, []);

  return {
    background,
  };
};
