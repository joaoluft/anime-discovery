import { useHomepage } from "../../hooks/useHomepage";
import { Header } from "../../components/Header";

export const Homepage = () => {
  const { getUserAlias, user } = useHomepage();

  return (
    <>
      <Header name={getUserAlias(user?.name || "")} />
    </>
  );
};
