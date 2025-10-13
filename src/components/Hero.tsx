import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, Sparkles, FileText } from "lucide-react";
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
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
  }));

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Sticky Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo/Name */}
          <div className="text-xl font-bold bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
            Thanu Siva
          </div>

          {/* Navigation Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li>
              <button onClick={() => scrollToSection('hero')} className="text-foreground/70 hover:text-primary transition-colors">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className="text-foreground/70 hover:text-primary transition-colors">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skills')} className="text-foreground/70 hover:text-primary transition-colors">
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => window.open('#', '_blank')} className="text-foreground/70 hover:text-primary transition-colors">
                Resume
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="text-foreground/70 hover:text-primary transition-colors">
                Contact
              </button>
            </li>
          </ul>

          {/* Open To Work Button */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-green-400">Open to Work</span>
          </div>
        </div>
      </nav>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-10" />

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}

      {/* Subtle gradient orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className={`space-y-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Available Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-green-400">Open to Work</span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="text-foreground">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                  Thanu Siva
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl font-semibold text-foreground/90">
                Aspiring Data Scientist
              </p>

              {/* Skills Line */}
              <div className="flex flex-wrap gap-2 text-sm font-medium">
                <span className="text-foreground/80">🐍 Python</span>
                <span className="text-foreground/40">•</span>
                <span className="text-foreground/80">🧮 SQL</span>
                <span className="text-foreground/40">•</span>
                <span className="text-foreground/80">📊 Power BI</span>
                <span className="text-foreground/40">•</span>
                <span className="text-foreground/80">🤖 AI/ML</span>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-xl">
                Transforming <span className="text-primary font-medium">raw data</span> into compelling{" "}
                <span className="text-primary font-medium">stories</span>, actionable{" "}
                <span className="text-primary font-medium">insights</span>, and intelligent{" "}
                <span className="text-primary font-medium">decisions</span>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_30px_rgba(0,217,255,0.5)]"
                  onClick={() => scrollToSection('projects')}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  View Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-card border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
                  onClick={() => window.open('https://linkedin.com/in/thanusiva18', '_blank')}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </Button>
                <button
                  className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors underline-offset-4 hover:underline flex items-center gap-2"
                  onClick={() => window.open('#', '_blank')}
                >
                  <FileText className="w-4 h-4" />
                  View Resume
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                <a
                  href="https://linkedin.com/in/thanusiva18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 glass-card rounded-lg border border-border/50 hover:border-primary/50 text-foreground/60 hover:text-primary transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:thanusivanallaperumal@gmail.com"
                  className="p-2.5 glass-card rounded-lg border border-border/50 hover:border-primary/50 text-foreground/60 hover:text-primary transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column - Visual Card */}
            <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Main Card */}
              <div className="relative glass-card rounded-3xl p-8 border border-primary/10 hover:border-primary/20 transition-all duration-500">
                {/* Glowing Profile Orb - No emoji, just gradient */}
                <div className="relative w-48 h-48 mx-auto mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-purple-500/40 to-primary/40 rounded-full blur-3xl animate-pulse" />
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/30 via-purple-500/30 to-primary/30 flex items-center justify-center border-2 border-primary/30 backdrop-blur-sm">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/50 to-purple-500/50 blur-xl animate-float" />
                  </div>
                </div>

                {/* Glass Info Cards */}
                <div className="space-y-3 mb-6">
                  <div className="p-3 rounded-xl glass-card border border-primary/10 hover:border-primary/20 transition-colors">
                    <span className="text-sm font-medium flex items-center gap-2">
                      🎓 <span className="text-foreground/80">B.Tech AI & DS</span>
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl glass-card border border-primary/10 hover:border-primary/20 transition-colors text-center">
                      <span className="text-sm font-medium text-foreground/80">💼 5+ Projects</span>
                    </div>
                    <div className="p-3 rounded-xl glass-card border border-primary/10 hover:border-primary/20 transition-colors text-center">
                      <span className="text-sm font-medium text-foreground/80">🌱 2 Internships</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer z-10" onClick={() => scrollToSection('about')}>
          <span className="text-xs text-muted-foreground font-medium">Scroll to explore</span>
          <ArrowDown className="w-4 h-4 text-primary" />
        </div>
      </div> {/* Close .relative z-10 flex-1 flex items-center pt-20 */}
    </section>
  );
};

export default Hero;
