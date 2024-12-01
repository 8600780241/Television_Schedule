import React from "react";
import { Link } from "react-router-dom";

const ShowCard = ({ show }) => {
  return (
    <div className="show-card">
      <h3>{show.show.name}</h3>
      <p>Time: {show.airtime}</p>
      <p>Channel: {show.show.network?.name || "N/A"}</p>
      <Link to={`/show/${show.show.id}`}>View Details</Link>
    </div>
  );
};

export default ShowCard;
