import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { ICast } from "../../type/type";
import Loader from "../loader/Loader";
import CastItem from "./CastItem";

const Cast = () => {
  const [cast, setCast] = useState<ICast[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchCast();
  }, []);
  async function fetchCast() {
    setLoading(true);
    try {
      const responce = await axios.get<ICast[]>(
        "https://api.sampleapis.com/futurama/cast"
      );
      setCast(responce.data);
    } catch (e) {
      alert(e);
    }
    setLoading(false);
  }
  return (
    <>
    {loading && <Loader/>}
      {cast.map((item) => (
        <CastItem key={item.id} cast={item} />
      ))}
    </>
  );
};

export default Cast;
