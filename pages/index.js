// import Image from 'next/image';
// import Link from 'next/link';
// import { GlobeAltIcon, UserGroupIcon, BriefcaseIcon, CheckBadgeIcon, ChartBarIcon } from '@heroicons/react/24/outline';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import Footer from '../components/Footer';

// const testimonials = [
//   {
//     name: "John Mwangi",
//     role: "Smallholder Farmer, Kenya",
//     quote: "AgriConnect transformed my farming business by connecting me directly with buyers across East Africa.",
//     avatar: "/farmer-avatar-1.jpg"
//   },
//   {
//     name: "Maria Rodrigues",
//     role: "Agricultural Buyer, Tanzania",
//     quote: "The platform's transparency and real-time market insights have been game-changing for our procurement strategy.",
//     avatar: "/buyer-avatar-1.jpg"
//   }
// ];

// const impactMetrics = [
//   { value: "5,000+", label: "Farmers Connected" },
//   { value: "$2.5M", label: "Total Transactions" },
//   { value: "12", label: "Countries Served" }
// ];

// export default function Home() {
//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <div className="flex flex-col lg:flex-row">
//           <div className="flex-1 max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 lg:mt-0 lg:py-20">
//             <div className="sm:text-center lg:text-left">
//               <h1 className="text-4xl tracking-tight font-extrabold text-green-700 sm:text-5xl md:text-6xl">
//                 Welcome to AgriConnect
//               </h1>
//               <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
//                 Connecting farmers to buyers across Africa, bridging the gap between agricultural producers and consumers.
//               </p>
//               <div className="mt-5 sm:mt-8 flex justify-center lg:justify-start">
//                 <Link href="/login" className="px-8 py-3 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
//                   Get Started
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="w-full lg:w-1/2 h-64 lg:h-auto relative">
//             <Image src="/agriculture-hero.jpg" alt="Agriculture landscape" layout="fill" objectFit="cover" priority />
//           </div>
//         </div>
//       </div>
      
//       {/* Features Section */}
//       <div className="py-12 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Discover</h2>
//             <p className="mt-2 text-3xl leading-8 font-extrabold text-gray-900 sm:text-4xl">
//               How AgriConnect Benefits You
//             </p>
//           </div>
//           <div className="mt-10">
//             <dl className="space-y-10 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0">
//               <div className="flex flex-col items-center">
//                 <GlobeAltIcon className="h-12 w-12 text-green-600" aria-hidden="true" />
//                 <dt className="mt-5 text-lg leading-6 font-medium text-gray-900">Global Reach</dt>
//                 <dd className="mt-2 text-base text-gray-700 text-center">
//                   Access markets beyond your local area and connect with buyers and sellers across Africa.
//                 </dd>
//               </div>
//               <div className="flex flex-col items-center">
//                 <UserGroupIcon className="h-12 w-12 text-green-600" aria-hidden="true" />
//                 <dt className="mt-5 text-lg leading-6 font-medium text-gray-900">Community Building</dt>
//                 <dd className="mt-2 text-base text-gray-700 text-center">
//                   Join a vibrant community dedicated to sustainable agriculture.
//                 </dd>
//               </div>
//               <div className="flex flex-col items-center">
//                 <BriefcaseIcon className="h-12 w-12 text-green-600" aria-hidden="true" />
//                 <dt className="mt-5 text-lg leading-6 font-medium text-gray-900">Business Growth</dt>
//                 <dd className="mt-2 text-base text-gray-700 text-center">
//                   Expand your business opportunities and increase your profits with direct connections.
//                 </dd>
//               </div>
//             </dl>
//           </div>
//         </div>
//       </div>

//             {/* Call to Action Section */}
//             <div className="bg-green-700">
//         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
//           <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
//             <span className="block">Ready to transform your agricultural business?</span>
//             <span className="block">Join AgriConnect today.</span>
//           </h2>
//           <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 gap-3">
//             <Link
//               href="/login"
//               className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-green-700 bg-white hover:bg-gray-50"
//             >
//               Sign Up
//             </Link>
//             <Link
//               href="/educational-resources"
//               className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-500"
//             >
//               Learn More
//             </Link>
//           </div>
//         </div>
//       </div>
      
