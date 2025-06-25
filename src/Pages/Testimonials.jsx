import React from "react";
import { motion, scale } from "motion/react"

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Khan",
      role: "Amateur Runner",
      feedback:
        "FitArena changed how I train. Booking events is so easy, and the community is very motivating!",
    },
    {
      name: "Tanvir Hasan",
      role: "Basketball Coach",
      feedback:
        "A great platform to find local tournaments. Super clean interface and smooth experience.",
    },
    {
      name: "Nadia Akter",
      role: "Fitness Enthusiast",
      feedback:
        "From booking yoga sessions to joining marathons, this platform keeps me active and social.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-[#251d64]">
          What Our Members Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div initial = {{scale : 0}} animate = {{ scale : 1 , transition : {duration : 4}}} key={i} className="bg-white p-6 rounded shadow-md">
              <p className="text-gray-700 italic">“{review.feedback}”</p>
              <div className="mt-4 text-left">
                <h4 className="font-bold text-[#251d64]">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
