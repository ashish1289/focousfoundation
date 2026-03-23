import React, { useMemo } from "react";
import { motion } from "framer-motion";

// Split text letter-by-letter
const SplitText = ({ text, delayStep = 0.03, className = "" }) => {
  const letters = useMemo(() => text.split(""), [text]);

  return (
    <h2
      aria-hidden="true"
      className={`inline-block overflow-hidden ${className}`}
      style={{ lineHeight: 1.05 }}
    >
      {letters.map((char, i) => {
        const letter = char === " " ? "\u00A0" : char;
        return (
          <motion.span
            key={i}
            style={{ display: "inline-block", whiteSpace: "pre" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: i * delayStep,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {letter}
          </motion.span>
        );
      })}
    </h2>
  );
};

const AboutSection = () => {
  return (
    <section
      className="w-full py-20 md:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, #FDF8F0, #F5EDD8, #EDE4CE)",
      }}
    >
      {/* Soft blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: "#C9A84C" }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true }}
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "#4A7C59" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <div style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
            <SplitText
              text="About Focus International Foundation"
              className="text-3xl md:text-4xl font-extrabold"
              style={{ color: "#2D5A3D" }}
            />
          </div>
          {/* manually apply color since tailwind inline won't work on dynamic className */}
          <style>{`.about-heading { color: #2D5A3D; }`}</style>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl mx-auto text-md md:text-lg"
            style={{ color: "#4B5E53" }}
          >
            "We believe that every act of kindness has the power to transform
            lives and build a brighter tomorrow."
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* WHO WE ARE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 shadow-xl"
            style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-xl"
              style={{ background: "#E8F2EC" }}>🌿</div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#2D5A3D" }}>
              Who We Are
            </h3>
            <p className="leading-relaxed text-md" style={{ color: "#4B5E53" }}>
              Focus International Foundation is a non-profit organization dedicated to
              uplifting communities through education, nutrition, women
              empowerment and healthcare.
              We work with local partners, volunteers and communities to ensure
              that hope reaches every household.
            </p>
          </motion.div>

          {/* FOUNDER BOX */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 shadow-xl text-center"
            style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md mb-4"
              style={{ border: "3px solid #C9A84C" }}>
              <img
                src="/np.jpg"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold" style={{ color: "#2D5A3D" }}>
              Niranjan Patnaik
            </h3>
            <p className="text-sm font-semibold mb-4" style={{ color: "#C9A84C" }}>
              Founder, Focus International Foundation
            </p>
            <p className="leading-relaxed text-md" style={{ color: "#4B5E53" }}>
              "Together, we can create a world where every child is educated,
              every family nourished, and every woman empowered."
            </p>
          </motion.div>

          {/* OUR VALUES */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 shadow-xl"
            style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-xl"
              style={{ background: "#FDF5E0" }}>⭐</div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#2D5A3D" }}>
              Our Values
            </h3>
            <ul className="space-y-3 text-md" style={{ color: "#4B5E53" }}>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#2D5A3D" }} />
                Compassion drives our work.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#2D5A3D" }} />
                Equality is at the heart of every program.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#2D5A3D" }} />
                Transparency builds trust.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#2D5A3D" }} />
                Innovation uplifts communities.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#C9A84C" }} />
                Humanity above all.
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl p-10 shadow-xl relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #2D5A3D, #1E3D2F)" }}
        >
          {/* Gold accent blob */}
          <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full opacity-20"
            style={{ background: "#C9A84C" }} />
          <h3 className="text-3xl font-bold mb-4 text-white relative z-10">Our Vision</h3>
          <p className="leading-relaxed text-lg max-w-3xl relative z-10"
            style={{ color: "rgba(253,248,240,0.88)" }}>
            To build a society where opportunities are equal, dignity is upheld,
            and every person — regardless of background — has the chance to
            dream, learn, grow, and thrive.
          </p>
        </motion.div>

        {/* =========== KINDNESS IN ACTION =========== */}
        <div className="mt-32 mb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h3 className="text-3xl md:text-4xl font-bold" style={{ color: "#2D5A3D" }}>
              Your Kindness in Action
            </h3>
            <p className="max-w-2xl mx-auto mt-3 text-lg" style={{ color: "#4B5E53" }}>
              Your donation touches real lives through education, food, healthcare,
              and community programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { img: "/1.png", title: "Supporting Families in Need", desc: "Your donations provide essential aid to struggling families." },
              { img: "/2.png", title: "Giving Hope & Warmth", desc: "A small gesture of love becomes a big change for someone in need." },
              { img: "/3.png", title: "Empowering Communities", desc: "Education, opportunities and unity — built through your generosity." },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl shadow-xl"
                style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
              >
                <img src={card.img} className="h-56 w-full object-cover rounded-2xl" alt={card.title} />
                <h4 className="text-xl font-bold mt-4" style={{ color: "#2D5A3D" }}>
                  {card.title}
                </h4>
                <p className="mt-2" style={{ color: "#4B5E53" }}>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========== TESTIMONIALS =========== */}
        <div className="max-w-6xl mx-auto mb-32">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center text-3xl md:text-4xl font-bold mb-14"
            style={{ color: "#2D5A3D" }}
          >
            Loved by Donors Across the Country
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { quote: `\u201cI donated during a tough time for my community. They used every rupee efficiently. I truly trust them.\u201d`, name: "Priya Sharma" },
              { quote: `\u201cThe transparency and kindness of Focus International Foundation is unmatched. Happy to support such a cause.\u201d`, name: "Amit Verma" },
              { quote: `\u201cI could SEE the real impact through photos and stories. That\u2019s why I regularly donate now.\u201d`, name: "Fatima Noor" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl shadow-xl relative"
                style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
              >
                <div className="text-4xl mb-4" style={{ color: "#C9A84C" }}>"</div>
                <p className="leading-relaxed" style={{ color: "#4B5E53" }}>{t.quote}</p>
                <h4 className="font-bold mt-5" style={{ color: "#2D5A3D" }}>— {t.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
