import React from "react";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-base-200 py-16 px-4 lg:px-20">
      <div className="max-w-4xl mx-auto bg-base-100 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        {/* FAQ Item 1 */}
        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="faq" defaultChecked />
          <div className="collapse-title text-lg font-medium">
            What is FitArena?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              FitArena is an athletic event booking platform where athletes and
              sports lovers can discover, join, and manage local sports
              competitions easily.
            </p>
          </div>
        </div>

        {/* FAQ Item 2 */}
        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="faq" />
          <div className="collapse-title text-lg font-medium">
            Is FitArena free to use?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Yes! Browsing events and creating an account is completely free.
              Some events may require a participation fee set by the event
              organizer.
            </p>
          </div>
        </div>

        {/* FAQ Item 3 */}
        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="faq" />
          <div className="collapse-title text-lg font-medium">
            How do I book an event?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Simply log in, browse events, and click “Book Now” on the event
              page. You'll receive a confirmation in your dashboard and email.
            </p>
          </div>
        </div>

        {/* FAQ Item 4 */}
        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="faq" />
          <div className="collapse-title text-lg font-medium">
            Can I cancel or reschedule a booking?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Yes, you can cancel from your dashboard if the event organizer
              allows it. Rescheduling depends on the event's flexibility.
            </p>
          </div>
        </div>

        {/* FAQ Item 5 */}
        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="faq" />
          <div className="collapse-title text-lg font-medium">
            How do I contact support?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              You can use our{" "}
              <a href="/contact" className="text-primary underline">
                Contact Page
              </a>{" "}
              or email us directly at <strong>mehrajhasanriajcse@gmail.com</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
