import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { QrCode, Banknote, CreditCard, Wallet } from "lucide-react";

const SplitText = ({ text, delayStep = 0.03, className }) => {
  const letters = useMemo(() => text.split(""), [text]);
  return (
    <h2 className={`inline-block overflow-hidden ${className}`}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * delayStep, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
};

const DonateSection = () => {
  return (
    <section
      className="w-full py-24 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom right, #FDF8F0, #F5EDD8, #EDE4CE)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-10 right-10 w-60 rounded-full blur-3xl opacity-15 pointer-events-none h-60"
        style={{ background: "#C9A84C" }} />
      <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "#4A7C59" }} />

      {/* ========================= HERO SECTION ========================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 mb-24">
        <div className="flex flex-col md:flex-row items-center gap-14">

          {/* Left - Text */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-5"
              style={{ background: "#E8F2EC", color: "#2D5A3D" }}
            >
              Make a Difference Today
            </motion.span>
            <div style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
              <SplitText
                text="Your Donation Creates Hope"
                className="text-4xl md:text-5xl font-extrabold"
                style={{ color: "#2D5A3D" }}
              />
            </div>

            <p className="text-lg mt-5 leading-relaxed" style={{ color: "#4B5E53" }}>
              Every rupee you give becomes a seed of kindness.
              Together, we uplift children, empower women, spread nourishment,
              and build a harmonious community. Your support makes real, lasting change
              in the lives of those who need it most.
            </p>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.img
            src="/charity-money-jar-donation-campaign.jpg"
            className="w-full max-w-md rounded-3xl shadow-xl"
            alt="Charity Jar"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>

      {/* ========================= QR + DONATION FORM ========================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-14 mb-32">

        {/* QR Box */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl shadow-xl text-center"
          style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#2D5A3D" }}>
            Scan & Donate
          </h3>
          <img
            src="/qr.jpg"
            className="mx-auto w-52 h-52 rounded-xl shadow-md"
            alt="QR Donation"
            style={{ border: "2px solid #EDE4CE" }}
          />
          <p className="mt-4 text-sm" style={{ color: "#4B5E53" }}>
            Works with all UPI apps — Google Pay, PhonePe, Paytm.
          </p>
          <div className="mt-3 px-3 py-1.5 rounded-full inline-block text-xs font-semibold"
            style={{ background: "#E8F2EC", color: "#2D5A3D" }}>
            UPI: focusinternational@ybl
          </div>
        </motion.div>

        {/* Donation Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl shadow-xl"
          style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
        >
          <h3 className="text-2xl font-bold mb-6" style={{ color: "#2D5A3D" }}>Quick Donate</h3>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-xl outline-none transition"
              style={{ border: "1.5px solid #EDE4CE", background: "#FDF8F0" }}
              onFocus={e => (e.target.style.borderColor = "#2D5A3D")}
              onBlur={e => (e.target.style.borderColor = "#EDE4CE")}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-xl outline-none transition"
              style={{ border: "1.5px solid #EDE4CE", background: "#FDF8F0" }}
              onFocus={e => (e.target.style.borderColor = "#2D5A3D")}
              onBlur={e => (e.target.style.borderColor = "#EDE4CE")}
            />
            <input
              type="number"
              placeholder="Amount (₹)"
              className="w-full p-3 rounded-xl outline-none transition"
              style={{ border: "1.5px solid #EDE4CE", background: "#FDF8F0" }}
              onFocus={e => (e.target.style.borderColor = "#2D5A3D")}
              onBlur={e => (e.target.style.borderColor = "#EDE4CE")}
            />

            {/* Quick amount pills */}
            <div className="flex flex-wrap gap-2">
              {["₹500", "₹1000", "₹2500", "₹5000"].map(amt => (
                <button
                  key={amt}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-90"
                  style={{ background: "#E8F2EC", color: "#2D5A3D", border: "1px solid #4A7C59" }}
                >
                  {amt}
                </button>
              ))}
            </div>

            <button
              className="w-full py-3 rounded-xl text-lg flex items-center justify-center gap-2 text-white font-semibold shadow-md transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #2D5A3D, #4A7C59)" }}
            >
              Donate Now <Wallet size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* ========================= WHY YOUR DONATION MATTERS ========================= */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="p-10 rounded-3xl shadow-xl"
          style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <img
              src="/people-holding-rubber-heart.jpg"
              className="rounded-3xl w-full shadow-lg"
              alt="People holding heart"
            />
            <div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: "#2D5A3D" }}>
                Why Your Donation Matters
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: "#4B5E53" }}>
                Your kindness becomes food for a hungry child,
                education for a hopeful student,
                medicine for a struggling family,
                and dignity for a mother rebuilding her life.
                <br /><br />
                <strong style={{ color: "#2D5A3D" }}>You are not just donating — you are giving a family a future.</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ========================= UNITY & COMMUNITY ========================= */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 mb-20 text-center">
        <h3 className="text-3xl font-bold" style={{ color: "#2D5A3D" }}>
          Together, We Lift Every Community
        </h3>
        <p className="max-w-2xl mx-auto mt-3" style={{ color: "#4B5E53" }}>
          We serve people from all religions, cultures, and backgrounds.
          Humanity is our only identity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14">
          <img src="/52104.jpg" className="w-full rounded-3xl shadow-lg" alt="Community" />
          <img src="/66142.jpg" className="w-full rounded-3xl shadow-lg" alt="Community" />
        </div>
      </div>

      {/* ========================= OTHER WAYS TO GIVE ========================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-28">
        <h3 className="text-center text-3xl font-bold mb-10" style={{ color: "#2D5A3D" }}>
          Other Ways to Give
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              Icon: Banknote,
              title: "UPI ID",
              content: "focusinternational@ybl",
            },
            {
              Icon: CreditCard,
              title: "Bank Transfer",
              content: (
                <>A/C: 01234567890<br />IFSC: HDFC0001234<br />Name: Focus International Foundation</>
              ),
            },
            {
              Icon: QrCode,
              title: "International",
              content: "PayPal & Stripe support coming soon.",
            },
          ].map(({ Icon, title, content }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 rounded-3xl shadow-xl text-center"
              style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: "#E8F2EC" }}>
                <Icon size={28} style={{ color: "#2D5A3D" }} />
              </div>
              <h4 className="text-xl font-bold mt-1" style={{ color: "#2D5A3D" }}>{title}</h4>
              <p className="mt-2 leading-relaxed" style={{ color: "#4B5E53" }}>{content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
