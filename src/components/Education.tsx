import { GraduationCap, Award, Trophy } from "lucide-react";

const certifications = [
  "IBM Data Analyst Professional Certificate (Coursera)",
  "1st Prize – Intercollegiate Competition, Mar Ephrem College (2024)",
  "1st Prize – Business Quiz, Amrita College MBA Dept. (2024)"
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Education & <span className="text-gradient">Achievements</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="glass-card rounded-2xl p-8 glow-border animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-primary">
                B.Tech – Artificial Intelligence & Data Science
              </h4>
              <p className="text-foreground/80 text-lg">
                St. Xavier's Catholic College of Engineering
              </p>
              <p className="text-muted-foreground">
                Nagercoil
              </p>
            </div>
          </div>
          
          {/* Certifications & Achievements */}
          <div className="glass-card rounded-2xl p-8 glow-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                <Trophy className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Achievements</h3>
            </div>
            
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/90">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
