import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // console.log("clicked");
    // setShowAlert(true);
    // setTimeout(() => setShowAlert(false), 3000);

    emailjs
      .sendForm("service_ftl7fom", "template_phzrexh", form.current, {
        publicKey: "AhgDhrbkF8iG4xNIN",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 5000);

          form.current.reset();

          setIsSubmitting(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setShowAlert(false);
          setIsSubmitting(false);
        }
      );
  };

  // ... existing code ...
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-white min-h-screen flex flex-col items-center justify-center px-6 py-24 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Have a question or want to work together? Drop me a message!
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 rounded-2xl shadow-2xl p-8 space-y-6 w-full border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                name="from_name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800/70 focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:text-white transition-all duration-200 placeholder-gray-400"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                name="from_email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800/70 focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:text-white transition-all duration-200 placeholder-gray-400"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              Your Message
            </label>
            <textarea
              name="message"
              rows="6"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800/70 focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:text-white transition-all duration-200 placeholder-gray-400 resize-none"
              placeholder="What would you like to say?"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-800 text-white py-4 px-6 rounded-lg shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed transform transition-all duration-200 hover:-translate-y-0.5 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>

      {showAlert && (
        <div className="fixed top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg shadow-2xl z-50 animate-fade-in-down flex items-center space-x-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <p>Message sent successfully!</p>
        </div>
      )}
    </div>
  );
  // ... existing code ...
}

export default Contact;
