import { useEffect, useState } from "react";
import { useLocalStorage } from "../useLocalStorage";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/User";

export const useHomepage = () => {
  const { getLocalStorage } = useLocalStorage();
  const [user] = useState<User>(getLocalStorage("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (user.name) return;
    navigate("/login");
  }, [user]);

  const getUserAlias = (name: string) => {
    const username = name.split(" ");
    return username[0].charAt(0) + username[username.length - 1].charAt(0);
  };

  return {
    getUserAlias,
    user,
  };
};
