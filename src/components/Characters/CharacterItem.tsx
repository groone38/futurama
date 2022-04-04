import React, { FC } from "react";
import { ICharacters } from './../../type/type';
import "./CharacterItem.css";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

interface CharacterItemProps {
  character: ICharacters;
}

const CharacterItem: FC<CharacterItemProps> = ({ character }) => {
  return (
    <div className="card mb-3 p-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={character.images.main}
            alt=""
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              <strong>Name:</strong> {character.name.first}{" "}
              {character.name.middle} {character.name.last}
            </h5>
            <p className="card-text">
              <strong>Occupation:</strong> {character.occupation}
            </p>
            <NavLink to={"/character/" + character.id}>
              <Button
                outline
              >
                Info
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
