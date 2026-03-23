// src/sections/Mission.jsx
import React, { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";

const HeadingSplit = ({ text, letterDelay = 0.03, className = "" }) => {
  const letters = useMemo(() => text.split(""), [text]);

  return (
    <h2
      aria-hidden="true"
      className={`overflow-hidden inline-block ${className}`}
      style={{ lineHeight: 1.02 }}
    >
      {letters.map((char, i) => {
        const displayChar = char === " " ? "\u00A0" : char;
        return (
          <motion.span
            key={i}
            style={{ display: "inline-block", whiteSpace: "pre" }}
            initial={{ opacity: 0, y: 24, rotate: -1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.45, delay: i * letterDelay, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {displayChar}
          </motion.span>
        );
      })}
    </h2>
  );
};

const LineSplit = ({ lines = [], className = "" }) => {
  return (
    <div className={className}>
      {lines.map((line, idx) => (
        <motion.p
          key={idx}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-lg md:text-xl leading-relaxed"
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
};

const BentoCard = ({ title, text, image, accentGradient }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "circOut" }}
      viewport={{ once: true, amount: 0.6 }}
      className="relative rounded-3xl overflow-hidden shadow-xl"
      style={{ borderRadius: 22 }}
    >
      {/* accent blob */}
      <div
        className="absolute -left-6 -top-6 w-40 h-40 rounded-2xl opacity-20 blur-md pointer-events-none"
        style={{ background: accentGradient, transform: "rotate(-12deg)" }}
      />

      <div
        className="rounded-3xl min-h-[260px] flex flex-col overflow-hidden"
        style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
      >
        {/* Gold-olive gradient top accent strip */}
        <div className="h-1.5 w-full flex-shrink-0"
          style={{ background: "linear-gradient(to right, #2D5A3D, #C9A84C)" }} />

        <div className="p-6 md:p-7 flex flex-col flex-1">
          <div className="flex-1">
            <div className="w-full h-36 md:h-44 overflow-hidden rounded-xl mb-4">
              {image ? (
                <img src={image} alt={title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-100" />
              )}
            </div>

            <h3 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: "#2D5A3D" }}>
              {title}
            </h3>

            <p className="text-sm md:text-base" style={{ color: "#4B5E53" }}>{text}</p>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <a
              href="/donate"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm shadow-sm transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #2D5A3D, #4A7C59)" }}
            >
              Support
            </a>
            <span className="text-sm" style={{ color: "#7A8F81" }}>Learn more →</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default function Mission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  const cards = [
    {
      title: "Empower Education",
      text: "We provide scholarships, classrooms, and mentors — because every child deserves a future.",
      image: "/educationgif.gif",
      gradient: "linear-gradient(135deg, #C9A84C 0%, #E8F2EC 100%)",
    },
    {
      title: "Nourish & Thrive",
      text: "Healthy meals and nutrition programs for children and families at risk.",
      image: "/nutrition.gif",
      gradient: "linear-gradient(135deg, #4A7C59 0%, #EDE4CE 100%)",
    },
    {
      title: "Women-Led Change",
      text: "Training, small business grants and community leadership support for women.",
      image: "/issue-4.gif",
      gradient: "linear-gradient(135deg, #2D5A3D 0%, #F5EDD8 100%)",
    },
    {
      title: "Community Resilience",
      text: "Local healthcare, disaster relief and sustainable livelihood initiatives.",
      image: "/community.gif",
      gradient: "linear-gradient(135deg, #C9A84C 0%, #E8F2EC 100%)",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden py-20 md:py-28"
      aria-labelledby="our-mission"
      style={{
        background: "linear-gradient(to bottom right, #FDF8F0, #F5EDD8, #EDE4CE)",
      }}
    >
      {/* subtle overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 0.15, scale: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(closest-side, rgba(201,168,76,0.08), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <motion.span
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                style={{ background: "#E8F2EC", color: "#2D5A3D" }}
              >
                Our Purpose
              </motion.span>
            </div>

            <div className="mb-6">
                <div style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
                <HeadingSplit
                  text={"Our Mission — Ignite Hope"}
                  letterDelay={0.03}
                  className="text-4xl md:text-5xl font-extrabold tracking-tight"
                  style={{ color: "#2D5A3D" }}
                />
              </div>
              {/* Gold underline accent */}
              <div className="mt-3 w-16 h-1 rounded-full"
                style={{ background: "linear-gradient(to right, #2D5A3D, #C9A84C)" }} />
            </div>

            <div className="mb-6">
              <LineSplit
                lines={[
                  `\u201cSmall acts of kindness create the ripples that become waves of change.\u201d`,
                ]}
                className="text-lg md:text-xl font-semibold"
                style={{ color: "#C9A84C" }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              viewport={{ once: true }}
              className="leading-relaxed"
              style={{ color: "#4B5E53" }}
            >
              We work hand-in-hand with communities, educators, frontline workers, and
              local leaders to build sustainable pathways of hope. Our mission is rooted
              in dignity — ensuring that every child, woman, and family has access to
              opportunities that empower them to rise above hardship with confidence.
              <br /><br />
              Through education, nutrition, healthcare, and community development, we
              nurture environments where people are not just supported, but strengthened
              to shape their own futures.
              <br /><br />
              Every program we initiate is designed to restore dignity, amplify
              potential, and enable communities to stand resilient, united, and hopeful.
            </motion.p>
          </div>

          {/* Right column: bento grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cards.map((c, idx) => (
                <BentoCard
                  key={idx}
                  title={c.title}
                  text={c.text}
                  image={c.image}
                  accentGradient={c.gradient}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
