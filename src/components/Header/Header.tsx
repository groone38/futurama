import React, { FC } from "react";

interface HeaderProps {
  handlerCharChange: (char: string) => void;
}

const Header: FC<HeaderProps> = ({ handlerCharChange }) => { 
  const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    handlerCharChange(e.target.value); 
  };
  return (
    <header>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={handlerChange}
        />
      </div>
    </header>
  );
};

export default Header;
