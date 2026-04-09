import React from 'react';
import profileImg from '../assets/profile_image.webp';

const COORDINATORS = [
  {
    id: 'coord-0',
    name: "Akshat Srivastava",
    role: "Coordinator",
    funnyDescription: `"Placeholder funny quote or description goes here. Maybe they like cats or play e4 exclusively?"`,
    email: `akshat@iitk.ac.in`,
    image: profileImg
  },
  {
    id: 'coord-1',
    name: "Kushagra Shukla",
    role: "Coordinator",
    funnyDescription: `"Placeholder funny quote or description goes here. Maybe they like cats or play e4 exclusively?"`,
    email: `kushagra@iitk.ac.in`,
    image: profileImg
  },
  {
    id: 'coord-2',
    name: "Tanmay Sahare",
    role: "Coordinator",
    funnyDescription: `"Placeholder funny quote or description goes here. Maybe they like cats or play e4 exclusively?"`,
    email: `tanmay@iitk.ac.in`,
    image: profileImg
  }
];

const SECRETARIES = Array.from({ length: 20 }, (_, i) => ({
  id: `sec-${i}`,
  name: `Secretary Name ${i + 1}`,
  role: "Secretary",
  funnyDescription: `"A very funny description placeholder highlighting their quirk."`,
  email: `sec${i+1}@iitk.ac.in`,
  image: profileImg
}));

const ContactCard = ({ person }) => (
  <div className="flex flex-col bg-surface-container-low group cursor-pointer border border-transparent hover:border-outline-variant/20 transition-all duration-300 rounded-lg overflow-hidden h-full">
    <div className="overflow-hidden relative h-64 flex-shrink-0">
      <img alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" src={person.image} />
      <div className="absolute top-4 left-4">
        <span className="bg-surface/80 backdrop-blur-md px-3 py-1 text-[9px] font-label tracking-widest uppercase text-on-surface rounded-sm">{person.role}</span>
      </div>
    </div>
    <div className="flex flex-col flex-grow p-6 text-center">
      <h5 className="text-xl font-serif font-bold mb-1 group-hover:text-primary transition-colors">{person.name}</h5>
      <a href={`mailto:${person.email}`} className="text-[10px] font-mono text-primary/80 hover:text-primary transition-colors mb-3 tracking-wider block hover:underline">{person.email}</a>
      <p className="text-sm text-on-surface-variant italic leading-relaxed mb-4">
        {person.funnyDescription}
      </p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div className="px-12 pb-20 max-w-7xl mx-auto">
      {/* Coordinators Section */}
      <section className="mb-20 mt-12">
        <div className="flex flex-col items-center mb-12 text-center">
          <h3 className="text-xs font-label uppercase tracking-[0.2em] text-primary mb-2">The Leadership</h3>
          <h2 className="text-5xl font-serif font-bold tracking-tighter text-on-surface">Coordinators</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COORDINATORS.map(person => (
            <ContactCard key={person.id} person={person} />
          ))}
        </div>
      </section>

      {/* Secretaries Section */}
      <section className="mb-20">
        <div className="flex flex-col items-center mb-12 text-center">
          <h3 className="text-xs font-label uppercase tracking-[0.2em] text-primary mb-2">The Core Team</h3>
          <h2 className="text-5xl font-serif font-bold tracking-tighter text-on-surface">Secretaries</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {SECRETARIES.map(person => (
            <ContactCard key={person.id} person={person} />
          ))}
        </div>
      </section>
      
      {/* Footer matching Blogs.jsx */}
      <footer className="bg-surface-container-lowest py-16 px-12 border-t border-outline-variant/10 mt-20 -mx-12 -mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="max-w-xs mb-10 md:mb-0">
            <h6 className="text-xl font-serif italic text-primary mb-4">Chess Club IITK</h6>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              The official intellectual repository and match-log of the Chess Club at the Indian Institute of Technology, Kanpur. Founded for the love of the game, sustained by the pursuit of logic.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <p className="text-[10px] font-label uppercase tracking-widest text-primary mb-6">Explore</p>
              <ul className="space-y-3 text-xs text-on-surface-variant">
                <li><span className="hover:text-on-surface cursor-pointer">Archive</span></li>
                <li><span className="hover:text-on-surface cursor-pointer">Theory</span></li>
                <li><span className="hover:text-on-surface cursor-pointer">Rankings</span></li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-label uppercase tracking-widest text-primary mb-6">Club</p>
              <ul className="space-y-3 text-xs text-on-surface-variant">
                <li><span className="hover:text-on-surface cursor-pointer">About Us</span></li>
                <li><span className="hover:text-on-surface cursor-pointer">Constitution</span></li>
                <li><span className="hover:text-on-surface cursor-pointer">Contact</span></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-[10px] font-label uppercase tracking-widest text-primary mb-6">Connect</p>
              <div className="flex space-x-4">
                <span className="w-8 h-8 rounded-full border border-outline-variant/30 flex items-center justify-center hover:border-primary text-on-surface-variant hover:text-primary transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-sm">share</span>
                </span>
                <span className="w-8 h-8 rounded-full border border-outline-variant/30 flex items-center justify-center hover:border-primary text-on-surface-variant hover:text-primary transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-sm">mail</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-outline-variant/5 flex justify-between items-center text-[10px] font-label uppercase tracking-widest text-on-surface-variant/30">
          <span>© 2024 Chess Club IITK. Intellectual Property Reserved.</span>
          <span>Est. 1960</span>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
