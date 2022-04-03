import React, { FC, useState } from "react";
import { Button } from "reactstrap";
import { ICharacters } from "../../type/type";

interface HeaderProps {
  characters: ICharacters[];
  handlerCharChange: (char: ICharacters[]) => void
}

const Header: FC<HeaderProps> = ({ characters, handlerCharChange }) => {
    const [value, setValue] = useState('')
  const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  const filterCharacters: React.MouseEventHandler<HTMLButtonElement> = () => { 
    let char: ICharacters[] = characters.filter(i => i.name.first.toLowerCase().includes(value.toLowerCase()))
    handlerCharChange(char)
  }
  return (
    <header>
      <h2 style={{ textAlign: "center", color: "white" }}>FUTURAMA</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={handlerChange}
        />
        <Button outline onClick={filterCharacters}>Search</Button>
      </div>
    </header>
  );
};

export default Header;
