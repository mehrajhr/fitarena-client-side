import React from "react";
import { Link } from "react-router";

const EventsCard = ({ event }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-xl transition">
      <img
        src={event.image}
        alt="Event Banner"
        className="w-full h-50 "
      />
      <div className="p-4">
        <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded">
          {event.eventType}
        </span>
        <h3 className="text-xl font-bold mt-2">{event.eventName}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {event.location} | {event.eventDate}
        </p>
        <p className="text-gray-700 text-sm">
          {event.description}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-sm text-gray-500 italic">by {event.creatorName}</p>
          <Link to={`/event/${event.id}`}>
            <button className="btn btn-sm btn-warning">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
