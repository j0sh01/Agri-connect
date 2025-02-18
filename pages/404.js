// pages/404.js

import Link from 'next/link';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';

export default function Custom404() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4">
      {/* Icon and Heading */}
      <div className="flex flex-col items-center text-center">
        <ExclamationTriangleIcon className="h-16 w-16 text-green-600 mb-4 animate-bounce" />
        <h1 className="text-5xl font-extrabold text-green-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Oops! This page could not be found.
        </h2>
        <p className="text-gray-600 mb-8">
          It looks like the page you're looking for doesn't exist or has been moved.
        </p>
      </div>

      {/* Image Illustration */}
      <div className="max-w-md mb-8">
        <img
          src="/51889.jpg"
          alt="Page not found illustration"
          className="w-full h-auto"
        />
      </div>

      {/* Call-to-Action Buttons */}
      <div className="flex space-x-4">
        <Link href="/" passHref legacyBehavior>
          <a className="bg-green-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-green-700 transition-colors">
            Go Back Home
          </a>
        </Link>
        <Link href="/contact" passHref legacyBehavior>
          <a className="bg-white text-green-600 border border-green-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-green-50 transition-colors">
            Contact Support
          </a>
        </Link>
      </div>
    </div>
  );
}
