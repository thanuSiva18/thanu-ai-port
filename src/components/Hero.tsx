import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-50" />
      
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Hi, I'm <span className="text-gradient">Thanu Siva N</span> 👋
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-medium">
          Aspiring Data Scientist | Python | SQL | Power BI | AI Enthusiast
        </p>
        
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          Transforming raw data into stories, insights, and intelligent decisions.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-6">
          <Button 
            size="lg" 
            className="glow-border bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('projects')}
          >
            🔍 View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://linkedin.com/in/thanusiva18', '_blank')}
          >
            💼 Connect on LinkedIn
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center pt-8">
          <a 
            href="https://github.com/thanuSiva18" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/thanusiva18" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:thanusivanallaperumal@gmail.com"
            className="text-foreground/60 hover:text-primary transition-colors duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
