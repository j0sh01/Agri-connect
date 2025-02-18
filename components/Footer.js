import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">AgriConnect</h3>
            <p className="text-gray-600 text-sm">
              Transforming agriculture through digital innovation and community connection.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-green-600">
                <FaFacebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-600">
                <FaTwitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-600">
                <FaInstagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-600">
                <FaLinkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-green-600">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-green-600">Services</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-green-600">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-green-600">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-600 hover:text-green-600">Help Center</Link>
              </li>
              <li>
                <Link href="/farmers" className="text-gray-600 hover:text-green-600">For Farmers</Link>
              </li>
              <li>
                <Link href="/buyers" className="text-gray-600 hover:text-green-600">For Buyers</Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-600 hover:text-green-600">Partners</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: info@agriconnect.com</li>
              <li>Phone: +255 748 624 706</li>
              <li>Address: Dar Es Salaam, Tanzania</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} AgriConnect. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-green-600">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-green-600">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-gray-500 hover:text-green-600">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}