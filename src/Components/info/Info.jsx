import React from "react";

export default function Info({ info, flag }) {
  return (
    <div className="card">
      {flag && (
        <img className="card-img-top" src={flag} alt="Card image cap" />
      )}
      {info && (
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Capital: {info.capital}</li>
          <li className="list-group-item">languages: {info.languages}</li>
          <li className="list-group-item">
            Population: {info.populationEstimate}
          </li>
          <li className="list-group-item">Currency: {info.currency}</li>
        </ul>
      )}
    </div>
  );
}
