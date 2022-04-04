import axios from "axios";
import React, { useEffect, useState } from "react";
import { IInfo } from "../../type/type";
import Loader from "./../loader/Loader";
import { ICreator } from './../../type/type';

const Creators = () => {
  const [data, setData] = useState<IInfo | null>(null);
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
  let name: (ICreator[] | undefined) = data?.creators
  console.log(data);
  console.log(name);
  return loader ? (
    <Loader />
  ) : (
    <>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            {/* {data.map((item) => ( */}
              <div className="card-body">
                <h5 className="card-title">{data?.creators.name}</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            {/* ))} */}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        {/* <img src="..." className="card-img-top" alt="..."> */}
        {/* {data.map((item) => ( */}
          <div className="card-body">
            <h5 className="card-title">Synopsis</h5>
            <p className="card-text">{data?.synopsis}</p>
            <p className="card-text">
              <small className="text-muted">
                Years aired: {data?.yearsAired}
              </small>
            </p>
          </div>
        {/* ))} */}
      </div>
    </>
  );
};

export default Creators;
