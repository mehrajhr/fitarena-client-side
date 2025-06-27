import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { MdOutlineDateRange } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import axios from "axios";
import UseAuth from "../Hooks/UseAuth";

const ManageEventCard = ({event}) => {
    const {user} = UseAuth();
    const [participants , setParticipants] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:5000/events/participants?email=${user.email}&id=${event._id}`)
        .then(res => {
            setParticipants(res.data);
        })
    },[user, event])
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 flex flex-col justify-between">
      <div>
        <img
          src={event?.image}
          alt={event?.eventName}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-semibold">{event?.eventName}</h2>
        <p className="text-sm text-gray-600 mb-2">{event?.eventType}</p>
        <p className="text-gray-500 text-sm mb-1 flex gap-1 items-center">
          <MdOutlineDateRange />{" "}
          {new Date(event?.eventDate).toLocaleDateString()}
        </p>
        <p className="text-gray-500 text-sm mb-1 flex items-center gap-1"><MdLocationPin /> {event?.location}</p>
        <p className='text-gray-500 text-sm mb-1 '>Participant : {participants?.length}</p>
      </div>

      <div className="mt-4 flex gap-3">
        <Link to={`/update-event/${event._id}`}>
          <button className="btn btn-sm btn-info">Edit</button>
        </Link>
        <button className="btn btn-sm btn-error">Delete</button>
      </div>
    </div>
  );
};

export default ManageEventCard;
