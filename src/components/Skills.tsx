import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Code2, Database, BarChart3, Brain, GitBranch, MessageSquare, Users, Lightbulb, Zap, Trophy, Target, Rocket } from "lucide-react";

const skillCategories = [
  {
    title: "Data Science & Analytics",
    color: "primary",
    icon: Brain,
    skills: [
      { name: "Python", level: 92, icon: Code2, projects: "5+ projects", highlight: true },
      { name: "Pandas & NumPy", level: 88, icon: Code2, projects: "Data manipulation expert" },
      { name: "Scikit-learn", level: 83, icon: Brain, projects: "ML model building" },
      { name: "Statistical Analysis", level: 85, icon: BarChart3, projects: "Hypothesis testing" },
    ]
  },
  {
    title: "Data Visualization",
    color: "purple-500",
    icon: BarChart3,
    skills: [
      { name: "Power BI", level: 90, icon: BarChart3, projects: "10+ dashboards", highlight: true },
      { name: "Streamlit", level: 86, icon: Code2, projects: "Interactive web apps" },
      { name: "Matplotlib & Seaborn", level: 84, icon: BarChart3, projects: "Custom visualizations" },
      { name: "Excel Advanced", level: 85, icon: BarChart3, projects: "Complex analysis" },
    ]
  },
  {
    title: "Database & Tools",
    color: "cyan-500",
    icon: Database,
    skills: [
      { name: "SQL", level: 88, icon: Database, projects: "Complex queries", highlight: true },
      { name: "Git & GitHub", level: 87, icon: GitBranch, projects: "Version control pro" },
      { name: "Major IDEs", level: 85, icon: Code2, projects: "Proficient in VS Code, Cursor, Jupyter, and Google Colab" },
      { name: "LLM Models", level: 90 , icon: Code2, projects: "Experienced with ChatGPT, Gemini, Claude, and Perplexity for AI-assisted development" },
    ]
  }
];

const softSkills = [
  { 
    name: "Analytical Thinking", 
    icon: Lightbulb, 
    description: "Approaching data challenges with logical and structured problem-solving.",
    stat: "Applied in multiple academic and internship projects"
  },
  { 
    name: "Communication", 
    icon: MessageSquare, 
    description: "Explaining technical insights clearly to both technical and non-technical people.",
    stat: "Shared project insights with mentors and teams"
  },
  { 
    name: "Team Collaboration", 
    icon: Users, 
    description: "Working closely with teammates to build, test, and deploy data-driven solutions.",
    stat: "Collaborated in 3+ project teams"
  },
  { 
    name: "Continuous Learning", 
    icon: Rocket, 
    description: "Constantly exploring new tools, frameworks, and analytical methods.",
    stat: "Completed IBM Data Analyst Certification"
  },
];


const achievements = [
  { label: "Tools Mastered", value: "12+", icon: Zap },
  { label: "Projects Completed", value: "5+", icon: Target },
  { label: "Competition Wins", value: "2", icon: Trophy },
];

