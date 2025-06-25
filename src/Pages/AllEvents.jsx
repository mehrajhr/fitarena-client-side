import React, { useEffect, useState } from "react";
import EventsHero from "../Components/EventsHero";
import EventsCard from "../Components/EventsCard";
import axios from "axios";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/all/events").then((res) => {
      setEvents(res.data);
    });
  }, []);
  return (
    <div className="my-10 bg-base-200 md:p-10">
      <EventsHero></EventsHero>
      <div className='my-10 bg-base-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
            events.map(event => <EventsCard key={event._id} event={event}></EventsCard>)
        }
      </div>
    </div>
  );
};

export default AllEvents;
