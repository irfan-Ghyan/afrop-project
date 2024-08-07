'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data:', formData);
  };

  return (
    <div className="flex items-center justify-center h-[600px] bg-gray-800 ">
      <div className="w-full mx-auto ">
        <div className='max-w-4xl mx-auto p-8'>
        <h2 className="text-4xl font-bold mb-4 text-center text-white">Get in touch</h2>
        <p className="mb-8 text-center text-gray-200 text-opacity-25">To know more about how we operate and how should we go forward, ring us up on +91 99250 44966 or mail us on info@kokaiindo.com</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative border-b-2 border-white border-opacity-20">
            <label htmlFor="name" className="absolute -top-4 text-sm font-medium text-white">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full bg-transparent p-2 sm:text-sm placeholder-white placeholder-opacity-20"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative border-b-2 border-white border-opacity-20">
            <label htmlFor="email" className="absolute -top-4 text-sm font-medium text-white">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full bg-transparent p-2 sm:text-sm placeholder-white placeholder-opacity-20"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative border-b-2 border-white border-opacity-20">
            <label htmlFor="comments" className="absolute -top-4 text-sm font-medium text-white">Comments</label>
            <textarea
              name="comments"
              id="comments"
              rows="3"
              placeholder="Enter your comments"
              className="w-full bg-transparent p-2 sm:text-sm placeholder-white placeholder-opacity-20"
              value={formData.comments}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 text-white border-2 border-[#ad8c19] hover:bg-gradient-to-r hover:from-[#2b5c17] hover:to-[#ad8c19] px-4 rounded-full transition duration-300 hover:border-0"
            >
              Send
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
