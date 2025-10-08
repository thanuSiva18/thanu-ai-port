import { Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="glass-card rounded-2xl p-8 space-y-6 animate-fade-in glow-border">
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm an <span className="text-primary font-semibold">analytical and detail-oriented</span> B.Tech 
              Artificial Intelligence & Data Science student passionate about uncovering insights from data.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/90">
              Skilled in <span className="text-primary font-semibold">Python, SQL, Excel, and Power BI</span>, 
              with hands-on experience in dashboards and ML projects.
            </p>
            
            <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-foreground/90">
                <span className="font-semibold text-primary">Certified:</span> IBM Data Analyst Professional Certificate (Coursera)
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="glass-card rounded-2xl p-8 h-full flex items-center justify-center glow-border">
              <div className="text-center space-y-4">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
                <p className="text-xl font-semibold text-gradient">Data Storyteller</p>
                <p className="text-muted-foreground">Turning complexity into clarity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
