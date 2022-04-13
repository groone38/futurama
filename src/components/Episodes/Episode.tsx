import React from "react";
import { IEpisodes } from "../../type/type";

interface EpisodeProps {
  item: IEpisodes;
}

export default function Episode({ item }: EpisodeProps) {
  return (
    <div className="card border-success">
      <div className="card-header bg-transparent border-success">
        {item.number}
      </div>
      <div className="card-body text-success">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.desc}</p>
      </div>
      <div className="card-footer bg-transparent border-success">
        {item.originalAirDate}
      </div>
    </div>
  );
}
