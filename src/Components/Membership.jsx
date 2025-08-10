import React from "react";

const Membership = () => {
  return (
    <div>
      <section className="bg-gray-100 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#251d64]">🏆 Join the Arena</h2>
          <p className="text-[#251d64] mb-12">
            Choose the plan that matches your game and unlock exclusive
            benefits.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Beginner Pass */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-4">Beginner Pass</h3>
              <p className="text-3xl font-bold mb-6">
                $0 <span className="text-sm text-gray-400">/month</span>
              </p>
              <ul className="text-left mb-6 space-y-3">
                <li>✅ Access to public events</li>
                <li>✅ Basic training tips</li>
                <li>✅ Email updates</li>
                <li>✅ Limited bookings</li>
              </ul>
              <button className="btn btn-primary w-full">Join Now</button>
            </div>

            {/* Pro Athlete */}
            <div className="bg-orange-500 text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition scale-105">
              <h3 className="text-xl font-semibold mb-4">Pro Athlete</h3>
              <p className="text-3xl font-bold mb-6">
                $15 <span className="text-sm">/month</span>
              </p>
              <ul className="text-left mb-6 space-y-3">
                <li>✅ Unlimited event bookings</li>
                <li>✅ Priority registration</li>
                <li>✅ Advanced training guides</li>
                <li>✅ Exclusive community access</li>
              </ul>
              <button className="btn bg-black text-white border-0 w-full hover:bg-gray-800">
                Join Now
              </button>
            </div>

            {/* Elite Champion */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-4">Elite Champion</h3>
              <p className="text-3xl font-bold mb-6">
                $30 <span className="text-sm text-gray-400">/month</span>
              </p>
              <ul className="text-left mb-6 space-y-3">
                <li>✅ All Pro Athlete benefits</li>
                <li>✅ 1-on-1 coaching sessions</li>
                <li>✅ Merchandise discounts</li>
                <li>✅ VIP event seating</li>
              </ul>
              <button className="btn btn-primary w-full">Join Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
