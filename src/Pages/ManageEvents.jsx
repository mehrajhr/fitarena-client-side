import axios from "axios";
import React, { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import ManageEventCard from "./ManageEventCard";
import Swal from "sweetalert2";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const ManageEvents = () => {
  const { user } = UseAuth();
  const [events, setEvents] = useState([]);
  const axiosSecure = UseAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`events/manage?email=${user.email}`)
      .then((res) => {
        setEvents(res.data);
      });
  }, [user , axiosSecure]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(`https://fitarena-server.vercel.app/event/${id}`).then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const afterDeleteEvents = events.filter(event => event._id !== id);
              setEvents(afterDeleteEvents);
            }
          });
        } catch {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      }
    });
  };

  return (
    <div className="p-5 bg-base-200 md:p-10 max-w-7xl mx-auto">
      <h1 className="text-3xl text-center text-blue-950 font-bold mb-6">
        Manage Your Events
      </h1>

      {events.length === 0 ? (
        <p className="text-gray-600 text-center">
          You haven’t created any events yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events?.map((event) => (
            <ManageEventCard
              handleDelete={handleDelete}
              event={event}
              key={event._id}
            ></ManageEventCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageEvents;
