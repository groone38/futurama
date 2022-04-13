import axios from "axios";
import React, { useEffect, useState } from "react";
import { ICast } from "../../type/type";
import Loader from "../loader/Loader";
import CastItem from "./CastItem";
import { useTypeSelector } from './../../hook/useTypeSelector';
import { fetchCast } from './../../store/action/castAction';
import { useAction } from './../../hook/useAction';

const Cast = () => {
  const {cast, error, loading} = useTypeSelector(state => state.cast)
  const {fetchCast} = useAction()
  // const [cast, setCast] = useState<ICast[]>([]);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchCast('cast');
  }, []);
  // async function fetchCast() {
  //   setLoading(true);
  //   try {
  //     const responce = await axios.get<ICast[]>(
  //       "https://api.sampleapis.com/futurama/cast"
  //     );
  //     setCast(responce.data);
  //   } catch (e) {
  //     alert(e);
  //   }
  //   setLoading(false);
  // }
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
