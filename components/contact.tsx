"use client";
import { useState } from "react";
import Background from "./background";

type Email = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<Email>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    window.open(
      `mailto:test@example.com?subject=${formData.subject}&body=${formData.message}`,
    );
  };

  return (
    <main id="contact">
      <Background styles="h-screen">
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg text-black">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              {/* Name Field */}
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>

              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>

              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Subject Field */}
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-2"
              >
                Subject
              </label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Your Subject"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                rows={6}
                placeholder="Your Message"
                required
                style={{ resize: "none" }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </Background>
    </main>
  );
};

export default Contact;
