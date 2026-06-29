import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_vsiefo5", // ✅ YOUR SERVICE ID (you gave this)
        "template_xj40rbj",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "Jhz7av9Vz7D7jyL99"
      )
      .then(
        () => {
          setStatus("Message sent successfully 🚀");

          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6 pt-16">
      <div className="max-w-2xl w-full">
        <h1 className="text-6xl md:text-8xl font-black mb-4">
          Contact Me!
        </h1>

        <p className="text-gray-400 text-lg mb-12">
          I’m always down to connect, build cool things, or just chat. If you’ve
          got a project or just want to reach out, send a message.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 space-y-6"
        >
          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg"
          />

          <input
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg"
          />

          <input
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg resize-none"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold py-4 rounded-lg hover:scale-[1.02] transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-cyan-400 font-semibold">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;