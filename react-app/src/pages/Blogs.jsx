import { useState } from 'react';
import { Link } from 'react-router-dom';

const BLOG_POSTS = [
  {
    id: 2,
    title: "The Zen of Pawn Structures",
    date: "August 24, 2024",
    tag: "Endgame Mastery",
    excerpt: "Understanding the skeletal framework of the game. How isolated pawns dictate the flow of tactical exchanges in the late midgame.",
    author: "Rohan Sharma",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBIuwAzHidegculqXCV5fm1P4dFV-dYeDOxYc-m-uYvDljOi3bRiQexEH-kLDIj0JNQZ2xgx2CAjtu8Fs41WDkaV3NtZdTvY0SZ4d8dFnm3SBo_5_LsCnpboHleJDVgNldgh1YJ0eyTQUTCGlUhean20dG2QanCM-2KoKgfwAA6EC5SBroSKNvFUzh5d1jOUdoVU_2ly9r06a3QV_Ar-QLYQF-xYdiliWNGAnQM9OoeZHVrHGKz8mVBLVAMzNtt8F53PUoQEPbGbc"
  },
  {
    id: 3,
    title: "Clock Pressure and Decision Fatigue",
    date: "August 18, 2024",
    tag: "Psychology",
    excerpt: "Analyzing how Grandmasters manage cognitive load during the final 5 minutes of a classical match.",
    author: "Dr. S. Mehta",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzHqkkA6gFYsKdpzs-bHSmUzHPVfDqjfoVzNwOoOKNSrbUOajHbHmVXwvYwO0oj57_4vxt6htYsR0C1zIIe8VCce0sAelMHyDc7pZOvmTahSm-eWMtSGybl9g3ma_gsCOiwVDON4vAd4GZ3xL6bNifeR5YKRMl4UU2mBDues0W8O4CM7Kg0MX_010iqd4Er1EC4kqDXIlwmhy0zxh-0GjCLigWghxcGPe4fGgv3VZBUAmFQBZMMuddqUByrMnlNTq8ZRnAhXCiMso"
  },
  {
    id: 4,
    title: "Beyond Stockfish: The Neural Revolution",
    date: "August 12, 2024",
    tag: "Future of Play",
    excerpt: "How AlphaZero and Leela Chess Zero changed the way we value traditional positional advantages vs tactical volatility.",
    author: "Vikram Malhotra",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATNZwg-CHeY6AAzEe7l-oJoqooTC6SaHL2GCFmbr0v8XAv8ONkoP3em_EZOGG4FZAQIIWsn65_lMUKtp2G2MOCiQ4LKrLBTk2YiDb40GNNLM4BYbeTZvyKNq2WfKBbE4jDhfj4qBN-dVTVWeEzUSQyWwAQbs4OXW7tZdJIwgofAufIMWvp9SaYdcD-tIlR6mhp-ToG84qTWsP_JK71j8GFweiOz7JAWzo_JfjiWGL1_5sOCeIQZSQSAeEMz3jLvIjD528OI59FB6I"
  }
];

const Blogs = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  return (
    <div className="px-12 pb-20 max-w-7xl">
      <section className="relative mb-20 group mt-8">
        <div className="grid grid-cols-12 gap-0 overflow-hidden rounded-xl bg-surface-container-low border border-[#4d4635]/10">
          <div className="col-span-12 lg:col-span-7 h-[500px] overflow-hidden">
            <img alt="Chess Strategy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS-eIizGJpmQmjHuOCfHMLqnTcUQqFctyjRhaLApePIUb4-IDEXr8rKa28SKfo040roxiMdMPmjJWHQkWuGOWhkoQ7wsgSvzGZM9zVs2Skwh2weMFInVcr7GaMYinDuLmtziSq7uYyAv2vyhtPyByAkV3P5w6ZGOjNeIjj6UTy2-jBSCEhaJUmAehtyp8v3gBz_dDrlLa3DMLll8pb4_5rzKb2B7Gm7O3TLfzxAOgPuBYU_Ulm0b33QQpT21ndhfCQibyMkwLkIMI" />
          </div>
          <div className="col-span-12 lg:col-span-5 p-12 flex flex-col justify-center bg-surface-container">
            <div className="flex items-center space-x-3 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-label tracking-widest uppercase rounded-full">Theory & Strategy</span>
              <span className="text-on-surface-variant/40 text-[10px] font-label uppercase">12 Min Read</span>
            </div>
            <h2 className="text-5xl font-serif font-bold leading-tight mb-6 text-on-surface">Mastering the Sicilian Defense: The Najdorf Variation</h2>
            <p className="text-on-surface-variant font-body leading-relaxed mb-8 text-sm">
              Explore the high-stakes world of the Najdorf, where a single inaccuracy can lead to immediate collapse. We break down the positional nuances of the d5 square and the legendary Fischer-Geller encounters that shaped modern theory.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface">Arjun K. Prasad</p>
                  <p className="text-[10px] text-on-surface-variant">Grandmaster-in-Residence</p>
                </div>
              </div>
              <Link to="/blog/1" className="text-primary font-label text-xs uppercase tracking-widest border-b border-primary/30 pb-1 hover:border-primary transition-all">Read Thesis</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-end justify-between mb-12">
        <div>
          <h3 className="text-xs font-label uppercase tracking-[0.2em] text-primary mb-2">The Archive</h3>
          <h4 className="text-4xl font-serif font-bold">Latest Dispatches</h4>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-2 border rounded-md transition-colors ${viewMode === 'grid' ? 'border-primary text-primary bg-primary/10' : 'border-outline-variant/20 text-on-surface-variant hover:text-primary hover:border-primary/50'}`}
          >
            <span className="material-symbols-outlined">grid_view</span>
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`p-2 border rounded-md transition-colors ${viewMode === 'list' ? 'border-primary text-primary bg-primary/10' : 'border-outline-variant/20 text-on-surface-variant hover:text-primary hover:border-primary/50'}`}
          >
            <span className="material-symbols-outlined">view_agenda</span>
          </button>
        </div>
      </div>

      <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col space-y-6 max-w-4xl"}>
        {BLOG_POSTS.map(post => (
          <Link key={post.id} to={`/blog/${post.id}`} className={`flex bg-surface-container-low group cursor-pointer border border-transparent hover:border-outline-variant/20 transition-all duration-300 ${viewMode === 'grid' ? 'flex-col' : 'flex-col md:flex-row'}`}>
            <div className={`overflow-hidden relative ${viewMode === 'grid' ? 'h-64' : 'h-48 md:h-full md:w-64 flex-shrink-0'}`}>
              <img alt={post.tag} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={post.image} />
              <div className="absolute top-4 left-4">
                <span className="bg-surface/80 backdrop-blur-md px-3 py-1 text-[9px] font-label tracking-widest uppercase text-on-surface rounded-sm">{post.tag}</span>
              </div>
            </div>
            <div className={`flex flex-col flex-grow ${viewMode === 'grid' ? 'p-8' : 'p-6 md:p-8'}`}>
              <span className="text-[10px] font-label text-on-surface-variant/50 uppercase mb-3">{post.date}</span>
              <h5 className="text-xl font-serif font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h5>
              <p className={`text-sm text-on-surface-variant leading-relaxed line-clamp-3 ${viewMode === 'grid' ? 'mb-6' : 'mb-4'}`}>
                {post.excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-[10px] font-label text-on-surface uppercase">By {post.author}</span>
                <span className="material-symbols-outlined text-primary text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

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
};

export default Blogs;
