import React, { FC } from "react";
import { ICast } from "../../type/type";

interface CastItemProps {
    cast: ICast
}

const CastItem: FC<CastItemProps> = ({cast}) => {
    return (
        <div className="card mb-3">
        <h5 className="card-header"><strong>Date of Birth:</strong> {cast.born}</h5>
        <div className="card-body">
          <h5 className="card-title"><strong>Name:</strong> {cast.name}</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional content.
          </p>
          <a href={cast.bio.url} className="btn btn-outline-secondary">
            Go to IMDB
          </a>
        </div>
      </div>
    )
}

export default CastItem