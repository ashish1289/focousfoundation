import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// SplitText Animation Component
const SplitText = ({ text, delayStep = 0.03, className }) => {
  const letters = useMemo(() => text.split(""), [text]);

  return (
    <h1 className={`inline-block overflow-hidden ${className}`}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: i * delayStep,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
};

const Hero = () => {
  const backgroundImages = ["/201.png", "/202.png", "/203.png"];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background Carousel */}
      {backgroundImages.map((img, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${img})`,
            animation: `fadeSlide 18s infinite`,
            animationDelay: `${i * 6}s`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        ></motion.div>
      ))}

      {/* Olive-tinted overlay for warmth */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, rgba(30,61,47,0.55) 0%, rgba(45,90,61,0.35) 60%, rgba(30,61,47,0.6) 100%)" }}
      />

      {/* HERO CONTENT */}
      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center gap-12 md:gap-16 lg:gap-24">

          {/* LEFT TEXT */}
          <div className="flex-1 max-w-2xl">
            {/* Tag pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              style={{ background: "rgba(201,168,76,0.25)", color: "#F5E9C8", border: "1px solid rgba(201,168,76,0.4)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
              Focus International Foundation
            </motion.div>

            <div style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
              <SplitText
                text="Building Hope, One Life at a Time"
                className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg mt-6 leading-relaxed"
              style={{ color: "rgba(253,248,240,0.88)" }}
            >
              Together, we create sustainable change by uplifting communities,
              empowering families, and bringing opportunities to those who need
              them most.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Link
                to="/donate"
                className="px-7 py-3.5 rounded-xl text-base font-bold shadow-lg transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                  color: "#1E3D2F",
                }}
              >
                Donate Now
              </Link>
              <Link
                to="/mission"
                className="px-7 py-3.5 rounded-xl text-base font-semibold border transition-all hover:scale-105"
                style={{
                  background: "rgba(253,248,240,0.12)",
                  color: "#FDF8F0",
                  border: "1.5px solid rgba(253,248,240,0.45)",
                  backdropFilter: "blur(6px)",
                }}
              >
                Our Mission →
              </Link>
            </motion.div>
          </div>

          {/* RIGHT SIDE — Circular Focal Image + Orbital Stat Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="hidden md:flex md:flex-1 md:justify-end items-center"
          >
            {/* Outer container — positions floating badges around the circle */}
            <div className="relative w-[340px] h-[340px] flex items-center justify-center">

              {/* Animated outer ring */}
              <div
                className="absolute w-[320px] h-[320px] rounded-full"
                style={{
                  border: "2px dashed rgba(201,168,76,0.45)",
                  animation: "spin 18s linear infinite",
                }}
              />

              {/* Static gold glow ring */}
              <div
                className="absolute w-[290px] h-[290px] rounded-full"
                style={{
                  border: "2.5px solid rgba(201,168,76,0.3)",
                  boxShadow: "0 0 40px rgba(201,168,76,0.18)",
                }}
              />

              {/* Main circular image */}
              <div
                className="w-[250px] h-[250px] rounded-full overflow-hidden relative z-10"
                style={{
                  border: "4px solid rgba(201,168,76,0.6)",
                  boxShadow: "0 0 60px rgba(30,61,47,0.7), 0 0 30px rgba(201,168,76,0.25)",
                }}
              >
                <img
                  src="/201.png"
                  alt="Focus International Foundation"
                  className="w-full h-full object-cover object-center"
                />
                {/* Inner vignette */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ background: "radial-gradient(circle at center, transparent 55%, rgba(30,61,47,0.5) 100%)" }}
                />
              </div>

              {/* ── Floating stat badges positioned around the circle ── */}

              {/* TOP — Education */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute top-0 left-1/2 -translate-x-1/2 px-3.5 py-2 rounded-2xl text-center"
                style={{
                  background: "rgba(253,248,240,0.14)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(201,168,76,0.35)",
                  minWidth: 110,
                }}
              >
                <div className="text-white font-extrabold text-lg leading-none">12K+</div>
                <div className="text-xs mt-0.5" style={{ color: "#C9A84C" }}>Educated</div>
              </motion.div>

              {/* RIGHT — Meals */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute right-0 top-1/2 -translate-y-1/2 px-3.5 py-2 rounded-2xl text-center"
                style={{
                  background: "rgba(45,90,61,0.45)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(74,124,89,0.5)",
                  minWidth: 100,
                }}
              >
                <div className="text-white font-extrabold text-lg leading-none">3.8M+</div>
                <div className="text-xs mt-0.5" style={{ color: "#C9A84C" }}>Meals</div>
              </motion.div>

              {/* BOTTOM — Since */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full flex items-center gap-2"
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                  boxShadow: "0 4px 24px rgba(201,168,76,0.4)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-bold" style={{ color: "#1E3D2F" }}>Since 2010</span>
              </motion.div>

              {/* LEFT — Women */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute left-0 top-1/2 -translate-y-1/2 px-3.5 py-2 rounded-2xl text-center"
                style={{
                  background: "rgba(253,248,240,0.14)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(201,168,76,0.35)",
                  minWidth: 100,
                }}
              >
                <div className="text-white font-extrabold text-lg leading-none">4.6K+</div>
                <div className="text-xs mt-0.5" style={{ color: "#C9A84C" }}>Women</div>
              </motion.div>

            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
