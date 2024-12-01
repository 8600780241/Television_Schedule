import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowCard from "./ShowCard";

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/api/schedule?country=US"
        );
        setSchedule(response.data);
      } catch (error) {
        console.error("Error fetching schedule:", error);
      }
    };

    fetchSchedule();
  }, []);

  return (
    <div className="schedule">
      <h2>Current TV Schedule</h2>
      <div className="show-list">
        {schedule.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
