import { useState, useEffect, useRef } from 'react';

const DEFAULT_PROFILE = {
  name: "Aryan Verma",
  handle: "GRANDMASTER_V",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaAlIqrr8k378NDrG6yLqQm8_fueXgk5fHBbuh-_ahSVxtDMXTYYaEUzzuKUDsNo86BQu3NXY73hAz9aV3L9KIzJfHJsxU5EVXAxNk1wdJge-3tW5C8XSkobeDhig_yfNM5zzDmo8C0HexWJcUumwjOQEvWOm8FZA3c5EZRWEWeRzgZj15SEoERDr3kDntSGYElCKxiv-dApp91iBQahaEUC4GJkmemodr5ry5p5Dl8hkFAaPH9KpUyQT6yggglxuRYhuIcxEP3Do"
};

const UserProfile = () => {
  const [profile, setProfile] = useState(DEFAULT_PROFILE);
  const [isEditing, setIsEditing] = useState(false);
  const [participations, setParticipations] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem('chess-club-user-profile');
    if (saved) {
      try {
        setProfile(JSON.parse(saved));
      } catch (e) {
        console.error("Could not parse profile");
      }
    }
    const savedParts = localStorage.getItem('chess-club-participations');
    if (savedParts) {
      try {
        setParticipations(JSON.parse(savedParts));
      } catch (e) {
        console.error("Could not parse participations");
      }
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('chess-club-user-profile', JSON.stringify(profile));
    setIsEditing(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="px-12 py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Player Identity */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-gradient-to-b from-[#201f1f] to-[#131313] rounded-3xl p-8 border border-[#4d4635]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4af37]/10 rounded-bl-full blur-3xl transition-opacity duration-700"></div>
            
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="relative mb-6">
                <div 
                  className={`w-32 h-32 rounded-2xl border border-outline-variant/30 overflow-hidden shadow-2xl relative ${isEditing ? 'cursor-pointer ring-2 ring-primary ring-offset-4 ring-offset-[#131313]' : 'ring-1 ring-white/10'}`}
                  onClick={() => isEditing && fileInputRef.current?.click()}
                >
                  <img 
                    alt="Player Profile Avatar" 
                    className={`w-full h-full object-cover transition-all duration-500 ${isEditing ? 'brightness-50' : 'brightness-90 group-hover:brightness-100'}`} 
                    src={profile.avatar}
                  />
                  {isEditing && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-80 hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined mb-1 text-2xl">photo_camera</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold">Replace</span>
                    </div>
                  )}
                </div>

                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
              
              <div className="mt-4 mb-8 w-full flex flex-col items-center">
                {isEditing ? (
                  <input 
                    type="text" 
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    className="text-3xl font-serif text-center bg-transparent border-b-2 border-primary/50 text-white mb-2 pb-1 focus:outline-none focus:border-primary transition-colors w-full"
                    placeholder="Grandmaster Name"
                  />
                ) : (
                  <h2 className="text-3xl font-serif text-on-surface mb-2 tracking-tight drop-shadow-md">{profile.name}</h2>
                )}

                {isEditing ? (
                  <input 
                    type="text" 
                    value={profile.handle}
                    onChange={(e) => setProfile({...profile, handle: e.target.value})}
                    className="text-xs text-center font-label tracking-[0.2em] bg-transparent border-b border-outline-variant/30 text-on-surface-variant pb-1 focus:outline-none focus:border-primary transition-colors w-3/4 mx-auto"
                    placeholder="HANDLE"
                  />
                ) : (
                  <p className="text-primary/70 font-label text-xs tracking-[0.2em]">{profile.handle}</p>
                )}
              </div>

              {/* Stats Box */}
              <div className="w-full flex bg-[#131313]/80 rounded-xl mb-8 border border-outline-variant/5 shadow-inner backdrop-blur-md">
                <div className="flex-1 py-4 border-r border-outline-variant/10 text-center hover:bg-surface-container/50 transition-colors rounded-l-xl">
                  <p className="text-[9px] text-on-surface-variant uppercase tracking-widest mb-1 font-bold">Standard</p>
                  <p className="text-2xl font-serif text-primary">2140</p>
                </div>
                <div className="flex-1 py-4 text-center hover:bg-surface-container/50 transition-colors rounded-r-xl">
                  <p className="text-[9px] text-on-surface-variant uppercase tracking-widest mb-1 font-bold">Blitz</p>
                  <p className="text-2xl font-serif text-[#e5e2e1]">2285</p>
                </div>
              </div>

              {isEditing ? (
                <button 
                  onClick={handleSave}
                  className="w-full bg-primary text-on-primary py-3.5 rounded-xl font-bold text-sm tracking-widest uppercase shadow-[0_10px_20px_rgba(212,175,55,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all outline-none"
                >
                  Save Changes
                </button>
              ) : (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="w-full bg-[#f2ca50] hover:bg-[#d4af37] text-[#3c2f00] py-3.5 rounded-xl font-bold text-sm tracking-widest uppercase shadow-lg hover:-translate-y-1 transition-all outline-none"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Ledger */}
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-outline-variant/15">
            <h3 className="text-2xl font-serif text-on-surface">The Personal Ledger</h3>
          </div>

          <div className="space-y-4">
            {participations.length === 0 ? (
              <div className="text-center py-12 bg-[#1c1b1b] border border-[#4d4635]/10 rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant/30 mb-2">confirmation_number</span>
                <p className="text-sm text-on-surface-variant">No participations on record yet.</p>
              </div>
            ) : (
              participations.map((part, idx) => (
                <div key={part.id || idx} className="grid grid-cols-12 gap-4 items-center bg-[#1c1b1b] rounded-xl p-4 md:p-6 border border-[#4d4635]/10 hover:border-primary/30 transition-colors cursor-pointer group shadow-sm">
                  <div className="col-span-3 md:col-span-2 text-center md:border-r border-outline-variant/10 relative">
                    <span className="block text-[10px] uppercase text-on-surface-variant tracking-widest mb-1">Status</span>
                    <span className="text-sm font-label font-bold text-primary">CONFIRMED</span>
                  </div>
                  <div className="col-span-9 md:col-span-6 flex items-center gap-4 px-0 md:px-4">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-surface-container-highest rounded-full border border-outline-variant/20 shadow-inner">
                        <span className="material-symbols-outlined text-on-surface-variant">
                          {part.tag === 'Tournament' ? 'emoji_events' : part.tag === 'Workshop' ? 'school' : 'local_play'}
                        </span>
                    </div>
                    <div>
                      <p className="text-sm text-on-surface font-bold truncate max-w-[150px] sm:max-w-none">{part.title}</p>
                      <p className="text-xs text-on-surface-variant mt-1">{part.tag}</p>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4 flex items-center justify-between md:justify-end gap-6 mt-4 md:mt-0 opacity-70 group-hover:opacity-100 transition-opacity">
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Time</p>
                      <p className="text-xs font-bold text-on-surface truncate max-w-[80px]">{part.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Date</p>
                      <p className="text-xs font-bold text-on-surface">{part.date}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <button className="w-full mt-6 py-4 border border-outline-variant/20 border-dashed rounded-xl text-xs font-label uppercase tracking-widest text-on-surface-variant hover:text-primary hover:border-primary/50 bg-[#1c1b1b]/50 hover:bg-[#1c1b1b] transition-all">
            Load Historical Archives
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
