import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const lines = [
    "Fueled by curiosity and a love for solving problems, I dive into data to uncover patterns and meaning.",
    "From dashboards to machine learning models, I turn data into stories and strategies.",
    "My goal: to grow into a data professional who blends technical skill with business impact."
  ];

  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Parallax Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            initial={{ y: 0 }}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, repeatType: "loop", delay: Math.random() * 5 }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Animated Gradient Shimmer & Pulsing Glow Behind Heading */}
        <div className="relative w-full flex justify-center mb-16">
          <motion.div
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-72 h-20 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-full blur-2xl opacity-40 animate-pulse"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          />
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-0 relative z-10 text-gradient animate-glow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
        </div>

        {/* 3D Floating Avatar Silhouette (SVG, subtle, hides on mobile) */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-32 md:top-24 w-40 h-40 md:w-56 md:h-56 opacity-30 pointer-events-none hidden sm:block"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.2 }}
        >
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <ellipse cx="60" cy="45" rx="32" ry="32" fill="url(#avatarGradient)" />
            <ellipse cx="60" cy="95" rx="40" ry="18" fill="url(#avatarGradient)" />
            <defs>
              <radialGradient id="avatarGradient" cx="0" cy="0" r="1" gradientTransform="translate(60 60) scale(60)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00d9ff" stopOpacity="0.3" />
                <stop offset="1" stopColor="#7928ca" stopOpacity="0.1" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Glassmorphism Container with Inner Glow */}
        <motion.div
          className="glass-card rounded-2xl px-8 py-12 md:px-16 md:py-16 shadow-lg border border-primary/20 backdrop-blur-lg relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: "0 0 60px 0 hsl(195,100%,60%,0.08) inset" }} />
          <div className="text-center space-y-8">
            {lines.map((line, index) => (
              <motion.p
                key={index}
                className="text-xl md:text-2xl leading-relaxed text-foreground/80"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.25 }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
