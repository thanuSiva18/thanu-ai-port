import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Code2, Database, Brain } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Particle generation
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
      
      {/* Large gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[128px] animate-float" style={{ animationDelay: '1s', animationDuration: '7s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className={`space-y-8 text-center lg:text-left transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Available for opportunities</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient block mt-2">
                Thanu Siva N
              </span>
            </h1>
            
            <div className="space-y-3">
              <p className="text-xl md:text-2xl font-medium text-foreground/90">
                Aspiring Data Scientist
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-sm font-medium text-primary">
                <span className="flex items-center gap-1">
                  <Code2 className="w-4 h-4" /> Python
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Database className="w-4 h-4" /> SQL
                </span>
                <span>•</span>
                <span>Power BI</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Brain className="w-4 h-4" /> AI/ML
                </span>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
              Transforming <span className="text-primary font-semibold">raw data</span> into 
              compelling <span className="text-primary font-semibold">stories</span>, actionable{" "}
              <span className="text-primary font-semibold">insights</span>, and intelligent{" "}
              <span className="text-primary font-semibold">decisions</span>.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="glow-border bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,217,255,0.3)] group relative overflow-hidden"
                onClick={() => scrollToSection('projects')}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  View Projects
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="glass-card border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105 group"
                onClick={() => window.open('https://linkedin.com/in/thanusiva18', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                Connect on LinkedIn
              </Button>
            </div>
            
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="https://github.com/thanuSiva18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-lg border border-border/50 hover:border-primary/50 text-foreground/60 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/thanusiva18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-lg border border-border/50 hover:border-primary/50 text-foreground/60 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:thanusivanallaperumal@gmail.com"
                className="p-3 glass-card rounded-lg border border-border/50 hover:border-primary/50 text-foreground/60 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Right side - Visual element */}
          <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
              
              {/* Main card */}
              <div className="relative glass-card rounded-3xl p-8 glow-border">
                {/* Profile area */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full animate-spin-slow opacity-75 blur-md" style={{ animationDuration: '8s' }} />
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-4 border-primary/30 backdrop-blur-sm">
                    <span className="text-7xl">👨‍💻</span>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="text-2xl font-bold text-primary">2</div>
                    <div className="text-xs text-muted-foreground">Internships</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="text-2xl font-bold text-primary">IBM</div>
                    <div className="text-xs text-muted-foreground">Certified</div>
                  </div>
                </div>
                
                {/* Tech stack indicators */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Python', 'SQL', 'Power BI', 'Pandas', 'Streamlit'].map((tech, i) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 glass-card px-4 py-2 rounded-full border border-primary/20 animate-float">
                <span className="text-sm font-medium text-primary">🎓 B.Tech AI & DS</span>
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-full border border-secondary/20 animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-medium text-secondary">🏆 Prize Winner</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
          <span className="text-xs text-muted-foreground font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
