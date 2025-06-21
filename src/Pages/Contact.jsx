import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4 lg:px-20">
      <div className="max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <p className="text-center text-gray-500 mb-10">
          Have questions, suggestions, or want to collaborate? We'd love to hear
          from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p>
              <strong>Email:</strong> mehrajhasanriajcse@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +8801873817175
            </p>
            <p>
              <strong>Location:</strong> Chittagong, Bangladesh
            </p>

            <div className="mt-4 space-x-4">
              <a
                href="https://web.facebook.com/meh.raj.1426/"
                target="_blank"
                rel="noreferrer"
                className="link link-hover text-blue-500"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/thisismehraj_/"
                className="link link-hover text-pink-500"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                rows="5"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
