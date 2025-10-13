import { Code2, Database, BarChart3, Brain, GitBranch, MessageSquare, Users, Lightbulb } from "lucide-react";

const coreSkills = [
  { name: "Python", icon: Code2 },
  { name: "SQL", icon: Database },
  { name: "Power BI", icon: BarChart3 },
  { name: "Excel", icon: BarChart3 },
  { name: "Pandas", icon: Code2 },
  { name: "NumPy", icon: Code2 },
  { name: "Scikit-learn", icon: Brain },
  { name: "Streamlit", icon: Code2 },
  { name: "Git", icon: GitBranch },
];

const softSkills = [
  { name: "Communication", icon: MessageSquare },
  { name: "Teamwork", icon: Users },
  { name: "Analytical Thinking", icon: Brain },
  { name: "Adaptability", icon: Lightbulb },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
          Technical proficiency and interpersonal strengths
        </p>
        
        <div className="space-y-16">
          {/* Core Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="text-gradient">Core Technical Skills</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {coreSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={index}
                    className="glass-card p-6 rounded-xl text-center border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-110 group"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                    <p className="text-sm font-medium text-foreground/90">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Soft Skills</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={index}
                    className="glass-card p-6 rounded-xl text-center border border-secondary/10 hover:border-secondary/30 transition-all duration-500 hover:scale-110 group"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 text-secondary group-hover:scale-110 transition-transform" />
                    <p className="text-sm font-medium text-foreground/90">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
