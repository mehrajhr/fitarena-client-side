import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { motion, scale } from "motion/react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import MagneticButton from "../Components/MagneticButton";
import UseAuth from "../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const EventDetails = () => {
  const event = useLoaderData();
  const { user } = UseAuth();
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/booking/check?eventId=${event._id}&user_email=${user.email}`
      )
      .then((res) => {
        if (res.data.booked) {
          setIsTrue(true);
        } else {
          setIsTrue(false);
        }
      });
  }, [event, user]);
  const handlBooking = () => {
    const { _id, ...rest } = event;
    const bookingData = {
      eventId: _id,
      ...rest,
      user_email: user?.email,
      user_name: user?.displayName,
      bookingTime: new Date(),
    };
    try {
      axios.post("http://localhost:5000/booking", bookingData).then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Booked successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsTrue(true);
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
  const handleCancelBooking = () => {
    try {
      axios
        .delete(
          `http://localhost:5000/booking?eventId=${event._id}&user_email=${user.email}`
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
          }
          setIsTrue(false);
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
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Image */}
        <motion.img
          whileHover={{ scale: 0.9 }}
          src={event?.image}
          alt={event?.eventName}
          className="w-full h-[400px] object-cover rounded-lg shadow-md"
        />

        {/* Right: Info */}
        <div>
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 3 } }}
            className="text-3xl font-bold text-[#251D64] mb-2"
          >
            {event?.eventName}
          </motion.h1>
          <div className="text-sm text-gray-600 my-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex gap-2 items-center"
            >
              {" "}
              <MdOutlineDateRange></MdOutlineDateRange>{" "}
              {new Date(event?.eventDate).toDateString()}
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex gap-2 items-center mt-2"
            >
              <CiLocationOn></CiLocationOn> {event?.location}
            </motion.div>
          </div>

          <motion.span
            whileHover={{ scale: 1.5 }}
            className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium mb-4"
          >
            {event?.eventType}
          </motion.span>

          <p className="text-gray-700 leading-relaxed mb-6">
            {event?.description}
          </p>

          <div className="mb-4">
            <h4 className="text-blue-900 font-medium">Organizer:</h4>
            <p className="text-gray-600">{event?.creatorName}</p>
            <p className="text-gray-600 text-sm">{event?.creatorEmail}</p>
          </div>
          {isTrue ? (
            <motion.button
              onClick={handleCancelBooking}
              className="btn bg-blue-950 text-white"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              Cancel Book
            </motion.button>
          ) : (
            <motion.button
              onClick={handlBooking}
              className="btn bg-blue-950 text-white"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              Book Now
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
