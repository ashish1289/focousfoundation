import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Layout from "../layout/Layout";

// Dummy blog data
const blogPosts = [
  {
    id: 1,
    title: "Empowering Communities Through Education",
    excerpt: "Discover how Focus International Foundation is transforming lives through our comprehensive education programs, providing access to quality learning for underprivileged children across Odisha and West Bengal.",
    content: `
      <p>Education is the cornerstone of social transformation. At Focus International Foundation, we believe that every child deserves access to quality education, regardless of their socio-economic background. Our comprehensive education programs have been making a significant impact in marginalized communities across Odisha and West Bengal.</p>
      
      <h2>Our Educational Initiatives</h2>
      <p>We have established multiple learning centers in rural and urban areas, providing free education to children who would otherwise be unable to attend school. Our programs include:</p>
      <ul>
        <li>Primary and secondary education support (VidyaVhan special Tuition classes)</li>
        <li>Sponsorship for dropout students</li>
        <li>Adult literacy programs</li>
        <li>Vocational skill development to eradicate employment crises</li>
      </ul>
      
      <h2>Impact Stories</h2>
      <p>Over the past year, we have successfully enrolled hundreds of children in our education programs. Many of our students have gone on to pursue higher education and secure meaningful employment, breaking the cycle of poverty in their families.</p>
      
      <h2>Looking Forward</h2>
      <p>We are committed to expanding our reach and ensuring that no child is left behind. With your support, we can continue to build a brighter future for the next generation.</p>
    `,
    author: "Focus Foundation Team",
    date: "2024-02-15",
    image: "/education.jpg",
    category: "Education",
    images: ["/education.jpg", "/1.png"],
    readTime: "4 min read"
  },
  {
    id: 2,
    title: "Healthcare for All: Our Medical Mission",
    excerpt: "Learn about our medical health camps and special care programs that bring essential healthcare services to remote villages, ensuring that distance and poverty don't prevent anyone from receiving care.",
    content: `
      <p>Healthcare is a fundamental right, yet millions lack access to basic medical facilities. Focus International Foundation revolves around bridging this gap through our innovative and on-the-ground healthcare initiatives.</p>
      
      <h2>Our Health Interventions</h2>
      <p>Our organization travels to remote villages, bringing doctors, medicines, and diagnostic equipment directly to communities that need them most. These initiatives provide:</p>
      <ul>
        <li>Medical health camps and de-worming</li>
        <li>Immunization and maternal care</li>
        <li>Special care and hospitalization for critical cases</li>
        <li>Yoga classes and Leprosy care</li>
      </ul>
      
      <h2>Focus on Nutrition</h2>
      <p>Beyond treatment, we focus on preventive care through awareness programs about hygiene and nutrition. Our daycare centers and home sponsorships provide special food and nutritional support for mothers and children.</p>
      
      <p>The impact has been remarkable. Many who had never seen a doctor are now receiving regular medical care, leading to a significant reduction in preventable diseases in our target areas.</p>
    `,
    author: "Mr. Pradeep Kumar Mukherjee",
    date: "2024-01-28",
    image: "/9.png",
    category: "Healthcare",
    images: ["/9.png", "/8.png"],
    readTime: "5 min read"
  },
  {
    id: 3,
    title: "Rescue & Rehabilitation: Building Stronger Communities",
    excerpt: "Explore our rescue and rehabilitation programs that provide shelter settlement, sponsorships for orphans, and critical support for vulnerable populations.",
    content: `
      <p>When vulnerable individuals are empowered, entire communities thrive. Focus International Foundation's rescue and rehabilitation programs are designed to create safe havens and opportunities for the most marginalized.</p>
      
      <h2>Shelter and Support</h2>
      <p>We offer comprehensive support to those facing crises, including:</p>
      <ul>
        <li>Sponsorships for poor, needy, and orphaned children</li>
        <li>Restoration and shelter settlement for victim families</li>
        <li>Protection of civil, economic, and political rights</li>
      </ul>
      
      <h2>Awareness and Prevention</h2>
      <p>Through our awareness campaigns, we coordinate with government and public authorities on critical issues related to women trafficking, child abuse, domestic violence, and child labor.</p>
      
      <h2>Success Stories</h2>
      <p>We believe that empowering individuals through proper rehabilitation is the key to building stronger, more resilient communities. Every person we support creates a ripple effect that benefits their family and the larger society.</p>
    `,
    author: "Focus Foundation Team",
    date: "2024-01-10",
    image: "/10.png",
    category: "Rehabilitation",
    images: ["/10.png", "/2.png"],
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "Community Development: Our Green Initiative",
    excerpt: "Read about our plantation drives, community mobilization, and awareness campaigns that are helping create a sustainable and empowered future.",
    content: `
      <p>Environmental conservation and community development are deeply intertwined. Focus International Foundation has launched several initiatives to promote both social empowerment and environmental sustainability.</p>
      
      <h2>Plantation and Cleanliness Drives</h2>
      <p>We organize regular tree plantation and road cleaning drives across various locations, involving local communities and volunteers to improve air quality and local hygiene.</p>
      
      <h2>Economic Empowerment</h2>
      <p>Our community development isn't just about the environment. We facilitate:</p>
      <ul>
        <li>Revolving loans for income generation and small businesses</li>
        <li>Water facility development</li>
        <li>Government liaising for various community needs</li>
      </ul>
      
      <h2>Cultural Preservation</h2>
      <p>We also promote and protect Indian traditional music, dance, handicrafts, and modern art to ensure holistic community growth and preservation of our rich heritage.</p>
      
      <p>Together, we can create a sustainable, empowered community for future generations. Every small action counts.</p>
    `,
    author: "Mr. Pradeep Kumar Mukherjee",
    date: "2023-12-18",
    image: "/101.jpg",
    category: "Environment",
    images: ["/101.jpg", "/3.png"],
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "Relief Operations: Standing Together in Crises",
    excerpt: "Discover how we mobilize natural relief measures during calamities to assist affected families with food, clothing, and essential educational supplements.",
    content: `
      <p>Natural calamities can deeply shatter lives. Focus International Foundation stands ready to assist those most affected by ensuring they receive timely help.</p>
      
      <h2>Disaster Relief</h2>
      <p>Our teams spring into action during times of famine, fire, flood, and earthquakes. We organize comprehensive relief measures that include:</p>
      <ul>
        <li>Immediate food and blanket distribution</li>
        <li>Clothing and educational supplement distribution</li>
        <li>Flood relief and rescued assistance</li>
      </ul>
      
      <h2>Building Resilience</h2>
      <p>Beyond immediate relief, we work with communities to help them rebuild their lives and homes. Your support makes it possible for us to stand as a pillar of hope during their darkest times.</p>
    `,
    author: "Focus Foundation Team",
    date: "2023-11-05",
    image: "/2.png",
    category: "Relief Work",
    images: ["/2.png", "/1.png"],
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "Cultural Events: Celebrating Our Heritage",
    excerpt: "See how we bring joy and unity to communities through cultural events, sports competitions, and national day observations.",
    content: `
      <p>While education and healthcare rebuild lives, cultural unity and joy provide the emotional foundation that every human needs. Focus International Foundation actively organizes events that foster community spirit and uncover hidden talents.</p>
      
      <h2>Our Events</h2>
      <p>Throughout the year, we host numerous events to cultivate universal brotherhood and communal harmony. These include:</p>
      <ul>
        <li>Games and sports competitions</li>
        <li>Hidden talent and quiz competitions</li>
        <li>Festival and national day observations</li>
      </ul>
      
      <h2>Celebrating Milestones</h2>
      <p>We ensure that those in orphanages and daycare centers never feel left out by hosting special birthday celebrations and organizing events to keep the spirit of togetherness alive.</p>
    `,
    author: "Focus Foundation Team",
    date: "2023-10-15",
    image: "/3.png",
    category: "Culture",
    images: ["/3.png", "/10.png"],
    readTime: "3 min read"
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogPosts.find((post) => post.id === parseInt(id));

  if (!blog) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center" style={{ background: "#FDF8F0" }}>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4" style={{ color: "#2D5A3D" }}>Blog Not Found</h1>
            <p className="mb-6" style={{ color: "#4B5E53" }}>The blog post you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate("/blog")}
              className="px-6 py-3 text-white rounded-lg hover:shadow-lg transition-all"
              style={{ background: "#C9A84C" }}
            >
              Back to Blog
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Layout>
      <section className="w-full py-24 md:py-32 relative overflow-hidden" style={{ background: "linear-gradient(to bottom right, #FDF8F0, #F5EDD8)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10 bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border" style={{ borderColor: "#EDE4CE" }}>
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 mb-8 font-medium transition-colors"
            style={{ color: "#C9A84C" }}
          >
            <ArrowLeft size={20} />
            <span className="hover:text-[#2D5A3D] transition-colors">Back to Blog</span>
          </motion.button>

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <span className="text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm"
                  style={{ background: "#C9A84C" }}>
              {blog.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
            style={{ color: "#2D5A3D" }}
          >
            {blog.title}
          </motion.h1>

          {/* Meta Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b"
            style={{ color: "#7A8F81", borderColor: "#EDE4CE" }}
          >
            <div className="flex items-center gap-2">
              <User size={18} />
              <span className="font-medium" style={{ color: "#4B5E53" }}>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{formatDate(blog.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{blog.readTime}</span>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8 rounded-2xl overflow-hidden shadow-lg border"
            style={{ borderColor: "#EDE4CE" }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[300px] md:h-[450px] object-cover"
            />
          </motion.div>

          {/* Blog Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
            style={{
              color: "#4B5E53",
              lineHeight: "1.8",
            }}
          />

          {/* Additional Images */}
          {blog.images && blog.images.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {blog.images.slice(1).map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden shadow-lg border" style={{ borderColor: "#EDE4CE" }}>
                  <img
                    src={img}
                    alt={`${blog.title} - Image ${idx + 2}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </motion.div>
          )}

          {/* Back to Blog Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t"
            style={{ borderColor: "#EDE4CE" }}
          >
            <button
              onClick={() => navigate("/blog")}
              className="px-8 py-3 text-white rounded-xl hover:shadow-lg transition-all font-semibold"
              style={{ background: "linear-gradient(to right, #2D5A3D, #4A7C59)" }}
            >
              Back to All Blogs
            </button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
