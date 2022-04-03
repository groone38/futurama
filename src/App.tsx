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
import NotFound from './components/notFound/NotFound';

function App() {
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
  
  const handlerCharChange = (char: string) => {
    setValue(char);
  };

  let charSearch: ICharacters[] = characters.filter((i) =>
    i.name.first.toLowerCase().includes(value.toLowerCase())
  );
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header handlerCharChange={handlerCharChange} /> 
        <Routes>
          <Route
            path="/character"
            element={(charSearch.length !== 0) ? <CharactersList characters={charSearch} loader={loader} />: <NotFound/>}
          />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
