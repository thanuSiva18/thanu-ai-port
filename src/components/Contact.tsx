import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, FileDown, Bot } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        
        <p className="text-xl text-foreground/60 mb-16 max-w-2xl mx-auto">
          Open to data science opportunities, collaborations, and exciting projects
        </p>
        
        <div className="glass-card rounded-2xl p-8 border border-primary/10 mb-12">
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href="mailto:thanusivanallaperumal@gmail.com"
              className="flex items-center gap-4 p-5 rounded-xl glass-card border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-foreground/60 mb-1">Email</p>
                <p className="font-medium text-foreground/90 text-sm">thanusivanallaperumal@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="https://linkedin.com/in/thanusiva18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl glass-card border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-foreground/60 mb-1">LinkedIn</p>
                <p className="font-medium text-foreground/90">linkedin.com/in/thanusiva18</p>
              </div>
            </a>
            
            <a 
              href="https://github.com/thanuSiva18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl glass-card border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-foreground/60 mb-1">GitHub</p>
                <p className="font-medium text-foreground/90">github.com/thanuSiva18</p>
              </div>
            </a>
            
            <a 
              href="https://huggingface.co/thanuSiva18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl glass-card border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-foreground/60 mb-1">Hugging Face</p>
                <p className="font-medium text-foreground/90">huggingface.co/thanuSiva18</p>
              </div>
            </a>
          </div>
        </div>
        
        <Button 
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_30px_rgba(0,217,255,0.5)]"
          onClick={() => window.open('#', '_blank')}
        >
          <FileDown className="w-5 h-5 mr-2" />
          Download Resume
        </Button>
      </div>
    </section>
  );
};

export default Contact;
