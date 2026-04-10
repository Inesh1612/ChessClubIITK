import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import tournamentImg from '../assets/chess_tournament_gallery_1775821881801.png';
import workshopImg from '../assets/chess_workshop_gallery_1775821901249.png';
import socialImg from '../assets/chess_social_gallery_1775821917712.png';

const GALLERY_IMAGES = [
  {
    id: 1,
    category: 'Tournaments',
    title: 'Inter-Hall Championship 2026',
    image: tournamentImg,
    description: 'High-stakes tactical battles in the Senate Hall.'
  },
  {
    id: 2,
    category: 'Workshops',
    title: 'Masterclass with FIDE Trainers',
    image: workshopImg,
    description: 'Deconstructing the Sicilian Defense with our core team.'
  },
  {
    id: 3,
    category: 'Socials',
    title: 'Blitz & Chill Night',
    image: socialImg,
    description: 'Late night sessions filled with coffee and 3-minute madness.'
  },
  {
    id: 4,
    category: 'Tournaments',
    title: 'IITK Grand Swiss',
    image: tournamentImg,
    description: 'The road to the candidates starts here.'
  },
  {
    id: 5,
    category: 'Workshops',
    title: 'Basics for Freshers',
    image: workshopImg,
    description: 'Empowering the next generation of grandmasters.'
  },
  {
    id: 6,
    category: 'Socials',
    title: 'Farewell Blitz 2025',
    image: socialImg,
    description: 'Honoring our graduating legends with one last match.'
  }
];

const CATEGORIES = ['All', 'Tournaments', 'Workshops', 'Socials'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <div className="px-12 pb-20 max-w-7xl mx-auto min-h-screen">
      <header className="py-16 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary font-label text-xs tracking-[0.4em] uppercase mb-4"
        >
          Visual Archive
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl font-serif italic mb-8"
        >
          The Gallery of <span className="text-primary">Kings</span>
        </motion.h1>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {CATEGORIES.map((cat, idx) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + (idx * 0.05) }}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === cat 
                ? 'bg-primary text-on-primary border-primary shadow-lg shadow-primary/20' 
                : 'bg-surface-container border-outline-variant/30 text-on-surface-variant hover:border-primary/50'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </header>

      {/* Image Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode='popLayout'>
          {filteredImages.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all shadow-lg"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={img.image} 
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[9px] font-label text-primary uppercase tracking-[0.2em] mb-2 block">{img.category}</span>
                <h3 className="text-xl font-serif text-on-surface mb-2 group-hover:text-primary transition-colors">{img.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                  {img.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="py-20 text-center text-on-surface-variant/50 italic">
          No captures found in this archive yet.
        </div>
      )}

      {/* Footer Decoration */}
      <footer className="mt-32 pt-16 border-t border-outline-variant/5 text-center">
        <p className="text-[10px] font-label uppercase tracking-[0.5em] text-on-surface-variant/30">
          Capturing the soul of the move since 2007
        </p>
      </footer>
    </div>
  );
};

export default Gallery;
