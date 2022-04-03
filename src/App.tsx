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
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacters() {
    setLoader(true)
    try {
      const responce = await axios.get<ICharacters[]>(
        "https://api.sampleapis.com/futurama/characters"
      );
      setCharacters(responce.data);
    } catch (e) {
      alert(e);
    }
    setLoader(false)
  }
  const handlerCharChange = (char: ICharacters[]) => {
    return setKek(char);
  };
  let char = kek.length !== 0 ? kek : characters;
  return (
    <BrowserRouter>
      <div className="App">
        <Header characters={characters} handlerCharChange={handlerCharChange} />
        <Routes>
          <Route
            path="/character"
            element={<CharactersList characters={kek} loader={loader}/>}
          />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
