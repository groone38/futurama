import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ICharacters } from "../type/type";
import { Button } from "reactstrap";
import Loader from "./loader/Loader";

const Character: FC = () => {
  const [char, setChar] = useState<ICharacters | null>(null);
  const [loader, setLoader] = useState(false);
  console.log(char);
  const navigate = useNavigate();
  const params = useParams();
  const paramsId = params.id;
  useEffect(() => {
    fetchChar();
  }, []);
  async function fetchChar() {
    setLoader(true);
    try {
      const response = await axios.get<ICharacters>(
        "https://api.sampleapis.com/futurama/characters/" + paramsId
      );
      setChar(response.data);
    } catch (e) {
      alert(e);
    }
    setLoader(false);
  }
  return loader ? (
    <Loader />
  ) : (
    <div className="card mb-3 p-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={char?.images.main}
            alt=""
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              <strong>Name:</strong> {char?.name.first} {char?.name.middle}{" "}
              {char?.name.last}
            </h5>
            <p className="card-text">
              <strong>Age:</strong> {char?.age}
            </p>
            <p className="card-text">
              <strong>Gender:</strong> {char?.gender}
            </p>
            <p className="card-text">
              <strong>Species:</strong> {char?.species}
            </p>
            <p className="card-text">
              <strong>Home Planet:</strong> {char?.homePlanet}
            </p>
            <p className="card-text">
              <strong>Occupation:</strong> {char?.occupation}
            </p>
            <Button outline onClick={() => navigate("/character")}>
              Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
