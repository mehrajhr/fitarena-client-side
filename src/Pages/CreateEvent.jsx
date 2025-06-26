import React, { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import { motion, scale } from "motion/react";
import axios from "axios";
import Swal from "sweetalert2";

const CreateEvent = () => {
  const { user } = UseAuth();

  const handleCreateEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const eventData = Object.fromEntries(formData.entries());
    console.log(eventData);
    try {
      axios.post("http://localhost:5000/create-event", eventData)
        .then((res) => {
          if (res.data.acknowledged) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Create Event Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            form.reset();
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
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
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-xl mt-10">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 4 } }}
        className="text-3xl font-bold text-center text-[#251D64] mb-6"
      >
        Create New Event
      </motion.h1>

      <motion.div whileHover={{ scale: 1.01 }}>
        <form onSubmit={handleCreateEvent} className="space-y-6">
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
              placeholder="e.g. Swimming Championship"
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
            >
              <option value="">-- Select Event Type --</option>
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
                placeholder="e.g. Dhaka Stadium"
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
              placeholder="https://example.com/image.jpg"
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
              placeholder="Write a short description about the event..."
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
              Create Event
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default CreateEvent;
