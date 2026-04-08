import { Link } from 'react-router-dom';

const BlogPost = () => {
  return (
    <div className="px-12 py-12 max-w-4xl mx-auto blog-content">
      {/* Breadcrumb */}
      <div className="mb-12 flex items-center gap-3 text-xs font-label uppercase tracking-widest text-on-surface-variant/50">
        <Link to="/blogs" className="hover:text-primary transition-colors">Archive</Link>
        <span>/</span>
        <span className="text-primary">Theory & Strategy</span>
      </div>

      {/* Header */}
      <h1 className="text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8 text-on-surface">The Zen of Pawn Structures</h1>
      
      {/* Metadata */}
      <div className="flex items-center gap-6 mb-12 border-b border-outline-variant/15 pb-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full border border-primary/20 p-0.5">
            <img alt="Author" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaAlIqrr8k378NDrG6yLqQm8_fueXgk5fHBbuh-_ahSVxtDMXTYYaEUzzuKUDsNo86BQu3NXY73hAz9aV3L9KIzJfHJsxU5EVXAxNk1wdJge-3tW5C8XSkobeDhig_yfNM5zzDmo8C0HexWJcUumwjOQEvWOm8FZA3c5EZRWEWeRzgZj15SEoERDr3kDntSGYElCKxiv-dApp91iBQahaEUC4GJkmemodr5ry5p5Dl8hkFAaPH9KpUyQT6yggglxuRYhuIcxEP3Do"/>
          </div>
          <div>
            <p className="text-sm font-bold text-on-surface">Rohan Sharma</p>
            <p className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Guest Contributor</p>
          </div>
        </div>
        <div className="h-8 w-px bg-outline-variant/30"></div>
        <div className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant pt-1">
          August 24, 2024 • 12 Min Read
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[400px] rounded-xl overflow-hidden mb-16 relative shadow-2xl shadow-black/50">
        <img alt="Pawn structure strategy" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBIuwAzHidegculqXCV5fm1P4dFV-dYeDOxYc-m-uYvDljOi3bRiQexEH-kLDIj0JNQZ2xgx2CAjtu8Fs41WDkaV3NtZdTvY0SZ4d8dFnm3SBo_5_LsCnpboHleJDVgNldgh1YJ0eyTQUTCGlUhean20dG2QanCM-2KoKgfwAA6EC5SBroSKNvFUzh5d1jOUdoVU_2ly9r06a3QV_Ar-QLYQF-xYdiliWNGAnQM9OoeZHVrHGKz8mVBLVAMzNtt8F53PUoQEPbGbc"/>
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
      </div>

      {/* Article Body */}
      <article className="font-body text-lg text-on-surface-variant">
        <p className="text-2xl text-on-surface font-serif leading-relaxed mb-10 first-letter:float-left first-letter:text-7xl first-letter:pr-4 first-letter:font-serif first-letter:text-primary">
          Understanding the skeletal framework of the game. How isolated pawns dictate the flow of tactical exchanges in the late midgame.
        </p>
        
        <p>Pawns are often the most undervalued pieces on the board by beginners. Yet, as François-André Danican Philidor aptly observed centuries ago, they are the very soul of the game. To master chess at the club level and beyond, one must shift focus from flashy tactical combinations to the quiet, structural underpinnings dictated by pawn formations.</p>
        
        <h3>The Anatomy of an Isolated Queen's Pawn (IQP)</h3>
        <p>The IQP is a double-edged sword. On one hand, it grants its possessor a spatial advantage, clear development paths for the pieces, and outposts for knights (typically on e5 or c5). The absence of adjacent pawns means lines are open; an attacking posture is not just an option, it's a requirement.</p>

        <blockquote>
          "The player with the isolated pawn must attack; if the game reaches an endgame, the structural weakness becomes fatal."
        </blockquote>

        <p>Conversely, the player defending against the IQP has a clear strategic blueprint: neutralize the attack, simplify the position through piece exchanges, and blockade the pawn. A knight firmly planted in front of the IQP is one of the most mechanically satisfying positions to hold in chess.</p>

        <h3>Creating Structural Tension</h3>
        <p>Chess is a game of tension. Structural tension arises when pawn advances create points of contact where neither player immediately resolves the capture. This ambiguity forces both sides to constantly calculate the potential consequences of the pawn exchange.</p>
        
        <div className="my-12 p-8 bg-surface-container-low border border-outline-variant/15 rounded-xl">
          <h4 className="text-secondary font-label text-xs uppercase tracking-widest mb-4">Tactical Exercise</h4>
          <p className="text-sm font-serif italic m-0">In your next practice match, intentionally accept an isolated pawn position in the opening. Observe how it fundamentally alters your piece development strategy.</p>
        </div>

        <p>By learning to maintain tension rather than prematurely dissolving it, you force your opponent to allocate mental resources to the calculation of that specific sector, increasing the likelihood of an error elsewhere on the board.</p>
      </article>

      {/* Footer Nav */}
      <div className="mt-20 border-t border-outline-variant/15 pt-10 flex items-center justify-between">
        <Link to="/blogs" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm font-label uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Archive
        </Link>
        <div className="flex gap-4">
            <span className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center text-on-surface hover:border-primary hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
            </span>
            <span className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center text-on-surface hover:border-primary hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-sm">share</span>
            </span>
        </div>
      </div>
    </div>
  );
};
export default BlogPost;
