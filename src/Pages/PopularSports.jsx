import React from "react";

const PopularSports = () => {
  const sports = [
    { name: "Basketball", image: "https://i.ibb.co/Z6KF2ZZK/basketball.jpg" },
    { name: "Football", image: "https://i.ibb.co/1JQTd54Z/football.jpg" },
    { name: "Running", image: "https://i.ibb.co/PsVtWBgb/running.jpg" },
    { name: "Boxing", image: "https://i.ibb.co/dwrCDcss/boxing.jpg" },
  ];

  return (
    <section className="bg-base-200 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-[#251d64] text-center">
          Most Popular Sports
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sports.map((sport, index) => (
            <div key={index} className="text-center my-6">
              <img
                src={sport.image}
                alt={sport.name}
                className="w-full h-full object-cover rounded-md shadow"
              />
              <h4 className="mt-4 text-xl font-semibold text-[#251d64]">
                {sport.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSports;
