import React, { useEffect, useState } from "react";
import { motion, scale } from "motion/react";
import UseAuth from "../Hooks/UseAuth";
import { Link, useParams } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const UpdateEvent = () => {
  const { user } = UseAuth();
  const { id } = useParams();
  const axiosSecue = UseAxiosSecure();
  const [event, setEvent] = useState([]);
  useEffect(() => {
    axiosSecue.get(`event/${id}`).then((res) => {
      setEvent(res.data);
    });
  }, [id ,axiosSecue]);

  const handleUpdate = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const form = e.target;
        const formData = new FormData(form);
        const updateEvent = Object.fromEntries(formData.entries());
        try {
          axios
            .put(`https://fitarena-server.vercel.app/event/update/${id}`, updateEvent)
            .then((res) => {
              if(res.data.modifiedCount){
                Swal.fire("Saved!", "", "success");
              }
              else{
                Swal.fire("Don't Saved!", "Please change a field first");
              }
            });
        } catch {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-xl mt-10">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 4 } }}
        className="text-3xl font-bold text-center text-[#251D64] mb-6"
      >
        Update Event
      </motion.h1>

      <motion.div whileHover={{ scale: 1.01 }}>
        <form onSubmit={handleUpdate} className="space-y-6">
          {/* Event Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Event Name
            </label>
            <input
              name="eventName"
              type="text"
              required
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              defaultValue={event.eventName}
            />
          </div>

          {/* Event Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Event Type
            </label>
            <select
              name="eventType"
              required
              className="w-full border px-4 py-2 rounded-md"
              defaultValue={event.eventType}
            >
              <option value="">Select Event Type</option>
              <option value="Swimming">Swimming</option>
              <option value="Sprinting">Sprinting</option>
              <option value="Long Jump">Long Jump</option>
              <option value="High Jump">High Jump</option>
              <option value="Hurdle Race">Hurdle Race</option>
            </select>
          </div>

          {/* Date & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Event Date
              </label>
              <input
                name="eventDate"
                type="date"
                defaultValue={event.eventDate}
                required
                className="w-full border px-4 py-2 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Location
              </label>
              <input
                name="location"
                type="text"
                required
                className="w-full border px-4 py-2 rounded-md"
                defaultValue={event.location}
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Event Image URL
            </label>
            <input
              name="image"
              type="url"
              required
              className="w-full border px-4 py-2 rounded-md"
              defaultValue={event.image}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              required
              className="w-full border px-4 py-2 rounded-md"
              defaultValue={event.description}
            ></textarea>
          </div>

          {/* Creator Info (Prefilled) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Creator Name
              </label>
              <input
                name="creatorName"
                value={user.displayName}
                type="text"
                readOnly
                className="w-full border px-4 py-2 bg-gray-100 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Creator Email
              </label>
              <input
                name="creatorEmail"
                value={user.email}
                type="email"
                readOnly
                className="w-full border px-4 py-2 bg-gray-100 rounded-md"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="bg-[#251D64] text-white px-6 py-2 rounded-md hover:bg-[#1c1554] transition"
            >
              Update Event
            </motion.button>
          </div>
        </form>
         <Link className='flex justify-center mt-5' to='/manageEvents'>
          <button className="btn btn-dash btn-warning hover:text-white">
            Back to Manage Events
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default UpdateEvent;
