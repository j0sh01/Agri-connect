import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive design and menu visibility
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Check initial mobile view
    checkMobileView();

    // Add resize listener
    window.addEventListener('resize', checkMobileView);

    // Cleanup listener
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    if (isMobile && isMenuOpen) {
      const handleOutsideClick = (e) => {
        const nav = document.querySelector('nav');
        const menuButton = document.querySelector('button[aria-label="Toggle Menu"]');
        
        if (nav && menuButton && 
            !nav.contains(e.target) && 
            !menuButton.contains(e.target)) {
          setIsMenuOpen(false);
        }
      };

      document.addEventListener('mousedown', handleOutsideClick);
      return () => document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [isMobile, isMenuOpen]);

  // Navigation menu items
  const menuItems = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
    { href: '/educational-resources', label: 'Resources' },
    { href: '/weather', label: 'Weather'}
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-green-600 text-white p-4 flex justify-between items-center shadow-md relative">
        <Link href="/" className="text-2xl font-bold hover:text-gray-200 transition-colors">
          AgriConnect
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle Menu"
          className="lg:hidden block text-white focus:outline-none z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`
            fixed lg:static 
            top-0 left-0 right-0 
            bg-green-600 
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
            lg:translate-y-0
            lg:flex lg:items-center lg:space-x-4
            lg:relative lg:w-auto
            pt-20 lg:pt-0
            h-screen lg:h-auto
            z-40
          `}
        >
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
            {menuItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="hover:text-gray-300 transition-colors text-lg lg:text-base"
                onClick={() => isMobile && setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {session && (
              <button
                onClick={() => signOut()}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Sign Out
              </button>
            )}
          </div>
        </nav>
      </header>

      <main className="flex-grow p-4">{children}</main>
    </div>
  );
}