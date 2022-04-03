import React, { FC } from "react";
import { ICharacters } from "../type/type";
import CharacterItem from "./CharacterItem";
import './CharactersList.css'

interface CharactersListProps {
  characters: ICharacters[];
  
}

const CharactersList: FC<CharactersListProps> = ({ characters }) => {
  return (
    <div className="charactersList">
      {characters.map((character) => (
        <CharacterItem  key={character.id} character={character}/>
      ))}
    </div>
  );
};

export default CharactersList;
