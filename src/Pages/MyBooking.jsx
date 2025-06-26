import axios from "axios";
import React, { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import { MdOutlineDateRange } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyBooking = () => {
  const { user } = UseAuth();
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/booking?email=${user.email}`)
      .then((res) => {
        setBookings(res.data);
      });
  }, [user]);

  const handleCancelBooking = (id, eventId) => {
    try {
      axios
        .delete(
          `http://localhost:5000/booking?eventId=${eventId}&user_email=${user.email}`
        )
        .then((res) => {
          if (res.data.acknowledged) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Cancel Booking",
              showConfirmButton: false,
              timer: 1500,
            });
            setBookings(bookings?.filter((booking) => booking?._id !== id));
          }
        });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
  return (
    <div className="max-w-6xl bg-base-200 mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-[#251D64] mb-6 text-center">
        My Bookings
      </h2>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven't booked any events yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking) => (
            <div key={booking._id} className="card bg-base-100 shadow-sm">
              <figure>
                <img
                  className="h-52 w-full"
                  src={booking?.image}
                  alt={booking?.creatorName}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{booking?.eventName}</h2>
                <div className="flex gap-3 items-center">
                  <div className="badge bg-blue-950 text-white">
                    {booking?.eventType}
                  </div>
                  <div className="badge bg-blue-950 text-white">
                    <MdOutlineDateRange /> {booking?.eventDate}
                  </div>
                </div>
                <p className="flex gap-1 items-center ">
                  <MdLocationPin /> {booking?.location}
                </p>
                <p>{booking?.description}</p>
                <div className="card-actions justify-end">
                  <Link to={`/event/${booking.eventId}`}>
                    <button className="btn bg-blue-950 text-white">
                      View Event
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      handleCancelBooking(booking?._id, booking?.eventId);
                    }}
                    className="btn btn-dash btn-warning hover:text-white"
                  >
                    Cancel Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBooking;
