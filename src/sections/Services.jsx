import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Film, Monitor, Tv, Briefcase, ArrowUpRight } from "lucide-react";

const servicesData = [
  {
    id: "01",
    title: "Film Production",
    desc: "Full-scale narrative feature films built on high-fidelity production values, connecting with global audiences while maintaining cultural authenticity.",
    icon: <Film size={32} />,
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1450&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Web Series & Short Format",
    desc: "Episodic content and short-form show development optimized for modern OTT and digital platforms, engaging tech-savvy digital-first audiences.",
    icon: <Monitor size={32} />,
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "TVC & Advertisement Production",
    desc: "Premium television commercials and high-impact digital ad campaigns engineered to disrupt markets and position forward-thinking brands.",
    icon: <Tv size={32} />,
    image: "https://images.unsplash.com/photo-1492691523567-6119e2aa99df?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Corporate Film Production",
    desc: "High-end corporate profiles, brand documentaries, and internal communications designed to influence perspectives and engage stakeholders.",
    icon: <Briefcase size={32} />,
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1470&auto=format&fit=crop",
  },
];

const Services = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="services" className="relative py-24 md:py-36 bg-transparent overflow-hidden border-t border-white/5">
      {/* Background visual transition based on active hovered service */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 transition-all duration-700">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIdx}
            src={servicesData[activeIdx].image}
            alt="Service visual background"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full object-cover filter grayscale blur-[2px]"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Title Block */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-white/10">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#ea222d] block mb-2">WHAT WE DO</span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            SERVICES
          </h2>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            We provide comprehensive, end-to-end production solutions, taking ideas from raw creative concepts to fully realized, premium visual assets.
          </p>
        </div>

        {/* Services Interactive List & Preview Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left interactive list: cols 7 */}
          <div className="lg:col-span-7 divide-y divide-white/5">
            {servicesData.map((service, index) => {
              const isActive = index === activeIdx;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveIdx(index)}
                  onClick={() => setActiveIdx(index)}
                  className="py-8 cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all group pointer-events-auto"
                >
                  <div className="flex items-start gap-6 md:gap-8 flex-grow">
                    {/* Index */}
                    <span className={`text-xs font-black font-mono tracking-widest mt-1.5 transition-colors ${isActive ? 'text-[#ea222d]' : 'text-white/20'}`}>
                      {service.id}
                    </span>

                    {/* Title & Desc */}
                    <div className="space-y-2 max-w-xl w-full">
                      <h3 className={`text-xl md:text-2xl font-black uppercase transition-colors tracking-tight ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/80'}`}>
                        {service.title}
                      </h3>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="space-y-4 pt-2 overflow-hidden"
                        >
                          {/* Mobile-only Inline Image with Premium Frame Accent */}
                          <div className="lg:hidden w-full aspect-[4/3] rounded-xs border border-white/10 relative overflow-hidden bg-zinc-950">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover grayscale brightness-90"
                            />
                            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#ea222d] pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#ea222d] pointer-events-none" />
                          </div>
                          <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                            {service.desc}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Icon or Arrow */}
                  <div className="flex items-center gap-4">
                    <span className={`p-2 transition-all rounded-full ${isActive ? 'text-[#ea222d] rotate-[45deg] scale-110' : 'text-white/10 group-hover:text-white/30'}`}>
                      <ArrowUpRight size={24} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Preview Box: cols 5 */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="sticky top-28 bg-zinc-950 p-3 border border-white/10 rounded-sm shadow-2xl overflow-hidden aspect-[4/3] relative group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIdx}
                  src={servicesData[activeIdx].image}
                  alt={servicesData[activeIdx].title}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover grayscale brightness-90 rounded-xs group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                />
              </AnimatePresence>
              
              {/* Corner accent border */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ea222d] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#ea222d] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
