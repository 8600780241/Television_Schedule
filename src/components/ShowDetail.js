import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ShowDetails = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/api/shows/${id}`);
        setShowDetails(response.data);
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };

    fetchShowDetails();
  }, [id]);
//console.log(showDetails)
  if (!showDetails) return <p>Loading...</p>;

  return (
    <div className="show-details">
      <h2>{showDetails.name}</h2>
      {showDetails.image && (
        <img src={showDetails.image.medium} alt={showDetails.name} />
      )}
      <p>{showDetails.summary?.replace(/<[^>]+>/g, "")}</p>
      <p><strong>Genres:</strong> {showDetails.genres.join(", ")}</p>
      <p><strong>Runtime:</strong> {showDetails.runtime} minutes</p>
      <p><strong>Premiered:</strong> {showDetails.premiered}</p>
    </div>
  );
};

export default ShowDetails;
