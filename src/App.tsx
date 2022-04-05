import React from "react";
import CharactersList from "./components/Characters/CharactersList";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Character from "./components/Characters/Character";
import Cast from "./components/Cast/Cast";
import Creators from "./components/Creators/Creators";
import Episodes from "./components/Episodes/Episodes";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Creators />} />
          <Route path="/cast" element={<Cast />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route
            path="/character"
            element={<CharactersList />}
          />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
