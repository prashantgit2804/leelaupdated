import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";
import back from "../assets/images/back.png"; // change extension if needed

const Hero = () => {
  const handleCTA = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      const yOffset = -80;
      const y =
        contactSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-black flex items-center"
    >
      {/* Logo Intro */}
      <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 2.5,
            times: [0, 0.2, 0.8, 1],
            ease: "easeInOut",
          }}
        >
          <img
            src={logo}
            alt="Leela Films Logo"
            className="w-[45vw] max-w-[420px] object-contain"
          />
        </motion.div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <motion.img
          src={back}
          alt="Leela Films Background"
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="
            absolute
            right-0
            top-0
            h-full
            w-auto
            max-w-none
            object-contain
            opacity-90
          "
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-[15] bg-gradient-to-r from-black via-black/70 to-black/20" />
      <div className="absolute inset-0 z-[16] bg-gradient-to-b from-black/50 via-transparent to-black" />

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 2.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6">
            Shaping Culture.
            <br />
            <span className="text-[#ea222d]">
              Empowering Talent.
            </span>
            <br />
            Telling Indian Stories Globally.
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mb-10">
            Welcome to Leela Films — a new-age entertainment and media
            ecosystem built on modern production systems, cultural
            authenticity, and the relentless pursuit of excellence.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(234,34,45,0.5)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCTA}
            className="
              px-8
              py-4
              bg-[#ea222d]
              text-white
              font-black
              text-xs
              md:text-sm
              tracking-[0.2em]
              uppercase
              rounded-sm
              border-2
              border-black
              shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]
              hover:shadow-none
              hover:translate-x-[6px]
              hover:translate-y-[6px]
              transition-all
              duration-300
            "
          >
            Collaborate With Us
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 4.5, duration: 1 }}
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          z-20
          flex
          flex-col
          items-center
          gap-2
          pointer-events-none
        "
      >
        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50">
          Scroll To Explore
        </span>

        <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-0 w-full h-1/2 bg-[#ea222d]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;