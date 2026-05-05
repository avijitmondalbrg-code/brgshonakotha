/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Mic, Play, MessageSquare, Users, Heart, ExternalLink, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

const EPISODES = [
  {
    id: 1,
    title: "Cleft Surgeries & Two Worlds",
    description: "One surgeon. Two completely different worlds. An insight into life-changing medical procedures.",
    image: "/img/Cleft.jpeg",
    tag: "Medical"
  },
  {
    id: 2,
    title: "The Reality of Facial Reconstruction",
    description: "Beyond the surface: Understanding the decisions, numbers, and expectations in surgery.",
    image: "/img/facial.jpeg",
    tag: "Life"
  },
  {
    id: 3,
    title: "Private vs Government Schools",
    description: "Is it better education or just better marketing? A headmaster breaks it down.",
    image: "/img/private.jpeg",
    tag: "Education"
  },
  {
    id: 4,
    title: "Music, Memories & Melodies",
    description: "A deep dive into the stories behind the songs that stay in our hearts forever.",
    image: "/img/music.jpeg",
    tag: "Art"
  },
  {
    id: 5,
    title: "Redefining Success",
    description: "A conversation with Swami Brahmatmananda Ji Maharaj on finding your own path.",
    image: "/img/swami.png",
    tag: "Philosophy"
  },
  {
    id: 6,
    title: "Talent vs Opportunity",
    description: "Which one truly matters? Exploring the journey of creative individuals.",
    image: "/img/talent.jpeg",
    tag: "Careers"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="h-20 px-6 md:px-12 flex items-center justify-between border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img 
            src="/img/brg_shona_kotha-logo.png" 
            alt="BRG SHONA KOTHA Logo" 
            className="h-24 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-slate-500">
          <a href="#home" className="text-blue-600 border-b-2 border-blue-600 py-1">Home</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#episodes" className="hover:text-blue-600 transition-colors">Episodes</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          <a 
            href="https://www.youtube.com/@BRGShonaKotha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-900 text-white rounded-xl text-xs font-black shadow-xl shadow-slate-200 hover:bg-blue-600 transition-all hover:scale-105 active:scale-95"
          >
            LISTEN NOW
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 top-20 bg-white z-40 p-8 flex flex-col gap-8 lg:hidden"
        >
          <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black uppercase tracking-tighter border-b border-slate-100 pb-2">Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black uppercase tracking-tighter border-b border-slate-100 pb-2">About</a>
          <a href="#episodes" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black uppercase tracking-tighter border-b border-slate-100 pb-2">Episodes</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black uppercase tracking-tighter border-b border-slate-100 pb-2">Contact</a>
        </motion.div>
      )}

      <main>
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden pt-12 lg:pt-20 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left z-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black mb-8 tracking-[0.2em] uppercase border border-blue-100"
              >
                <Sparkles size={14} className="mr-2" /> Voices That Matter
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-black leading-[0.9] text-slate-900 mb-8 tracking-tighter"
              >
                NOT JUST A <br/> <span className="text-blue-600">CHANNEL.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-500 max-w-xl leading-tight mb-10 font-medium"
              >
                A space to speak, to listen, and to truly connect. Where stories aren't just heard, but understood.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a 
                  href="https://www.youtube.com/@BRGShonaKotha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-2xl font-black shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1"
                >
                  START LISTENING <Play fill="currentColor" size={18} />
                </a>
                <button className="px-10 py-5 bg-white border-2 border-slate-100 text-slate-700 rounded-2xl font-black hover:bg-slate-50 transition-all">
                  <a href="https://www.youtube.com/@BRGShonaKotha/videos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-600">VIEW EPISODES</a>
                </button>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="flex-1 relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white max-w-md mx-auto aspect-[3/4]">
                <img 
                  src="/img/rjDeep.jpeg" 
                  alt="Deep - Host"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Meet Your Host</p>
                    <h3 className="text-3xl font-black tracking-tighter">DEEP</h3>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 -z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-50 rounded-full blur-3xl opacity-50 -z-0"></div>
            </motion.div>
          </div>
        </section>

        {/* Brand Banner */}
        <div className="bg-slate-50 border-y border-slate-100 overflow-hidden py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <img src="/img/logobrg.png" className="h-16 object-contain" alt="Supported by BRG" referrerPolicy="no-referrer" />
            <div className="text-center md:text-right">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 block mb-2">Supported by</span>
              <p className="font-bold text-slate-900 leading-tight">Bengal Rehabilitation Group</p>
              <p className="font-bold text-slate-600 leading-tight">Bengal's Largest Hospital Based <br/> Hearing & Speech Care Chain</p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-black tracking-tighter text-slate-900 leading-[0.9] border-l-8 border-blue-600 pl-6 uppercase">
                Where stories <br/> aren't just heard, <br/> but understood.
              </h2>
              <div className="text-lg text-slate-600 space-y-6 leading-relaxed font-medium">
                <p>
                  Did you know? What is the common thread between a doctor, an athlete, a social worker, a musician, and a chef? Their lives are all filled with unique experiences.
                </p>
                <p>
                  Whether in the busy corridors of a hospital, under theatre lights, or on the green grass of a field—they discover something new every day. We don't know many of these stories, but hidden within them is the meaning of change and an invitation to see life through a different lens.
                </p>
                <p className="font-bold text-slate-900 italic">
                  "My story can help you find your own path."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-xl border-4 border-white transform -rotate-2">
                  <img src="/img/img1.jpeg" className="w-full h-full object-cover" alt="Voices" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl shadow-blue-200">
                  <Heart className="mb-4" />
                  <h4 className="font-black text-xl mb-2">Connect</h4>
                  <p className="text-xs font-bold opacity-80 uppercase tracking-widest">Building bridges through real human connection.</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-xl shadow-slate-200">
                  <MessageSquare className="mb-4 text-blue-500" />
                  <h4 className="font-black text-xl mb-2">Listen</h4>
                  <p className="text-xs font-bold opacity-80 uppercase tracking-widest">A dedicated space for voices that truly matter.</p>
                </div>
                <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-xl border-4 border-white transform rotate-2">
                  <img src="/img/deep1.jpeg" className="w-full h-full object-cover" alt="Deep" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Episodes Header */}
        <section id="episodes" className="bg-slate-50 py-24 px-6 md:px-12 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] block mb-4">Latest Conversations</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-none">THE SHOWLIST.</h2>
              </div>
              <a href="https://www.youtube.com/@BRGShonaKotha/videos" className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-600">
                BROWSE ALL EPISODES <ArrowRight size={14} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {EPISODES.map((episode) => (
                <motion.div 
                  key={episode.id}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={episode.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={episode.title} referrerPolicy="no-referrer" />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 shadow-sm">
                        {episode.tag}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 transform scale-75 group-hover:scale-100 transition-transform">
                        <Play fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-black tracking-tighter text-slate-900 mb-4 leading-tight">
                      {episode.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">
                      {episode.description}
                    </p>
                    <a 
                      href="https://www.youtube.com/watch?v=0_0CtIC4nCE" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-auto flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-blue-600 group-hover:gap-4 transition-all"
                    >
                      LISTEN TO EPISODE <ArrowRight size={12} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600 rounded-full blur-[120px]"></div>
            </div>
            <div className="relative z-10">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-10 leading-[0.8] uppercase"
              >
                Let’s talk <br/> about your <br/> <span className="text-blue-500">EXPERIENCE.</span>
              </motion.h2>
              <p className="text-blue-200/60 font-bold tracking-[0.4em] uppercase text-xs mb-12">A SPACE FOR VOICES THAT MATTER</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-12 py-6 bg-blue-600 text-white rounded-3xl font-black text-lg hover:bg-blue-500 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-blue-900/50">
                  BE A GUEST
                </button>
                <button className="px-12 py-6 bg-white/10 text-white border border-white/20 rounded-3xl font-black text-lg hover:bg-white/20 transition-all active:scale-95">
                  PARTNER WITH US
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-center lg:text-left">
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <img 
                  src="/img/brg_shona_kotha-logo.png" 
                  alt="BRG SHONA KOTHA Logo" 
                  className="h-20 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">
                A podcast by Bengal Rehabilitation Group. Bengali's Largest Hospital Based Hearing & Speech Care Chain.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="font-black text-xs uppercase tracking-widest text-slate-900">Explore</h4>
              <nav className="flex flex-col gap-4 text-sm font-bold text-slate-400">
                <a href="#" className="hover:text-blue-600 transition-colors uppercase tracking-widest text-[10px]">Episode Archive</a>
                <a href="#" className="hover:text-blue-600 transition-colors uppercase tracking-widest text-[10px]">Guest List</a>
                <a href="#" className="hover:text-blue-600 transition-colors uppercase tracking-widest text-[10px]">Our Mission</a>
              </nav>
            </div>
            <div className="space-y-6">
              <h4 className="font-black text-xs uppercase tracking-widest text-slate-900">Follow</h4>
              <nav className="flex flex-col gap-4 text-sm font-bold text-slate-400">
                <a href="https://www.youtube.com/@BRGShonaKotha" className="hover:text-blue-600 transition-colors uppercase tracking-widest text-[10px]">YouTube</a>
                <a href="#" className="hover:text-blue-600 transition-colors uppercase tracking-widest text-[10px]">Spotify</a>
                <a href="#" className="hover:text-blue-600 transition-colors uppercase tracking-widest text-[10px]">Instagram</a>
              </nav>
            </div>
            <div className="space-y-6">
              <h4 className="font-black text-xs uppercase tracking-widest text-slate-900">Say Hello</h4>
              <p className="text-sm font-black text-blue-600 tracking-tighter">shonakothabrg@gmail.com</p>
              <div className="flex justify-center lg:justify-start gap-4">
                {/* Social icons placeholders */}
                <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center hover:bg-blue-50 transition-colors cursor-pointer">
                  <Users size={16} className="text-slate-400" />
                </div>
                <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center hover:bg-blue-50 transition-colors cursor-pointer">
                  <ExternalLink size={16} className="text-slate-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-100 gap-6">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">© 2026 BRG SHONA KOTHA. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