const Skills = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.06,
        delayChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: prefersReducedMotion ? 0.2 : 0.6 }
    }
  };

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: prefersReducedMotion ? 0.2 : 0.7 }
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-32 px-4 relative overflow-hidden"
      aria-labelledby="skills-heading"
    >
      {/* Advanced Background Effects */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      >
        {/* Floating particles */}
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() > 0.7 ? 2 : 1,
              height: Math.random() > 0.7 ? 2 : 1,
              background: `hsl(${195 + Math.random() * 40}, 100%, ${50 + Math.random() * 20}%)`,
              opacity: 0.15,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [0, -50, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 12 + Math.random() * 10, 
              repeat: Infinity, 
              repeatType: "loop", 
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Multi-layered gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/4 rounded-full blur-[160px] animate-float" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/4 rounded-full blur-[160px] animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/3 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Epic Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated background glow */}
          <div className="relative inline-block mb-8">
            <motion.div
              className="absolute -inset-6 bg-gradient-to-r from-primary/25 via-purple-500/25 to-cyan-500/25 rounded-full blur-3xl"
              animate={prefersReducedMotion ? {} : { 
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.15, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <h2 
              id="skills-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center relative"
            >
              Technical <span className="text-gradient">Arsenal</span>
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-8">
            A comprehensive toolkit built through real-world projects,
            <br className="hidden md:block" />
            <span className="text-primary font-semibold"> continuous learning</span>, and hands-on experience
          </p>

          {/* Achievement Stats Banner */}
          <motion.div 
            ref={statsRef}
            className="flex flex-wrap justify-center gap-6 md:gap-8 mt-12"
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  variants={statVariants}
                  className="group"
                >
                  <div className="glass-card rounded-2xl px-6 py-4 border border-primary/10 hover:border-primary/30 transition-all duration-300 flex items-center gap-4 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,217,255,0.15)]">
                    <motion.div
                      className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all"
                      whileHover={prefersReducedMotion ? {} : { rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div className="text-left">
                      <div className="text-2xl md:text-3xl font-bold text-gradient">{achievement.value}</div>
                      <div className="text-xs md:text-sm text-foreground/60">{achievement.label}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === index;
            return (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-xl border transition-all duration-300 ${
                  isActive 
                    ? 'glass-card border-primary/40 bg-primary/10 shadow-[0_0_30px_rgba(0,217,255,0.15)]' 
                    : 'glass-card border-primary/10 hover:border-primary/25 hover:bg-primary/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-primary' : 'text-foreground/60 group-hover:text-primary'}`} />
                <span className={`font-semibold text-sm md:text-base transition-colors ${isActive ? 'text-primary' : 'text-foreground/70 group-hover:text-foreground/90'}`}>
                  {category.title}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid - Category Based */}
        <motion.div
          key={activeCategory}
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {skillCategories[activeCategory].skills.map((skill, index) => {
              const Icon = skill.icon;
              const isHighlight = skill.highlight;
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <motion.div
                    className={`glass-card rounded-2xl p-6 md:p-8 border transition-all duration-300 overflow-hidden ${
                      isHighlight ? 'border-primary/20' : 'border-primary/10'
                    }`}
                    whileHover={prefersReducedMotion ? {} : {
                      y: -8,
                      scale: 1.02,
                      borderColor: "rgba(0, 217, 255, 0.35)",
                      boxShadow: "0 16px 48px hsl(195, 100%, 60%, 0.15), 0 0 80px 0 hsl(195, 100%, 60%, 0.08) inset",
                      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                    }}
                  >
                    {/* Highlight badge */}
                    {isHighlight && (
                      <motion.div
                        className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-xs font-bold text-primary"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
                      >
                        ⭐ Most Used
                      </motion.div>
                    )}

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-purple-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Top section: Icon + Skill Name */}
                    <div className="relative z-10 flex items-start gap-4 mb-6">
                      <motion.div 
                        className="p-4 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all duration-300 flex-shrink-0"
                        whileHover={prefersReducedMotion ? {} : { 
                          scale: 1.15, 
                          rotate: [0, -12, 12, 0],
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-7 h-7 text-primary" />
                      </motion.div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-xl md:text-2xl text-foreground/90 group-hover:text-primary transition-colors mb-1">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-foreground/60">
                          {skill.projects}
                        </p>
                      </div>
                    </div>

                    {/* Progress Bar Section */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-foreground/70">Proficiency Level</span>
                        <motion.span 
                          className="text-lg font-bold text-primary"
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      
                      {/* Multi-layer progress bar */}
                      <div className="relative h-3 bg-foreground/5 rounded-full overflow-hidden">
                        {/* Background glow */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-sm"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        />
                        
                        {/* Main bar */}
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {/* Animated shimmer */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            animate={prefersReducedMotion ? {} : {
                              x: ["-100%", "300%"]
                            }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: index * 0.3 }}
                          />
                          
                          {/* Glowing dot at end */}
                          <motion.div
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
                            animate={prefersReducedMotion ? {} : {
                              boxShadow: [
                                "0 0 8px rgba(255,255,255,0.8)",
                                "0 0 16px rgba(255,255,255,1)",
                                "0 0 8px rgba(255,255,255,0.8)"
                              ]
                            }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </motion.div>
                      </div>
                    </div>

                    {/* Sweep shine effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background: "linear-gradient(110deg, transparent 0%, rgba(0,217,255,0.12) 50%, transparent 100%)",
                        transform: "translateX(-100%) skewX(-15deg)",
                      }}
                      whileHover={prefersReducedMotion ? {} : {
                        transform: "translateX(100%) skewX(-15deg)",
                        transition: { duration: 0.8, ease: "easeInOut" }
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Soft Skills - Premium Cards */}
        <div>
          {/* Section Divider */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50" />
            <motion.div
              animate={prefersReducedMotion ? {} : { rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-6 h-6 text-primary" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold">
              <span className="bg-gradient-to-r from-secondary via-primary to-cyan-500 bg-clip-text text-transparent">
                Professional Excellence
              </span>
            </h3>
            <motion.div
              animate={prefersReducedMotion ? {} : { rotate: [360, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-6 h-6 text-primary" />
            </motion.div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>

          {/* Soft Skills Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <motion.div
                    className="glass-card rounded-2xl p-6 border border-secondary/10 hover:border-secondary/35 transition-all duration-300 h-full flex flex-col relative overflow-hidden"
                    whileHover={prefersReducedMotion ? {} : {
                      y: -10,
                      scale: 1.03,
                      boxShadow: "0 20px 50px hsl(260, 60%, 50%, 0.2), 0 0 80px 0 hsl(260, 60%, 50%, 0.1) inset",
                      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                    }}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/8 via-transparent to-primary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon with animated ring */}
                    <motion.div
                      className="relative mb-6 flex justify-center"
                      whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Outer ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-secondary/20"
                        animate={prefersReducedMotion ? {} : {
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                      />
                      
                      {/* Inner glow */}
                      <motion.div
                        className="absolute inset-0 bg-secondary/20 rounded-full blur-xl"
                        animate={prefersReducedMotion ? {} : {
                          scale: [1, 1.4, 1],
                          opacity: [0.4, 0.7, 0.4]
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                      
                      <div className="relative p-5 rounded-full bg-secondary/10 border-2 border-secondary/30 group-hover:bg-secondary/20 group-hover:border-secondary/50 transition-all duration-300">
                        <Icon className="w-8 h-8 text-secondary" />
                      </div>
                    </motion.div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex-1 flex flex-col items-center text-center">
                      <h4 className="font-bold text-lg md:text-xl mb-3 text-foreground/90 group-hover:text-secondary transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-foreground/65 leading-relaxed mb-4 flex-1">
                        {skill.description}
                      </p>
                      
                      {/* Stat badge */}
                      <motion.div
                        className="px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-semibold text-secondary group-hover:bg-secondary/20 group-hover:border-secondary/40 transition-all"
                        whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                      >
                        {skill.stat}
                      </motion.div>
                    </div>

                    {/* Bottom gradient accent */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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

export default Skills;