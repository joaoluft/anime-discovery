import { useEffect, useState } from "react";
import { useApi } from "../useApi";
import { Character } from "./../../types/Character";
import { Character as CharacterComponent } from "../../components/Character";
import { v4 as uuidv4 } from "uuid";

export const useCharacterList = (id: number) => {
  const { getCharacters } = useApi();

  const [loaded, setLoaded] = useState<boolean>(false);
  const [characterList, setCharacterList] = useState<[]>([]);
  const [viewMore, setViewMore] = useState<boolean>(false);

  useEffect(() => {
    getCharacters(id)
      .then((res) => {
        setCharacterList(res.data.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const renderCharacterList = () => {
    return characterList
      .slice(0, viewMore ? characterList.length : 8)
      .map((character: Character) => (
        <CharacterComponent
          id={uuidv4()}
          image={character?.character?.images?.webp?.image_url}
          name={character?.character?.name}
        />
      ));
  };

  return { renderCharacterList, loaded, viewMore, setViewMore };
};
