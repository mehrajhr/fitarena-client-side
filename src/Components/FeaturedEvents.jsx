import React, { useEffect, useState } from "react";
import { motion, scale } from "motion/react";
import EventsCard from "./EventsCard";
import Loading from "./Loading";

const FeaturedEvents = ({ events }) => {
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [loading , setLoading] = useState(true);
  useEffect(() => {
    setFeaturedEvents(events.slice(0, 6));
    setLoading(false);
  }, [events]);
  // console.log(featuredEvents);
  if(loading){
    return <Loading></Loading>
  }
  return (
    <section className="py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center text-[#251D64] mb-12">
          Featured Events
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {featuredEvents.map((event) => (
            <EventsCard event={event} key={event._id}></EventsCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedEvents;
