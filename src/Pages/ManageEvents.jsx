import axios from "axios";
import React, { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import ManageEventCard from "./ManageEventCard";

const ManageEvents = () => {
    const {user} = UseAuth();
    const [events, setEvents] = useState([]);
    useEffect(() =>{
        axios.get(`http://localhost:5000/events/manage?email=${user.email}`)
        .then(res => {
            setEvents(res.data);
        })
    },[user])
  return (
    <div className="p-5 bg-base-200 md:p-10 max-w-7xl mx-auto">
      <h1 className="text-3xl text-center text-blue-950 font-bold mb-6">Manage Your Events</h1>

      {events.length === 0 ? (
        <p className="text-gray-600 text-center">You haven’t created any events yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events?.map((event) => <ManageEventCard event={event} key={event._id}></ManageEventCard>)}
        </div>
      )}
    </div>
  );
};

export default ManageEvents;
