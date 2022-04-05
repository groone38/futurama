import React, { FC } from "react";

interface SearchProps {
  handlerCharChange: (char: string) => void;
}

const Search: FC<SearchProps> = ({ handlerCharChange }) => { 
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

export default Search;
