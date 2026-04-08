import { useState } from 'react';
import { Link } from 'react-router-dom';

export const OFFICIAL_EVENTS = [
  {
    id: 1,
    title: "Grandmaster Simultaneous Exhibition",
    date: "October 25, 2024",
    tag: "Exhibition",
    time: "14:00 - 18:00",
    location: "Main Auditorium, IIT Kanpur",
    shortDesc: "Face off against visiting GM Arjun Prasad in a 50-board simultaneous exhibition.",
    fullDesc: "This is a rare opportunity for club members and university students to battle against a seasoned Grandmaster. The event will begin with a 30-minute lecture on positional sacrifices followed by the simultaneous matches. Boards will be assigned on a first-come, first-served basis.",
    schedule: [
      { time: "14:00", activity: "Opening Remarks & Lecture" },
      { time: "14:30", activity: "Matches Begin" },
      { time: "17:30", activity: "Analysis of Critical Games" }
    ],
    prizes: "Top 3 longest surviving players receive customized chess sets."
  },
  {
    id: 2,
    title: "Winter Chess Camp: Endgame Mastery",
    date: "November 5-7, 2024",
    tag: "Workshop",
    time: "18:00 - 20:00 Daily",
    location: "LHC 201",
    shortDesc: "A 3-day intensive workshop focusing exclusively on pawn endings and rook maneuvers.",
    fullDesc: "Designed for intermediate players (1500-1900 ELO), this intensive boot camp breaks down the most critical endgame scenarios. We strongly recommend attendees review the pre-camp materials regarding the Lucena and Philidor positions.",
    schedule: [
      { time: "Day 1", activity: "Pawn vs Pawn Fundamentals" },
      { time: "Day 2", activity: "Rook Endgames Basics" },
      { time: "Day 3", activity: "Complex Asymmetrical Endgames" }
    ],
    prizes: "Certificate of Completion"
  },
  {
    id: 3,
    title: "Inter-Hall Championship 2024",
    date: "November 20, 2024",
    tag: "Tournament",
    time: "10:00 - 21:00",
    location: "Student Activity Center (SAC)",
    shortDesc: "The pinnacle inter-hostel tournament of the year. Represent your hall and fight for the coveted Bishop's Cup.",
    fullDesc: "Each hall may field a squad of 5 active players and 2 substitutes. The format is a 7-round Swiss system. Individual board points heavily influence the overall team standings, so every match matters. Blitz tiebreakers will determine podium finishes.",
    schedule: [
      { time: "10:00", activity: "Round 1 & 2" },
      { time: "14:00", activity: "Round 3 & 4" },
      { time: "17:00", activity: "Round 5, 6, 7" },
      { time: "20:30", activity: "Awards Ceremony" }
    ],
    prizes: "The Bishop's Cup (Team), 1-Year chess.com Diamond (MVP)"
  }
];

const Events = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="px-12 py-12 max-w-5xl mx-auto min-h-screen">
      <div className="mb-12">
        <h2 className="text-sm font-label uppercase tracking-[0.3em] text-primary mb-3">Official Directory</h2>
        <h1 className="text-5xl font-serif text-on-surface leading-tight tracking-tight mb-4">Upcoming Engagements</h1>
        <p className="text-on-surface-variant text-base max-w-2xl leading-relaxed">
          The curated schedule of major club events, workshops, and tournaments. For your personal match schedule, please consult the Calendar.
        </p>
      </div>

      <div className="space-y-6">
        {OFFICIAL_EVENTS.map(event => {
          const isExpanded = expandedId === event.id;
          
          return (
            <div 
              key={event.id}
              className={`bg-surface-container-low border transition-all duration-500 rounded-xl overflow-hidden ${isExpanded ? 'border-primary/50 shadow-[0_10px_30px_rgba(212,175,55,0.1)]' : 'border-[#4d4635]/20 hover:border-outline-variant/40 hover:bg-surface-container'}`}
            >
              {/* Clickable Header */}
              <div 
                onClick={() => toggleExpand(event.id)}
                className="p-6 md:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3 text-[10px] font-label uppercase tracking-widest font-bold">
                    <span className={
                      event.tag === 'Tournament' ? 'text-primary' : 
                      event.tag === 'Workshop' ? 'text-on-surface' : 
                      'text-blue-400'
                    }>{event.tag}</span>
                    <span className="text-on-surface-variant/50">•</span>
                    <span className="text-on-surface-variant">{event.date}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-on-surface mb-2">{event.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed max-w-3xl">{event.shortDesc}</p>
                </div>
                
                <div className="flex items-center justify-between md:justify-end gap-6 shrink-0 border-t border-outline-variant/10 md:border-0 pt-4 md:pt-0">
                  <div className="text-left md:text-right">
                    <p className="text-[10px] uppercase font-label tracking-widest text-on-surface-variant mb-1">Time</p>
                    <p className="text-xs font-bold text-on-surface">{event.time}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-inner border ${isExpanded ? 'bg-primary border-primary text-[#3c2f00] rotate-180' : 'bg-[#2a2828] border-outline-variant/40 text-[#e5e2e1]'}`}>
                    <span className="material-symbols-outlined text-xl">expand_more</span>
                  </div>
                </div>
              </div>

              {/* Expandable Accordion Body */}
              <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <div className="px-6 md:px-8 pb-8 pt-2 border-t border-outline-variant/10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                      
                      <div className="col-span-1 md:col-span-8">
                        <h4 className="text-xs font-label text-primary uppercase tracking-widest mb-4">Event Briefing</h4>
                        <p className="text-sm text-on-surface-variant leading-relaxed mb-8">{event.fullDesc}</p>
                        
                        <h4 className="text-xs font-label text-primary uppercase tracking-widest mb-4">Agenda Overview</h4>
                        <div className="space-y-3 bg-[#131313] p-5 rounded-lg border border-outline-variant/10">
                          {event.schedule.map((item, idx) => (
                            <div key={idx} className="flex gap-4 items-center">
                              <span className="w-16 shrink-0 text-xs font-bold text-on-surface-variant">{item.time}</span>
                              <span className="w-2 h-2 rounded-full bg-primary/40"></span>
                              <span className="text-xs text-on-surface">{item.activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="col-span-1 md:col-span-4 space-y-6">
                        <div className="bg-[#131313] p-5 rounded-lg border border-outline-variant/10">
                           <h4 className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest mb-2 flex items-center gap-2">
                             <span className="material-symbols-outlined text-[14px]">location_on</span> Location
                           </h4>
                           <p className="text-sm text-on-surface font-bold">{event.location}</p>
                        </div>

                        <div className="bg-[#131313] p-5 rounded-lg border border-[#f2ca50]/20">
                           <h4 className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest mb-2 flex items-center gap-2">
                             <span className="material-symbols-outlined text-[14px] text-primary">emoji_events</span> Honors
                           </h4>
                           <p className="text-sm text-primary font-bold">{event.prizes}</p>
                        </div>
                        
                        <Link 
                          to={`/events/register/${event.id}`}
                          className="w-full block text-center bg-gradient-to-r from-[#f2ca50] to-[#d4af37] text-[#3c2f00] font-bold py-3.5 rounded-lg text-xs uppercase tracking-widest hover:scale-[1.02] shadow-lg transition-transform outline-none mt-4"
                        >
                          Register RSVP
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
