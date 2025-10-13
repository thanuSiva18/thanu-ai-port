import { GraduationCap, Award, Trophy } from "lucide-react";

const certifications = [
  "IBM Data Analyst Professional Certificate (Coursera)",
  "1st Prize – Intercollegiate Competition, Mar Ephrem College (2024)",
  "1st Prize – Business Quiz, Amrita College MBA Dept. (2024)",
];

const Education = () => {
  return (
    <section id="education" className="py-32 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Education & <span className="text-gradient">Achievements</span>
        </h2>
        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
          Academic background and recognitions
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="glass-card p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-xl font-bold text-gradient">
                B.Tech – Artificial Intelligence & Data Science
              </h4>
              <p className="text-lg text-foreground/90 font-medium">
                St. Xavier's Catholic College of Engineering
              </p>
              <p className="text-foreground/60">
                Nagercoil
              </p>
            </div>
          </div>
          
          {/* Achievements */}
          <div className="glass-card p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                <Trophy className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Achievements</h3>
            </div>
            
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform" />
                  <span className="text-foreground/90 leading-relaxed">{cert}</span>
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
