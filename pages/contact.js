import React, { useState } from 'react';
// import Layout from '../components/Layout';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', // Added subject field
    message: '',
  });
  const [status, setStatus] = useState(''); // For success/error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Simple form validation
  const validateForm = () => {
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      setStatus('Please fill in all fields.');
      return false;
    }
    // Email validation regex
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setStatus('Please enter a valid email.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    if (!validateForm()) return;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Your message has been sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    // <Layout>
    <>
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-lg">
          <h1 className="text-4xl font-bold text-green-700 mb-4 text-center">Contact Us</h1>
          <p className="text-center text-gray-600 mb-6">
            Have questions or need assistance? We're here to help! Reach out to us through the form below or via the contact information provided.
          </p>
          {status && (
            <div className={`mb-4 text-center ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
              {status}
            </div>
          )}
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {/* Anti-Spam Honeypot Field (Hidden) */}
            <div style={{ display: 'none' }}>
              <label htmlFor="honeypot">Honeypot</label>
              <input type="text" id="honeypot" name="honeypot" onChange={handleChange} />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Additional Contact Information */}
          <div className="mt-8 bg-gray-100 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Other Ways to Reach Us</h2>
            <p className="text-gray-700">
              <strong>Phone:</strong> <a href="tel:+255748624706" className="text-green-600 hover:underline">+255 748 624 706</a>
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> <a href="mailto:support@agriconnect.com" className="text-green-600 hover:underline">info@agriconnect.com</a>
            </p>
            <p className="text-gray-700">
              <strong>Address:</strong> Dar Es Salaam, Tanzania
            </p>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 flex justify-center space-x-6">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.494V14.706h-3.13v-3.6h3.13V8.207c0-3.122 1.894-4.821 4.66-4.821 1.325 0 2.466.099 2.797.143v3.243h-1.918c-1.507 0-1.8.718-1.8 1.769v2.319h3.6l-.468 3.6h-3.132V24h6.136C23.4 24 24 23.4 24 22.676V1.325C24 .6 23.4 0 22.675 0z"
                />
              </svg>
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.864 9.864 0 01-3.127 1.196 4.916 4.916 0 00-8.38 4.482A13.94 13.94 0 011.64 3.157a4.902 4.902 0 001.523 6.556 4.897 4.897 0 01-2.23-.616c-.054 2.28 1.582 4.417 3.949 4.89a4.904 4.904 0 01-2.224.085 4.917 4.917 0 004.587 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.213c9.142 0 14.307-7.72 13.995-14.646A9.936 9.936 0 0024 4.557z"
                />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.013 4.85.07 1.366.062 2.633.331 3.608 1.308.975.976 1.246 2.242 1.308 3.608.057 1.266.07 1.646.07 4.85 0 3.203-.013 3.583-.07 4.849-.062 1.366-.333 2.633-1.308 3.609-.975.976-2.242 1.246-3.608 1.308-1.266.057-1.646.07-4.85.07-3.203 0-3.583-.013-4.849-.07-1.366-.062-2.633-.333-3.609-1.308-.975-.976-1.246-2.242-1.308-3.608-.057-1.266-.07-1.646-.07-4.85s.013-3.583.07-4.849c.062-1.366.333-2.633 1.308-3.609C5.667 2.494 6.934 2.224 8.3 2.162 9.567 2.106 9.947 2.093 13.15 2.093c3.203 0 3.583.013 4.85.07zM12 0C8.741 0 8.332.011 7.052.072 5.77.132 4.615.409 3.653 1.371 2.69 2.334 2.413 3.489 2.353 4.771 2.292 6.05 2.281 6.459 2.281 9.719s.011 3.668.072 4.947c.06 1.283.338 2.438 1.3 3.401.963.962 2.118 1.24 3.401 1.3 1.279.061 1.688.072 4.947.072s3.668-.011 4.947-.072c1.283-.06 2.438-.338 3.401-1.3.962-.963 1.24-2.118 1.3-3.401.061-1.279.072-1.688.072-4.947s-.011-3.668-.072-4.947c-.06-1.283-.338-2.438-1.3-3.401-.963-.962-2.118-1.24-3.401-1.3C15.668.011 15.259 0 12 0zM12 5.838a6.163 6.163 0 1 0 0 12.326A6.163 6.163 0 0 0 12 5.838zm0 10.163a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-10.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
                />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 448 512"
                aria-hidden="true"
              >
                <path
                  d="M100.28 448H7.4V148.9h92.88zm-46.44-339.7C24 104.8 0 80.9 0 53.25S24 1.9 53.84 1.9 107.7 25.8 107.7 53.25 77.9 108.3 53.9 108.3zM447.6 448h-92.68V302.4c0-34.7-12.5-58.4-43.2-58.4-23.6 0-37.6 15.8-43.8 31.1-2.3 5.5-2.9 13.2-2.9 21v151h-92.7s1.2-245 0-270.1h92.7v38.3c-.2.3-.5.7-.7 1h.7v-1c12.3-19 34.4-46.3 83.6-46.3 61 0 106.7 39.8 106.7 125.3V448z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    {/* </Layout> */}
    </>
  );
}
