import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ParticleField from "../components/ParticleField";

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
    setStatus("sending");

    emailjs
      .send(
        "service_vsiefo5",
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
          setStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setStatus(""), 4000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus(""), 4000);
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden">
      <ParticleField />
      <div className="max-w-2xl w-full relative z-10">

        <div className="animate-fade-in-up mb-12">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
            Get in touch
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            Contact
          </h2>
          <p className="text-gray-400 text-lg">
            Got a project idea or just want to chat? Send me a message.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="animate-fade-in-up delay-200 glass-card p-8 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>

          <input
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="input-field"
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="input-field resize-none"
          />

          <button type="submit" disabled={status === "sending"} className="btn-gradient w-full py-4">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-center text-green-400 text-sm font-medium">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-400 text-sm font-medium">
              Failed to send. Please try again.
            </p>
          )}
        </form>

      </div>
    </div>
  );
}

export default Contact;
