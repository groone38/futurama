import React, { useEffect, useState } from "react";
import { ICharacters } from "./../../type/type";
import CharacterItem from "./CharacterItem";
import "./CharactersList.css";
import Loader from "./../loader/Loader";
import NotFound from "../notFound/NotFound";
import axios from "axios";
import Search from "../UI/Search/Search";

const CharactersList = () => {
  const [characters, setCharacters] = useState<ICharacters[]>([]);
  const [value, setValue] = useState("");
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacters() {
    setLoader(true);
    try {
      const responce = await axios.get<ICharacters[]>(
        "https://api.sampleapis.com/futurama/characters"
      );
      setCharacters(responce.data);
    } catch (e) {
      alert(e);
    }
    setLoader(false);
  }

  let charSearch: ICharacters[] = characters.filter((i) =>
    i.name.first.toLowerCase().includes(value.toLowerCase())
  );
  const handlerCharChange = (char: string) => {
    setValue(char);
  };

  return (
    <>
      <Search handlerCharChange={handlerCharChange} />
      {loader && <Loader />}
      (characters.length !== 0 ? (
      <div className="charactersList">
        {charSearch.map((character) => (
          <CharacterItem key={character.id} character={character} />
        ))}
      </div>
      ) : <NotFound />)
    </>
  )
};

export default CharactersList;
