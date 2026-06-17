import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, User, Mail, Send, Award } from "lucide-react";

const groupInfrastructure = [
  "Leela Partner Limited",
  "Leela USA LLC",
  "Pure Leela Limited",
  "Tobias Amines Limited",
  "Leepol",
  "Leela Motivala",
  "Go seek"
];

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your collaboration request has been received.");
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-primary overflow-hidden relative border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ea222d]/2 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#ea222d] block mb-2">COLLABORATE</span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
            LET'S WORK TOGETHER
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
            Whether you are an ambitious creator looking for a "home away from home," or a brand seeking outside-the-box visual disruption, we want to hear from you.
          </p>
        </div>

        {/* 2-Column Split: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-zinc-900/40 p-8 md:p-10 border border-white/5 rounded-sm backdrop-blur-sm"
          >
            <h3 className="text-xl font-black uppercase tracking-tight text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">Full Name</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      required
                      placeholder="Your name" 
                      className="w-full bg-black/40 border border-white/10 p-3 pl-10 rounded-sm text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ea222d] transition-all"
                    />
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">Email Address</label>
                  <div className="relative">
                    <input 
                      type="email" 
                      required
                      placeholder="Your email" 
                      className="w-full bg-black/40 border border-white/10 p-3 pl-10 rounded-sm text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ea222d] transition-all"
                    />
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600" />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">Collaboration Interest</label>
                <select className="w-full bg-black/40 border border-white/10 p-3 rounded-sm text-sm text-white focus:outline-none focus:border-[#ea222d] transition-all">
                  <option className="bg-zinc-950">Brand Campaign & TVC</option>
                  <option className="bg-zinc-950">Film Narrative & Original IP</option>
                  <option className="bg-zinc-950">OTT Web Series & Short Format</option>
                  <option className="bg-zinc-950">Creator Partnership</option>
                  <option className="bg-zinc-950">Other Enquiries</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">Message</label>
                <textarea 
                  rows={4} 
                  required
                  placeholder="Outline your idea or collaboration request..." 
                  className="w-full bg-black/40 border border-white/10 p-3 rounded-sm text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ea222d] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full md:w-auto px-8 py-3.5 bg-[#ea222d] text-white font-black text-xs tracking-[0.2em] uppercase rounded-sm border border-black hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
              >
                Submit Inquiry <Send size={14} />
              </button>
            </form>
          </motion.div>

          {/* Right Column: Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Address Box */}
            <div className="bg-zinc-900/40 p-8 border border-white/5 rounded-sm flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-[#ea222d]/10 flex items-center justify-center border border-[#ea222d]/20">
                <MapPin className="text-[#ea222d]" size={18} />
              </div>
              <div>
                <span className="text-[9px] font-black tracking-widest text-gray-500 uppercase block mb-1">Corporate Head Office</span>
                <h4 className="text-lg font-black text-white uppercase tracking-tight mb-2">Leela Films Pvt. Ltd.</h4>
                <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                  Mumbai, India
                </p>
              </div>
            </div>

            {/* Direct Line Box */}
            <div className="bg-zinc-900/40 p-8 border border-white/5 rounded-sm flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-[#ea222d]/10 flex items-center justify-center border border-[#ea222d]/20">
                <Phone className="text-[#ea222d]" size={18} />
              </div>
              <div>
                <span className="text-[9px] font-black tracking-widest text-gray-500 uppercase block mb-1">Call Us</span>
                <h4 className="text-lg font-black text-white uppercase tracking-tight mb-1">+91 99987 72009</h4>
                <p className="text-gray-400 text-xs font-light">
                  Primary Contact: Kumpal Patel (Managing Director)
                </p>
              </div>
            </div>

            {/* Business Email Info */}
            <div className="p-8 border border-dashed border-white/10 rounded-sm flex flex-col gap-2">
              <span className="text-[9px] font-black tracking-widest text-[#ea222d] uppercase block">Direct Collaboration Inbox</span>
              <a href="mailto:collaborate@leelafilms.com" className="text-xl md:text-2xl font-black text-white hover:text-[#ea222d] transition-colors uppercase tracking-tight">
                info@leelafilms.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Group Infrastructure Section */}
        <div className="mt-20 pt-16 border-t border-white/5 max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Award className="text-[#ea222d]" size={20} />
            <h3 className="text-xs md:text-sm font-black tracking-[0.2em] uppercase text-white">Our Group Infrastructure</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {groupInfrastructure.map((name, index) => (
              <div 
                key={index}
                className="p-4 bg-zinc-900/30 border border-white/5 rounded-sm flex items-center justify-center text-center group hover:border-[#ea222d]/40 hover:bg-[#ea222d]/2 transition-all duration-300 min-h-[80px]"
              >
                <span className="text-[10px] md:text-xs font-bold text-gray-400 group-hover:text-white uppercase tracking-wider transition-colors duration-300">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Footer Integrated */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/30 font-light">
          <p>© {new Date().getFullYear()} Leela Films Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#ea222d] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