//       {/* Testimonials Section */}
//       <div className="bg-gray-100 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">Real Stories, Real Impact</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl">
//                 <blockquote className="mb-4">
//                   <p className="text-gray-600">"{testimonial.quote}"</p>
//                 </blockquote>
//                 <div className="flex items-center">
//                   <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="rounded-full mr-4" />
//                   <div>
//                     <p className="font-semibold text-gray-900">{testimonial.name}</p>
//                     <p className="text-gray-600 text-sm">{testimonial.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
      
//       {/* Impact Metrics Section */}
//       <div className="bg-green-700 text-white py-16 text-center">
//         <h2 className="text-3xl font-extrabold mb-12">Our Growing Impact</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {impactMetrics.map((metric, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <ChartBarIcon className="h-12 w-12 text-white mb-4" />
//               <p className="text-4xl font-bold">{metric.value}</p>
//               <p className="text-xl">{metric.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }


import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { GlobeAltIcon, UserGroupIcon, BriefcaseIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import Footer from '../components/Footer';

const images = [
  "/agriculture-hero.jpg",
  "/51889.jpg",
  "/STUDIO PC 2094-02.jpg"
];

const testimonials = [
  {
    name: "John Mwangi",
    role: "Smallholder Farmer, Kenya",
    quote: "AgriConnect transformed my farming business by connecting me directly with buyers across East Africa.",
    avatar: "/farmer-avatar-1.jpg"
  },
  {
    name: "Maria Rodrigues",
    role: "Agricultural Buyer, Tanzania",
    quote: "The platform's transparency and real-time market insights have been game-changing for our procurement strategy.",
    avatar: "/buyer-avatar-1.jpg"
  }
];

const impactMetrics = [
  { value: "5,000+", label: "Farmers Connected" },
  { value: "$2.5M", label: "Total Transactions" },
  { value: "12", label: "Countries Served" }
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeIn(true);
      }, 1000); // Time for fade-out transition
    }, 5000); // Time before changing image

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 lg:mt-0 lg:py-20">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-green-700 sm:text-5xl md:text-6xl">
                Welcome to AgriConnect
              </h1>
              <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Connecting farmers to buyers across Africa, bridging the gap between agricultural producers and consumers.
              </p>
              <div className="mt-5 sm:mt-8 flex justify-center lg:justify-start">
                <Link href="/login" className="px-8 py-3 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-64 lg:h-auto relative">
            <Image
              src={images[currentImageIndex]}
              alt="Agriculture landscape"
              layout="fill"
              objectFit="cover"
              priority
              className={`transition-opacity duration-1000 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
              key={currentImageIndex}
            />
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Discover</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold text-gray-900 sm:text-4xl">
              How AgriConnect Benefits You
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0">
              <div className="flex flex-col items-center">
                <GlobeAltIcon className="h-12 w-12 text-green-600" aria-hidden="true" />
                <dt className="mt-5 text-lg leading-6 font-medium text-gray-900">Global Reach</dt>
                <dd className="mt-2 text-base text-gray-700 text-center">
                  Access markets beyond your local area and connect with buyers and sellers across Africa.
                </dd>
              </div>
              <div className="flex flex-col items-center">
                <UserGroupIcon className="h-12 w-12 text-green-600" aria-hidden="true" />
                <dt className="mt-5 text-lg leading-6 font-medium text-gray-900">Community Building</dt>
                <dd className="mt-2 text-base text-gray-700 text-center">
                  Join a vibrant community dedicated to sustainable agriculture.
                </dd>
              </div>
              <div className="flex flex-col items-center">
                <BriefcaseIcon className="h-12 w-12 text-green-600" aria-hidden="true" />
                <dt className="mt-5 text-lg leading-6 font-medium text-gray-900">Business Growth</dt>
                <dd className="mt-2 text-base text-gray-700 text-center">
                  Expand your business opportunities and increase your profits with direct connections.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-green-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to transform your agricultural business?</span>
            <span className="block">Join AgriConnect today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 gap-3">
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-green-700 bg-white hover:bg-gray-50"
            >
              Sign Up
            </Link>
            <Link
              href="/educational-resources"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-500"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">Real Stories, Real Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl">
                <blockquote className="mb-4">
                  <p className="text-gray-600">"{testimonial.quote}"</p>
                </blockquote>
                <div className="flex items-center">
                  <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="rounded-full mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Impact Metrics Section */}
      <div className="bg-green-700 text-white py-16 text-center">
        <h2 className="text-3xl font-extrabold mb-12">Our Growing Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center">
              <ChartBarIcon className="h-12 w-12 text-white mb-4" />
              <p className="text-4xl font-bold">{metric.value}</p>
              <p className="text-xl">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
