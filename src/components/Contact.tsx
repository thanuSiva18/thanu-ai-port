import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, FileDown } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12">
          Open to data science opportunities and collaborations
        </p>
        
        <div className="glass-card rounded-2xl p-8 glow-border mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="mailto:thanusivanallaperumal@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 hover:scale-105 border border-primary/20"
            >
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">thanusivanallaperumal@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="tel:+919488108394"
              className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 hover:scale-105 border border-primary/20"
            >
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">+91 94881 08394</p>
              </div>
            </a>
            
            <a 
              href="https://linkedin.com/in/thanusiva18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 hover:scale-105 border border-primary/20"
            >
              <div className="p-3 bg-primary/10 rounded-lg">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="font-medium">linkedin.com/in/thanusiva18</p>
              </div>
            </a>
            
            <a 
              href="https://github.com/thanuSiva18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 hover:scale-105 border border-primary/20"
            >
              <div className="p-3 bg-primary/10 rounded-lg">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">GitHub</p>
                <p className="font-medium">github.com/thanuSiva18</p>
              </div>
            </a>
          </div>
        </div>
        
        <Button 
          size="lg"
          className="glow-border bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
        >
          <FileDown className="w-5 h-5 mr-2" />
          Download Resume
        </Button>
      </div>
    </section>
  );
};

export default Contact;
