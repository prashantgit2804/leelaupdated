import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Compass, Target, Zap, ArrowRight, Sparkles } from "lucide-react";

const cardsData = [
  {
    id: 1,
    tag: "STORY",
    watermark: "S",
    title: "OUR PHILOSOPHY",
    desc: "Leela Films is more than a production house—it is a collaborative creative ecosystem where artists converge. Rooted in cultural authenticity, we give a fearless voice to original talent.",
    bg: "bg-cover bg-center",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop",
    theme: "dark",
  },
  {
    id: 2,
    tag: "SPEED",
    watermark: "⚡",
    title: "SPEED & QUALITY",
    desc: "By combining modern production pipelines with creative dominance, we prove that rapid execution and uncompromised, world-class quality can coexist in every single frame.",
    bg: "bg-white",
    theme: "light",
  },
  {
    id: 3,
    tag: "VISION",
    watermark: "V",
    title: "THE FUTURE OF CINEMA",
    desc: "To build a world-class media ecosystem that shapes contemporary culture, empowers creative talent, and presents authentic Indian stories to global audiences through constant innovation.",
    bg: "bg-zinc-950 border border-[#ea222d]/20",
    theme: "dark-red",
  },
  {
    id: 4,
    tag: "MISSION",
    watermark: "M",
    title: "OUR COMMITMENT",
    desc: "Manufacturing premium, high-impact content across feature films, digital format shows, and original branded IPs, while nurturing fresh talent and creative frameworks.",
    bg: "bg-zinc-900 border border-white/5",
    theme: "dark-minimal",
  },
  {
    id: 5,
    tag: "DRIVE",
    watermark: "L",
    title: "WIN WITH US",
    desc: "Success is a collective journey. Driven by relentless ambition, artistic passion, and agile execution, we don't just participate in the media landscape—we create to lead.",
    bg: "bg-[#ea222d]",
    theme: "brand-red",
  },
];

