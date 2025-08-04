"use client";
import React, { useState } from "react";

const SectionHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("contactForm", JSON.stringify(formData));
    alert("Message Sent");
    // Optionally reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div>
      <div className="grid grid-cols-[1fr_2fr] w-[80vw] mx-auto my-32 gap-10">
        {/* Left Side - Contact Info */}
        <div className="flex flex-col border border-gray-200 gap-10 p-10 shadow-xl">
          <div className="flex flex-col gap-5">
            <div className="flex gap-4">
              <img src="/assests/phone.svg" alt="" />
              <p>Call To Us</p>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +880161112222</p>
          </div>
          <div className="flex justify-center">
            <img src="/assests/UnderLine.png" alt="" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4">
              <img src="/assests/mail.svg" alt="" />
              <p>Write To Us</p>
            </div>
            <p>Fill out form and we will contact you within 24 hours</p>
            <p>Email: customer@exclusive.com</p>
            <p>Email: support@exclusive.com</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex flex-col gap-5 border border-gray-200 shadow-xl p-8">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex justify-between flex-wrap gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                required
                onChange={handleChange}
                placeholder="Your Name"
                className="flex-1 min-w-[150px] pl-5 py-2 bg-gray-200 rounded"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                required
                onChange={handleChange}
                placeholder="Your Email"
                className="flex-1 min-w-[150px] pl-5 py-2 bg-gray-200 rounded"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                required
                onChange={handleChange}
                placeholder="Your Phone"
                className="flex-1 min-w-[150px] pl-5 py-2 bg-gray-200 rounded"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={9}
              placeholder="Your Message"
              className="p-4 bg-gray-200 rounded resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 w-max"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
