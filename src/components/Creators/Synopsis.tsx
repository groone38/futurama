import React from "react";
import logo from '../../images/logo.png'

interface SynopsisProps {
  synopsis: string | undefined;
  years: string | undefined;
}

export default function Synopsis({ synopsis, years }: SynopsisProps) {
  return (
    <div className="card mb-3">
      <img src={logo} className="card-img-top" alt="logo"/>
      <div className="card-body">
        <h5 className="card-title">Synopsis:</h5>
        <p className="card-text">{synopsis}</p>
        <p className="card-text">
          <small className="text-muted">Years aired: {years}</small>
        </p>
      </div>
    </div>
  );
}
