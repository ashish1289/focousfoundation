import React from "react";
import { motion } from "framer-motion";
import { Users, Heart, School, Utensils } from "lucide-react";

const ImpactCard = ({ icon, value, label, iconBg, iconColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-3xl p-8 shadow-lg text-center"
      style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
    >
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
        style={{ background: iconBg }}>
        <span style={{ color: iconColor }}>{icon}</span>
      </div>
      <h3 className="text-4xl font-bold" style={{ color: "#2D5A3D" }}>{value}</h3>
      <p className="mt-2" style={{ color: "#4B5E53" }}>{label}</p>
    </motion.div>
  );
};

const Impact = () => {
  return (
    <section
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(to bottom right, #FDF8F0, #F5EDD8)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#2D5A3D" }}>
          Our Impact
        </h2>
        <p className="text-lg mt-4 max-w-xl mx-auto" style={{ color: "#4B5E53" }}>
          Together, we create measurable change in lives and communities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">
          <ImpactCard icon={<School size={28} />} value="12,500+" label="Children Educated" iconBg="#E8F2EC" iconColor="#2D5A3D" />
          <ImpactCard icon={<Utensils size={28} />} value="3.8 Million+" label="Meals Served" iconBg="#FDF5E0" iconColor="#C9A84C" />
          <ImpactCard icon={<Heart size={28} />} value="4,600+" label="Women Empowered" iconBg="#E8F2EC" iconColor="#4A7C59" />
          <ImpactCard icon={<Users size={28} />} value="1,200+" label="Volunteers" iconBg="#FDF5E0" iconColor="#C9A84C" />
        </div>
      </div>
    </section>
  );
};

export default Impact;
