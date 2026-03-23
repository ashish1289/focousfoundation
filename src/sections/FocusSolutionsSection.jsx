import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Building2, Briefcase, CheckCircle2, ChevronRight, Quote } from 'lucide-react';

const FocusSolutionsSection = () => {
  const THEME = {
    gold: "#C9A84C",
    green: "#2D5A3D",
    bgLight: "#FDF8F0",
    textDark: "#2D5A3D",
    textMuted: "#4B5E53",
  };

  const services = [
    "Contract staffing services",
    "Data transmission services",
    "Real estate Services",
    "Educational and training services"
  ];

  const projects = [
    {
      title: "FOSTAC",
      desc: "Food safety training and certification (FSSAI project). Assigned for Odisha and West Bengal by SKETCH the art to Create.",
      icon: "🍽️"
    },
    {
      title: "Airtel Payments Bank Distributorship",
      desc: "Assigned for the state of Odisha by Airtel Payments Bank Limited.",
      icon: "📱"
    },
    {
      title: "ZED Certification",
      desc: "Quality Council of India (Zero Defect Zero Effect - MSME Sustainable scheme) assigned for Odisha by RSI Inspection Service ltd.",
      icon: "🏆"
    },
    {
      title: "Vidaya Bhaban Educational Project",
      desc: "Educational project for Odisha assigned by IIT Bhubaneswar, Research and Entrepreneurship Park.",
      icon: "🎓"
    },
    {
      title: "Real Estate Consultancy",
      desc: "Assigned by SALASS Infra Solutions.",
      icon: "🏗️"
    }
  ];

  return (
    <section className="w-full relative bg-[#FDF8F0] pb-32 overflow-hidden selection:bg-[#C9A84C] selection:text-white">
      
      {/* 1. Ultra Clean Hero */}
      <div className="pt-32 pb-20 px-6 lg:px-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#EDE4CE] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-[#C9A84C]">A Division of Focus International</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter"
          style={{ color: THEME.textDark }}
        >
          FOCUS <span style={{ color: THEME.gold }}>SOLUTIONS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto"
          style={{ color: THEME.textMuted }}
        >
          Committed to delivering <span style={{ color: THEME.gold }}>under-one-roof solutions</span> to build a healthy society where people are placed at the center of ZERO DEFECT ZERO EFFECT (ZED).
        </motion.p>
      </div>

      {/* 2. Sleek Company Band */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EDE4CE] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4"
        >
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-2">Proprietor / Legal Name</p>
            <p className="text-xl font-bold text-[#2D5A3D]">Mr. Pradeep Kumar Mukherjee</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-[#EDE4CE]"></div>
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-2">Registration (GSTIN)</p>
            <p className="text-lg font-mono font-medium text-[#4B5E53] bg-[#FDF8F0] px-3 py-1 rounded-lg">21AKBPM8511H3ZH</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-[#EDE4CE]"></div>
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-2">Constitution</p>
            <p className="text-lg font-bold text-[#4B5E53]">Proprietorship <span className="font-normal text-sm ml-2 text-[#7A8F81]">(Since Dec 2022)</span></p>
          </div>
        </motion.div>
      </div>

      {/* 3. Core Business & Services */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-4">Core Business Activities</h2>
          <div className="w-20 h-1 bg-[#C9A84C] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EDE4CE] text-center group transition-all duration-300 hover:shadow-xl hover:border-[#C9A84C]"
            >
              <div className="w-14 h-14 mx-auto bg-[#FDF8F0] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-7 h-7 text-[#C9A84C]" />
              </div>
              <h3 className="font-bold text-[#2D5A3D] text-lg leading-snug">{service}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. Elegant Appeal Block */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10 mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-[2.5rem] p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#EDE4CE] overflow-hidden"
        >
          <Quote className="absolute top-8 left-8 w-24 h-24 text-[#FDF8F0] -z-0" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-sm font-bold tracking-widest uppercase text-[#C9A84C] mb-8">An Official Appeal</h3>
            
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-[#2D5A3D] mb-10" style={{ fontFamily: "'Lora', serif" }}>
              "On behalf of FOCUS SOLUTIONS, may I draw your kind attention to be partnering with more opportunities, aiming to provide more services to build a healthy community and celebrate the <span className="text-[#C9A84C] font-bold italic">TEARS OF JOY</span>."
            </p>
            
            <p className="text-lg text-[#4B5E53] leading-relaxed mb-10">
              Keeping the above into consideration you may kindly consider extending support to FOCUS SOLUTIONS so as to enable us as a wide service provider, operating in sincerity and professionalism.
            </p>

            <div className="inline-flex flex-col items-center">
              <div className="w-16 h-1 bg-[#C9A84C] rounded-full mb-6"></div>
              <h4 className="text-xl font-bold text-[#2D5A3D]">Mr. Pradeep Kumar Mukherjee</h4>
              <p className="text-[#C9A84C] font-semibold">Proprietor, Focus Solutions</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 5. Minimalist Project List */}
      <div className="max-w-4xl mx-auto px-6 lg:px-10 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-4">Project Experience</h2>
          <div className="w-20 h-1 bg-[#C9A84C] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row items-start gap-6 p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-[#EDE4CE] hover:shadow-xl hover:border-[#C9A84C] transition-all duration-300"
            >
              <div className="w-16 h-16 shrink-0 bg-[#FDF8F0] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-[#EDE4CE]">
                {proj.icon}
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#2D5A3D] mb-3 group-hover:text-[#C9A84C] transition-colors">{proj.title}</h4>
                <p className="text-lg text-[#4B5E53] leading-relaxed">{proj.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 6. Clean Offices Grid */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="bg-[#2D5A3D] rounded-[3rem] p-10 md:p-16 shadow-2xl overflow-hidden relative">
          {/* Decorative background vectors */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A84C] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          
          <div className="relative z-10 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Let's Connect</h2>
              <p className="text-white/80 text-lg md:text-xl max-w-xl">We are always ready to collaborate and expand our services for the betterment of society.</p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="tel:+917894992972" className="flex items-center gap-3 text-white hover:text-[#C9A84C] transition-colors text-xl font-medium">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><Phone className="w-4 h-4" /></div>
                +91 7894992972 / 9437439265
              </a>
              <a href="mailto:focussolutions96@gmail.com" className="flex items-center gap-3 text-white hover:text-[#C9A84C] transition-colors text-lg font-medium">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><Mail className="w-4 h-4" /></div>
                focussolutions96@gmail.com
              </a>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 bg-[#C9A84C] rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4 opacity-90">Registered Office</h4>
              <p className="text-white/80 leading-relaxed font-medium">N-3/368, IRC Village, Nayapalli, Bhubaneswar, Khurdha, Odisha - 751015</p>
            </div>
            
            <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 bg-[#4A7C59] rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4 opacity-90">Admin Office</h4>
              <p className="text-white/80 leading-relaxed font-medium">RAY/74 Ekamar Villa, Behera-Sahi, (Infront of Sekhar Royale Apartment Near Ekamara Kanan Park), Nayapalli Bhubaneswar - 751015</p>
            </div>

            <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4 opacity-90">Functional Office</h4>
              <p className="text-white/80 leading-relaxed font-medium">CSM campus, Niladrivihar omfed colony, Near Utkal Hospital. Post- Chandra sekharpur phase 2, Bhubaneswar, 751016, Odisha.</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default FocusSolutionsSection;
