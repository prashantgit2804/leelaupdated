import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, User, Mail, Send, Award, Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

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
  const [activeTab, setActiveTab] = useState("inquiry");

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    alert("Thank you! Your inquiry has been submitted successfully.");
  };

  const handleSubmitCareers = (e) => {
    e.preventDefault();
    alert("Thank you! Your job application has been submitted successfully.");
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-transparent overflow-hidden relative border-t border-white/5">
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
          
          {/* Left Column: Interactive Tabbed Form (Inquiry / Careers) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-zinc-900/40 p-6 md:p-8 border border-white/5 rounded-sm backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-10">
              
              {/* Vertical Tabs */}
              <div className="flex flex-row md:flex-col gap-2 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 pr-0 md:pr-6 min-w-[140px] flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveTab("inquiry")}
                  className={`text-left text-xs font-black tracking-[0.2em] uppercase py-2 md:py-3 transition-colors relative block w-full ${activeTab === "inquiry" ? "text-[#ea222d]" : "text-white/40 hover:text-white"}`}
                >
                  Inquiry
                  {activeTab === "inquiry" && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full md:w-[2px] md:h-full md:top-0 md:right-0 md:left-auto bg-[#ea222d]" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("careers")}
                  className={`text-left text-xs font-black tracking-[0.2em] uppercase py-2 md:py-3 transition-colors relative block w-full ${activeTab === "careers" ? "text-[#ea222d]" : "text-white/40 hover:text-white"}`}
                >
                  Careers
                  {activeTab === "careers" && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full md:w-[2px] md:h-full md:top-0 md:right-0 md:left-auto bg-[#ea222d]" />
                  )}
                </button>
              </div>

              {/* Form Content */}
              <div className="flex-grow">
                {activeTab === "inquiry" ? (
                  <form onSubmit={handleSubmitInquiry} className="space-y-6">
                    <h3 className="text-xl font-black uppercase tracking-tight text-white mb-6">Send a Message</h3>
                    
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
                ) : (
                  <form onSubmit={handleSubmitCareers} className="space-y-6">
                    <h3 className="text-xl font-black uppercase tracking-tight text-white mb-6">Join the Team</h3>
                    
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">Phone Number</label>
                        <div className="relative">
                          <input 
                            type="tel" 
                            required
                            placeholder="Your phone number" 
                            className="w-full bg-black/40 border border-white/10 p-3 pl-10 rounded-sm text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ea222d] transition-all"
                          />
                          <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600" />
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">Position of Interest</label>
                        <select className="w-full bg-black/40 border border-white/10 p-3 rounded-sm text-sm text-white focus:outline-none focus:border-[#ea222d] transition-all">
                          <option className="bg-zinc-950">Director / Assistant Director</option>
                          <option className="bg-zinc-950">Cinematographer / Camera Crew</option>
                          <option className="bg-zinc-950">Post-Production Editor</option>
                          <option className="bg-zinc-950">Screenwriter / Creative Writer</option>
                          <option className="bg-zinc-950">Production Assistant / Intern</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">Portfolio / Resume Link</label>
                      <input 
                        type="url" 
                        required
                        placeholder="Link to your work (Behance, Vimeo, Drive, etc.)" 
                        className="w-full bg-black/40 border border-white/10 p-3 rounded-sm text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ea222d] transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">Why join Leela Films?</label>
                      <textarea 
                        rows={3} 
                        required
                        placeholder="Tell us about your background and passion..." 
                        className="w-full bg-black/40 border border-white/10 p-3 rounded-sm text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ea222d] transition-all resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full md:w-auto px-8 py-3.5 bg-[#ea222d] text-white font-black text-xs tracking-[0.2em] uppercase rounded-sm border border-black hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
                    >
                      Apply Now <Send size={14} />
                    </button>
                  </form>
                )}
              </div>

            </div>
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
            <div className="bg-zinc-900/40 p-8 border border-white/5 rounded-sm flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-[#ea222d]/10 flex items-center justify-center border border-[#ea222d]/20">
                  <MapPin className="text-[#ea222d]" size={18} />
                </div>
                <div>
                  <span className="text-[9px] font-black tracking-widest text-gray-500 uppercase block mb-1">Corporate Head Office</span>
                  <h4 className="text-lg font-black text-white uppercase tracking-tight mb-2">Leela Films Pvt. Ltd.</h4>
                  <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>

              {/* Google Map Embed (with custom dark theme filter applied) */}
              <div className="w-full h-[180px] rounded-sm overflow-hidden border border-white/10 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <iframe
                  title="Leela Films Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117510.60350361367!2d72.48421808027732!3d23.020243734493375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fccd11d087798c9!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(85%) contrast(95%)" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-white/30 font-light">
          <p className="order-2 md:order-1">© {new Date().getFullYear()} Leela Films Pvt. Ltd. All rights reserved.</p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 order-1 md:order-2">
            {[
              { Icon: Facebook, url: "https://facebook.com" },
              { Icon: Instagram, url: "https://instagram.com" },
              { Icon: Linkedin, url: "https://linkedin.com" },
              { Icon: Twitter, url: "https://twitter.com" },
            ].map(({ Icon, url }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#ea222d] hover:border-[#ea222d]/40 hover:scale-105 active:scale-95 transition-all bg-zinc-900/30"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          <div className="flex gap-6 order-3 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#ea222d] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
