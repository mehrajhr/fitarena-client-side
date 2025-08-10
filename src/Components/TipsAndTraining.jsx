import React from "react";
import { motion, scale } from "motion/react";

const TipsAndTraining = () => {
  return (
    <div>
      <section className="bg-base-200 py-5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold">
              Push Beyond <span className="text-orange-500">Your Limits</span>
            </h2>
            <p className="text-gray-700">
              The body achieves what the mind believes. Train with purpose, stay
              consistent, and every day you’ll be closer to your goal.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="btn px-10 bg-orange-600 text-white text-xl hover:bg-white hover:text-black py-6"
            >
              Start Training Now
            </motion.button>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img
              src="https://i.ibb.co.com/WNSkFLyg/bodybuilder-training-back-exercise-machine.jpg"
              alt="Motivational Athlete"
              className="rounded-2xl shadow-xl object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TipsAndTraining;
