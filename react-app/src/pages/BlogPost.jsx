import { Link } from 'react-router-dom';
import fresherImg from '../assets/fresher_league_recap_1775765383248.png';

const BlogPost = () => {
  return (
    <div className="px-12 py-12 max-w-4xl mx-auto blog-content">
      {/* Breadcrumb */}
      <div className="mb-12 flex items-center gap-3 text-xs font-label uppercase tracking-widest text-on-surface-variant/50">
        <Link to="/blogs" className="hover:text-primary transition-colors">Archive</Link>
        <span>/</span>
        <span className="text-primary">Event Recap</span>
      </div>

      {/* Header */}
      <h1 className="text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8 text-on-surface">Fresher's Chess League 2026: An Absolute Thriller!</h1>
      
      {/* Metadata */}
      <div className="flex items-center gap-6 mb-12 border-b border-outline-variant/15 pb-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full border border-primary/20 p-0.5">
            <img alt="Author" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaAlIqrr8k378NDrG6yLqQm8_fueXgk5fHBbuh-_ahSVxtDMXTYYaEUzzuKUDsNo86BQu3NXY73hAz9aV3L9KIzJfHJsxU5EVXAxNk1wdJge-3tW5C8XSkobeDhig_yfNM5zzDmo8C0HexWJcUumwjOQEvWOm8FZA3c5EZRWEWeRzgZj15SEoERDr3kDntSGYElCKxiv-dApp91iBQahaEUC4GJkmemodr5ry5p5Dl8hkFAaPH9KpUyQT6yggglxuRYhuIcxEP3Do"/>
          </div>
          <div>
            <p className="text-sm font-bold text-on-surface">Tanmay Sahare</p>
            <p className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Tournament Coordinator</p>
          </div>
        </div>
        <div className="h-8 w-px bg-outline-variant/30"></div>
        <div className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant pt-1">
          April 02, 2026 • 8 Min Read
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[400px] rounded-xl overflow-hidden mb-16 relative shadow-2xl shadow-black/50">
        <img alt="Fresher's Chess League Recap" className="w-full h-full object-cover" src={fresherImg}/>
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
      </div>

      {/* Article Body */}
      <article className="font-body text-lg text-on-surface-variant">
        <p className="text-2xl text-on-surface font-serif leading-relaxed mb-10 first-letter:float-left first-letter:text-7xl first-letter:pr-4 first-letter:font-serif first-letter:text-primary">
          Recapping the absolute hype surrounding the offline auctions in the Senate Hall, analyzing the intense Round Robin pool matches at the OAT, and spotlighting the brilliant knockout blunders that ultimately led the underdogs to gold memberships.
        </p>
        
        <p>The Fresher's Chess League this year was nothing short of a spectacle! Over 60 incoming freshers registered for the 8-player team slots. The offline auction was a chaotic flurry of bids, calculations, and pure adrenaline as captains scrambled to build the ultimate 8-person squads within their limited budgets.</p>
        
        <h3>The Bloodbath of Round Robin Pool B</h3>
        <p>While Pool A saw a clean sweep by the pre-tournament favorites, Pool B turned into an absolute bloodbath. Three teams finished with equal match points, leading to a nail-biting tiebreaker sequence built squarely on total board points. It came down to a single 10+5 rapid match on Board 4, where a shocking Queen blunder shifted the entire trajectory of the tournament.</p>

        <blockquote>
          "I didn't even see the bishop parked on c8. The 5-second increment wasn't enough to save me from the tactical blindness!"
        </blockquote>

        <p>That blunder sent the underdogs skyrocketing into the semifinals, proving once again that Over-The-Board (OTB) chess under time pressure is a completely different beast compared to playing online in the comfort of a dorm room.</p>

        <h3>The Finals & The Loot</h3>
        <p>The atmosphere at the OAT for the finals was electric. The crowd watched in silence as the decisive match extended into a grinding endgame where a solitary knight and two passed pawns overcame a defending rook. The tension broke into massive applause as the resignation came through.</p>
        
        <div className="my-12 p-8 bg-surface-container-low border border-outline-variant/15 rounded-xl">
          <h4 className="text-primary font-label text-xs uppercase tracking-widest mb-4">The Spoils of War</h4>
          <p className="text-sm font-serif italic m-0">Congratulations to the winning team for securing the coveted 8 Gold Memberships! Furthermore, we distributed Mama Mio Discount coupons to the top 50 participants, ensuring nobody went home empty-handed after such an incredible display of intellectual stamina.</p>
        </div>

        <p>If you missed this event, don't worry! Keep grinding your tactics, analyzing your blunders, and we will see you back on the board for the upcoming IITK Grand Swiss qualifiers!</p>
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
