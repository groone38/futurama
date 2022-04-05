import axios from "axios";
import React, { useEffect, useState } from "react";
import { IInfo } from "../../type/type";
import Loader from "./../loader/Loader";
import Creator from "./Creator";
import Synopsis from "./Synopsis";

const Creators = () => {
  const [data, setData] = useState<IInfo>();
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    fetchCreators();
  }, []);
  async function fetchCreators() {
    setLoader(true);
    try {
      const responce = await axios.get<IInfo[]>(
        "https://api.sampleapis.com/futurama/info"
      );
      setData(responce.data[0]);
    } catch (e) {
      alert(e);
    }
    setLoader(false);
  }
  return loader ? (
    <Loader />
  ) : (
    <>
      <div className="row mb-3">
        {data?.creators.map((item) => (
          <Creator item={item} />
        ))}
      </div>
      <Synopsis synopsis={data?.synopsis} years={data?.yearsAired} />
    </>
  );
};

export default Creators;
