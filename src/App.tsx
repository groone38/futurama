import React from "react";
import CharactersList from "./components/CharactersList";
import { ICharacters } from "./type/type";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Character from "./components/Character";

function App() {
  const [characters, setCharacters] = useState<ICharacters[]>([]);
  const [kek, setKek] = useState<ICharacters[]>([]);
  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacters() {
    try {
      const responce = await axios.get<ICharacters[]>(
        "https://api.sampleapis.com/futurama/characters"
      );
      setCharacters(responce.data);
    } catch (e) {
      alert(e);
    }
  }
  const handlerCharChange = (char: ICharacters[]) => {
    setKek(char);
  };
  let char = kek.length !== 0 ? kek : characters;
  return (
    <BrowserRouter>
      <div className="App">
        <Header characters={characters} handlerCharChange={handlerCharChange} />
        <Routes>
          <Route
            path="/character"
            element={<CharactersList characters={char} />}
          />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
