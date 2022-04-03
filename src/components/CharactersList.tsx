import React, { FC } from "react";
import { ICharacters } from "../type/type";
import CharacterItem from "./CharacterItem";
import './CharactersList.css'
import Loader from "./loader/Loader";

interface CharactersListProps {
  characters: ICharacters[];
  loader: boolean
}

const CharactersList: FC<CharactersListProps> = ({ characters, loader }) => {
  return (
    loader ? <Loader /> : 
    <div className="charactersList">
      {characters.map((character) => (
        <CharacterItem  key={character.id} character={character}/>
      ))}
    </div>
  );
};

export default CharactersList;