const About = () => {
  const targetRef = useRef(null);
  const horizontalScrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDraggingState, setIsDraggingState] = useState(false);
  const dragRef = useRef({ isDragging: false, startX: 0, scrollLeftStart: 0 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollXProgress } = useScroll({
    container: horizontalScrollRef,
  });

  // Spring physics overlay to smooth out drag and scroll movements
  const smoothScrollX = useSpring(scrollXProgress, {
    stiffness: 250, // very stiff spring for ultra-fast snaps
    damping: 32,    // adjusted damping to eliminate overshoot
    mass: 0.15      // ultra-light mass for instant response
  });

  // Scroll to the middle card (index 2) on mount to preserve the original symmetric 3D curved layout
  useEffect(() => {
    if (horizontalScrollRef.current) {
      const el = horizontalScrollRef.current;
      // Delay slightly to ensure scrollWidth is fully calculated in layout
      const timer = setTimeout(() => {
        const maxScroll = el.scrollWidth - el.clientWidth;
        el.scrollLeft = maxScroll / 2;
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  // Desktop click-and-drag to scroll horizontally
  const handleMouseDown = (e) => {
    const el = horizontalScrollRef.current;
    if (!el) return;
    dragRef.current = {
      isDragging: true,
      startX: e.pageX - el.offsetLeft,
      scrollLeftStart: el.scrollLeft,
    };
    setIsDraggingState(true);
  };

  const handleMouseLeave = () => {
    dragRef.current.isDragging = false;
    setIsDraggingState(false);
  };

  const handleMouseUp = () => {
    dragRef.current.isDragging = false;
    setIsDraggingState(false);
  };

  const handleMouseMove = (e) => {
    if (!dragRef.current.isDragging) return;
    const el = horizontalScrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragRef.current.startX) * 1.5; // Scroll speed multiplier
    el.scrollLeft = dragRef.current.scrollLeftStart - walk;
  };

  return (
    <section
      ref={targetRef}
      id="about"
      className="relative bg-transparent border-t border-white/5 py-12 md:py-16"
    >
      {/* Content wrapper */}
      <div className="relative w-full overflow-hidden flex flex-col justify-between py-12 md:py-16 min-h-[620px] md:min-h-[720px] z-10">
        {/* Section Header */}
        <div className="container mx-auto px-6 md:px-12 text-left z-20">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#ea222d] block mb-2">
            04 / STUDIO IDENTITY
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-2">
            OUR PHILOSOPHY & DNA
          </h2>
          <p className="text-gray-400 text-xs md:text-sm font-light max-w-md leading-relaxed">
            Landing centered on our vision, the deck sways dynamically and sways
            smoothly as you scroll down.
          </p>
        </div>

        {/* 3D Arc Card Arena */}
        <div className="relative w-full h-[55vh] md:h-[60vh] flex items-center justify-center">
          {/* Transparent Horizontal Scroll Overlay */}
          <div
            ref={horizontalScrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`absolute inset-0 overflow-x-auto no-scrollbar z-[150] cursor-grab active:cursor-grabbing select-none ${isDraggingState ? "" : "snap-x snap-mandatory"}`}
          >
            <div className="flex h-full" style={{ width: "500%" }}>
              {cardsData.map((_, idx) => (
                <div
                  key={idx}
                  className="w-1/5 h-full flex-shrink-0 snap-center"
                />
              ))}
            </div>
          </div>

          {/* Card Carousel Deck */}
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
            {cardsData.map((card, i) => {
              const spacing = isMobile ? 210 : 310;
              const angleVal = 7; // Curved tilt angle multiplier

              // Linear scrolling: maps scroll progress 0 to 1 directly to center card 0 through card 4
              const x = useTransform(smoothScrollX, (latestScroll) => {
                const currentOffset = latestScroll * (cardsData.length - 1);
                const relPos = i - currentOffset;
                return relPos * spacing;
              });

              const y = useTransform(smoothScrollX, (latestScroll) => {
                const currentOffset = latestScroll * (cardsData.length - 1);
                const relPos = i - currentOffset;
                return Math.pow(relPos, 2) * 18 + (isMobile ? 10 : 25);
              });

              const rotate = useTransform(smoothScrollX, (latestScroll) => {
                const currentOffset = latestScroll * (cardsData.length - 1);
                const relPos = i - currentOffset;
                return relPos * angleVal;
              });

              const scale = useTransform(smoothScrollX, (latestScroll) => {
                const currentOffset = latestScroll * (cardsData.length - 1);
                const relPos = i - currentOffset;
                return 1 - Math.min(0.3, Math.abs(relPos) * 0.08);
              });

              const opacity = useTransform(smoothScrollX, (latestScroll) => {
                const currentOffset = latestScroll * (cardsData.length - 1);
                const relPos = i - currentOffset;
                return 1 - Math.min(0.6, Math.abs(relPos) * 0.25);
              });

              const zIndex = useTransform(smoothScrollX, (latestScroll) => {
                const currentOffset = latestScroll * (cardsData.length - 1);
                const relPos = i - currentOffset;
                return Math.round(100 - Math.abs(relPos) * 10);
              });

              return (
                <motion.div
                  key={card.id}
                  style={{
                    x,
                    y,
                    rotate,
                    scale,
                    opacity,
                    zIndex,
                  }}
                  className={`absolute w-[260px] md:w-[320px] h-[370px] md:h-[450px] rounded-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/5 transition-all duration-300 pointer-events-auto ${card.bg}`}
                >
                  {/* Grayscale Backdrop Image for dark theme card */}
                  {card.image && (
                    <div className="absolute inset-0 z-0">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover grayscale opacity-25"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
                    </div>
                  )}

                  {/* Watermark Logo character in background */}
                  <span
                    className={`absolute -bottom-10 -right-4 font-black select-none pointer-events-none text-[15rem] md:text-[18rem] leading-none opacity-[0.04] ${
                      card.theme === "light" ? "text-black" : "text-white"
                    }`}
                  >
                    {card.watermark}
                  </span>

                  {/* Card Content Wrapper */}
                  <div className="relative z-10 w-full h-full flex flex-col justify-between">
                    {/* Header: Index tag */}
                    <div className="flex justify-between items-center w-full">
                      <span
                        className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border ${
                          card.theme === "light"
                            ? "text-black/80 border-black/10 bg-black/5"
                            : card.theme === "brand-red"
                              ? "text-white border-white/20 bg-white/10"
                              : "text-[#ea222d] border-[#ea222d]/20 bg-[#ea222d]/5"
                        }`}
                      >
                        {card.tag}
                      </span>
                      <span
                        className={`text-xs font-mono font-black ${
                          card.theme === "light"
                            ? "text-black/30"
                            : "text-white/30"
                        }`}
                      >
                        0{card.id}
                      </span>
                    </div>

                    {/* Body text & title */}
                    <div className="mt-8 flex-grow flex flex-col justify-center">
                      <h3
                        className={`text-xl md:text-2xl font-black uppercase tracking-tight mb-4 ${
                          card.theme === "light"
                            ? "text-black font-sans"
                            : "text-white"
                        }`}
                      >
                        {card.title}
                      </h3>
                      <p
                        className={`text-xs md:text-sm font-light leading-relaxed ${
                          card.theme === "light"
                            ? "text-black/70"
                            : card.theme === "brand-red"
                              ? "text-white/80"
                              : "text-gray-400"
                        }`}
                      >
                        {card.desc}
                      </p>
                    </div>

                    {/* Decorative bottom element */}
                    <div className="mt-6 pt-4 border-t w-full flex items-center justify-between border-current/10">
                      {card.theme === "light" ? (
                        <>
                          <span className="text-[9px] font-mono tracking-widest text-black/40">
                            LEELA FILMS DNA
                          </span>
                          <Zap size={14} className="text-black" />
                        </>
                      ) : card.theme === "brand-red" ? (
                        <>
                          <span className="text-[9px] font-mono tracking-widest text-white/60">
                            Agile Execution
                          </span>
                          <Sparkles size={14} className="text-white" />
                        </>
                      ) : card.theme === "dark-red" ? (
                        <>
                          <span className="text-[9px] font-mono tracking-widest text-[#ea222d]/60">
                            Cultural Impact
                          </span>
                          <Compass size={14} className="text-[#ea222d]" />
                        </>
                      ) : (
                        <>
                          <span className="text-[9px] font-mono tracking-widest text-white/30">
                            Standard Quality
                          </span>
                          <Target size={14} className="text-white/40" />
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Scroll Progress Indicator & Guide */}
        <div className="container mx-auto px-6 text-center z-20">
          <div className="flex flex-col items-center">
            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-white/30 mb-2">
              Swipe or Scroll Horizontally
            </span>

            {/* Smooth animated progress track */}
            <div className="w-36 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
              <motion.div
                style={{ scaleX: smoothScrollX }}
                className="absolute inset-0 bg-[#ea222d] origin-left"
              />
            </div>

            {/* Scroll Indicator Icon */}
            <motion.div
              animate={{ x: [-4, 4, -4] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="mt-4 text-white/20"
            >
              <ArrowRight size={14} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
