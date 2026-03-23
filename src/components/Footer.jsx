import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/board-of-trustees" },
  { name: "Donate", href: "/donate" },
];

const Footer = () => {
  return (
    <footer
      className="w-full pt-16 pb-8"
      style={{ background: "linear-gradient(to bottom, #1E3D2F, #152D22)" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* LOGO + ABOUT */}
        <div className="space-y-5">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              className="flex items-center justify-center h-12 w-12 rounded-xl shadow-lg"
              style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
            >
              <span className="text-white font-black text-lg tracking-wider" style={{ color: "#1E3D2F" }}>FIF</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-sm tracking-wide">Focus International</span>
              <span className="font-semibold text-xs tracking-widest uppercase" style={{ color: "#C9A84C" }}>Foundation</span>
            </div>
          </motion.div>

          <motion.p
            className="text-sm leading-relaxed"
            style={{ color: "rgba(253,248,240,0.72)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Focus International Foundation is a non-profitable philanthropy charitable organization. It is working to empower and development of marginalized communities in health, education, livelihoods, disaster relief, social justice, rescue & restoration, focusing on building sustainable community capacity and improving access to resources for vulnerable populations.
          </motion.p>
        </div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-base font-bold mb-5 tracking-wide" style={{ color: "#C9A84C" }}>
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.href}
                  className="transition-colors"
                  style={{ color: "rgba(253,248,240,0.7)" }}
                  onMouseEnter={e => (e.target.style.color = "#FDF8F0")}
                  onMouseLeave={e => (e.target.style.color = "rgba(253,248,240,0.7)")}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-base font-bold mb-5 tracking-wide" style={{ color: "#C9A84C" }}>
            Contact
          </h3>
          <ul className="space-y-4 text-sm" style={{ color: "rgba(253,248,240,0.72)" }}>
            <li className="flex items-center gap-3">
              <Phone size={15} style={{ color: "#C9A84C" }} /> +91 7894992972, 9437439265
            </li>
            <li className="flex items-center gap-3">
              <Mail size={15} style={{ color: "#C9A84C" }} /> focusinternational2014@gmail.com
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "#C9A84C" }} />
              <div>
                <span className="block font-semibold text-white">Office Address:</span>
                Niladri Vihar Omfed Be, (Near Utkal Hospital)<br/>
                Post- Chandrasekharpur, Bhubaneswar, Odisha. Pin- 751021
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0" style={{ color: "#C9A84C" }}>🌐</span>
              <a href="https://www.focusif.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">www.focusif.in</a>
            </li>
          </ul>
        </motion.div>

        {/* SOCIAL LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-base font-bold mb-5 tracking-wide" style={{ color: "#C9A84C" }}>
            Follow Us
          </h3>
          <p className="text-sm mb-5" style={{ color: "rgba(253,248,240,0.65)" }}>
            Join our community on social media and stay updated with our latest programs and impact stories.
          </p>
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.2, backgroundColor: "#C9A84C" }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-full transition-all"
                style={{ background: "rgba(255,255,255,0.1)", color: "#FDF8F0" }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto px-6 mt-12" style={{ borderTop: "1px solid rgba(201,168,76,0.2)" }} />

      {/* BOTTOM BAR */}
      <div className="mt-6 text-center text-sm flex flex-col sm:flex-row items-center justify-center gap-2"
        style={{ color: "rgba(253,248,240,0.5)" }}>
        <span>© {new Date().getFullYear()} Focus International Foundation — All Rights Reserved.</span>
        <span className="flex items-center gap-1">
          Made with <Heart size={12} style={{ color: "#C9A84C" }} fill="#C9A84C" /> for humanity
        </span>
      </div>
    </footer>
  );
};

export default Footer;
