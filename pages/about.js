// import React from 'react';
// import Layout from '../components/Layout';
// import Footer from '../components/Footer';

// const teamMembers = [
//   {
//     name: 'Jane Doe',
//     role: 'Founder & CEO',
//     bio: 'Agricultural expert with 15 years of experience in sustainable farming technologies.'
//   },
//   {
//     name: 'John Smith',
//     role: 'Chief Technology Officer',
//     bio: 'Innovative technologist specializing in agricultural IoT and data analytics.'
//   },
//   {
//     name: 'Emily Chen',
//     role: 'Head of Research',
//     bio: 'PhD in Agricultural Sciences with focus on crop optimization and climate resilience.'
//   }
// ];

// export default function About() {
//   return (
//     // <Layout>
//       <div className="container mx-auto px-4 py-8">
//         <section className="mb-12">
//           <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">About AgriConnect</h1>
//           <div className="max-w-3xl mx-auto text-center text-gray-700">
//             <p className="mb-4">
//               AgriConnect is a mission-driven technology company dedicated to transforming agriculture through innovative solutions. 
//               We combine cutting-edge technology with deep agricultural expertise to empower farmers worldwide.
//             </p>
//             <p>
//               Our goal is to create sustainable, efficient, and data-driven agricultural practices that address global food security challenges.
//             </p>
//           </div>
//         </section>

//         <section>
//           <h2 className="text-3xl font-semibold text-green-700 mb-8 text-center">Our Team</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {teamMembers.map((member, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white shadow-lg rounded-lg p-6 text-center transform transition hover:scale-105"
//               >
//                 <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
//                   <span className="text-2xl font-bold text-green-700">
//                     {member.name.split(' ').map(n => n[0]).join('')}
//                   </span>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
//                 <p className="text-green-600 mb-2">{member.role}</p>
//                 <p className="text-gray-600">{member.bio}</p>
//               </div>

              
//             ))}
//           </div>
//         </section>

//         <Footer/>
//       </div>
//     // </Layout>
//   );
// }

import React from 'react';
// import Layout from '../components/Layout';
import Footer from '../components/Footer';

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Founder & CEO',
    bio: 'Agricultural expert with 15 years of experience in sustainable farming technologies.',
  },
  {
    name: 'John Smith',
    role: 'Chief Technology Officer',
    bio: 'Innovative technologist specializing in agricultural IoT and data analytics.',
  },
  {
    name: 'Emily Chen',
    role: 'Head of Research',
    bio: 'PhD in Agricultural Sciences with focus on crop optimization and climate resilience.',
  },
];

export default function About() {
  return (
    // <Layout>
    <>
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">About AgriConnect</h1>
          <div className="max-w-3xl mx-auto text-center text-gray-700">
            <p className="mb-4">
              AgriConnect is a mission-driven technology company dedicated to transforming agriculture through innovative
              solutions. We combine cutting-edge technology with deep agricultural expertise to empower farmers worldwide.
            </p>
            <p>
              Our goal is to create sustainable, efficient, and data-driven agricultural practices that address global
              food security challenges.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-green-700 mb-8 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center transform transition hover:scale-105"
              >
                <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-700">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-green-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Move the Footer outside of the container div */}
      <Footer />
    </>
    // </Layout>
  );
}
