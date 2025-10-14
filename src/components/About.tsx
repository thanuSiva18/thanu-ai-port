import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Brain, Database, BarChart3, Zap, Code2, TrendingUp } from "lucide-react";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        setScrollY(scrollProgress * 30);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const expertiseAreas = [
    { 
      icon: Database, 
      title: "Data Engineering",
      description: "SQL, ETL, Data Pipelines"
    },
    { 
      icon: BarChart3, 
      title: "Visualization",
      description: "Power BI, Streamlit, Dashboards"
    },
    { 
      icon: Brain, 
      title: "Machine Learning",
      description: "Scikit-learn, Model Building"
    },
    { 
      icon: Code2, 
      title: "Python Development",
      description: "Pandas, NumPy, Automation"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: prefersReducedMotion ? 0 : 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: prefersReducedMotion ? 0.2 : 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-32 px-4 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Animated Background Elements */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.03}px)` }}
      >
        {/* Floating particles */}
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{ y: 0, opacity: 0.3 }}
            animate={{ 
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 8 + Math.random() * 6, 
              repeat: Infinity, 
              repeatType: "loop", 
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs - matching site style */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] animate-float" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] animate-float" style={{ animationDelay: '2.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glowing title background */}
          <div className="relative inline-block mb-6">
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-full blur-2xl"
              animate={prefersReducedMotion ? {} : { 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <h2 
              id="about-heading"
              className="text-4xl md:text-5xl font-bold text-center relative"
            >
              About <span className="text-gradient">Me</span>
            </h2>
          </div>
          
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Where curiosity meets data and creativity
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Story */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Profile tagline with accent circle */}
            <motion.div 
              className="flex items-start gap-4"
              variants={itemVariants}
            >
              <div className="relative mt-2 flex-shrink-0">
                <motion.div 
                  className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center"
                  whileHover={{ scale: 1.1, borderColor: "hsl(195, 100%, 60%)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-500"
                    animate={prefersReducedMotion ? {} : {
                      boxShadow: [
                        "0 0 20px hsl(195, 100%, 60%, 0.4)",
                        "0 0 40px hsl(195, 100%, 60%, 0.6)",
                        "0 0 20px hsl(195, 100%, 60%, 0.4)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
                {/* Orbiting ring */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary/20 rounded-full"
                  animate={prefersReducedMotion ? {} : { rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Aspiring Data Scientist
                </h3>
                <p className="text-foreground/70 text-lg">
                  Transforming complexity into clarity
                </p>
              </div>
            </motion.div>

            {/* Story paragraphs */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
                Fueled by <span className="text-primary font-semibold">curiosity</span> and a love for solving problems, I explore data to uncover patterns and decisions hidden in numbers.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
                I build <span className="text-primary font-semibold">dashboards and models</span> that turn complexity into clear, actionable strategies.
              </p>
              
              <div className="relative pl-6 border-l-2 border-primary/30">
                <p className="text-base md:text-lg italic text-foreground/70 leading-relaxed">
                  "I'm growing into a data professional who blends technical craft with business impact."
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 pt-6"
              variants={itemVariants}
            >
              {[
                { value: "5+", label: "Projects" },
                { value: "2", label: "Internships" },
                { value: "3+", label: "Tools Mastered" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-xl glass-card border border-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-foreground/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl glass-card border border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 text-foreground/90 hover:text-primary font-medium hover:shadow-[0_0_30px_rgba(0,217,255,0.2)]"
              >
                <Zap className="w-5 h-5" />
                EXPLORE MY WORK
                <motion.span
                  className="inline-block"
                  animate={prefersReducedMotion ? {} : { x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Expertise Cards */}
          <motion.div
            className="grid grid-cols-2 gap-4 lg:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group relative"
                  style={{ 
                    transitionDelay: `${index * 50}ms` 
                  }}
                >
                  <motion.div 
                    className="relative h-52 lg:h-60 rounded-2xl p-6 flex flex-col items-start justify-between border transition-all duration-300 overflow-hidden"
                    style={{
                      backdropFilter: "blur(12px)",
                      background: "rgba(255, 255, 255, 0.03)",
                      borderColor: "rgba(255, 255, 255, 0.06)",
                    }}
                    whileHover={prefersReducedMotion ? {} : {
                      y: -8,
                      scale: 1.02,
                      borderColor: "rgba(0, 217, 255, 0.3)",
                      boxShadow: "0 12px 40px hsl(195, 100%, 60%, 0.15), 0 0 60px 0 hsl(195, 100%, 60%, 0.08) inset",
                      transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
                    }}
                  >
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Animated corner accent */}
                    <motion.div
                      className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    {/* Icon */}
                    <div className="relative z-10">
                      <motion.div 
                        className="p-3 rounded-xl bg-primary/10 border border-primary/20 inline-flex mb-4 group-hover:bg-primary/20 transition-all duration-300"
                        whileHover={prefersReducedMotion ? {} : { 
                          scale: 1.15, 
                          rotate: [0, -5, 5, 0],
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <Icon className="w-7 h-7 text-primary" />
                      </motion.div>
                    </div>
                    
                    {/* Text content */}
                    <div className="relative z-10 w-full">
                      <h4 className="text-base md:text-lg font-bold mb-2 text-foreground/90 group-hover:text-primary transition-colors">
                        {area.title}
                      </h4>
                      <p className="text-xs md:text-sm text-foreground/60 leading-relaxed">
                        {area.description}
                      </p>
                    </div>

                    {/* Shine effect on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: "linear-gradient(135deg, transparent 0%, rgba(0,217,255,0.1) 50%, transparent 100%)",
                        transform: "translateX(-100%)",
                      }}
                      whileHover={prefersReducedMotion ? {} : {
                        transform: "translateX(100%)",
                        transition: { duration: 0.7, ease: "easeInOut" }
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;