import React, { useEffect, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  // https://formspree.io/f/xyzeolzl

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch("https://formspree.io/f/movnawkr", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (res.ok) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSubmitStatus("error");
    }
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  useEffect(() => {
    let timer;
    if (submitStatus === "success") {
      timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 60000); // 1 minute = 60000 ms
    }
    if (submitStatus === "error") {
      timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 60000); // 1 minute = 60000 ms
    }

    return () => clearTimeout(timer); // Cleanup on unmount or when status changes
  }, [submitStatus]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     transition-all duration-200 ease-in-out
                     hover:border-blue-400 dark:hover:border-blue-500"
          placeholder="Your name"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     transition-all duration-200 ease-in-out
                     hover:border-blue-400 dark:hover:border-blue-500"
          placeholder="your.email@example.com"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     transition-all duration-200 ease-in-out
                     hover:border-blue-400 dark:hover:border-blue-500
                     resize-none"
          placeholder="Your message here..."
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-6 rounded-xl font-medium text-white
                   transition-all duration-200 ease-in-out
                   ${
                     isSubmitting
                       ? "bg-blue-400 cursor-not-allowed"
                       : "bg-blue-600 hover:bg-blue-700 active:transform active:scale-[0.98]"
                   }
                   relative overflow-hidden`}
      >
        <span
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200
                         ${isSubmitting ? "opacity-100" : "opacity-0"}`}
        >
          <svg
            className="animate-spin h-5 w-5 text-white"
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
        </span>
        <span
          className={`transition-opacity duration-200 ${
            isSubmitting ? "opacity-0" : "opacity-100"
          }`}
        >
          Send Message
        </span>
      </button>

      {submitStatus === "success" && (
        <div className="animate-fade-in p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-xl text-center">
          Message sent successfully!
        </div>
      )}

      {submitStatus === "error" && (
        <div className="animate-fade-in p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-xl text-center">
          Failed to send message. Please try again.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
