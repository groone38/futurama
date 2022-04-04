import React from "react";
import CharactersList from "./components/Characters/CharactersList";
import { ICharacters } from "./type/type";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Character from "./components/Characters/Character";
import { NavLink } from "react-router-dom";
import Cast from "./components/Cast/Cast";
import Creators from "./components/Creators/Creators";
import Episodes from "./components/Episodes/Episodes";

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
        <header className="header">
          <h2>FUTURAMA</h2>
          <nav className="header_nav">
            <NavLink to={"/"}>Сreators</NavLink>
            <NavLink to={"/cast"}>Cast</NavLink>
            <NavLink to={"/episodes"}>Episodes</NavLink>
            <NavLink to={"/character"}>Character</NavLink>
          </nav>
        </header>
        <Header handlerCharChange={handlerCharChange} />
        <Routes>
          <Route path="/" element={<Creators />} />
          <Route path="/cast" element={<Cast />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route
            path="/character"
            element={<CharactersList characters={charSearch} loader={loader} />}
          />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
