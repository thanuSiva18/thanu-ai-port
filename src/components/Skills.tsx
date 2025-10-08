import { Code2, Database, BarChart3, Brain, GitBranch, MessageSquare, Users, Clock, Lightbulb } from "lucide-react";

const coreSkills = [
  { name: "Python", icon: Code2 },
  { name: "SQL", icon: Database },
  { name: "Power BI", icon: BarChart3 },
  { name: "Excel", icon: BarChart3 },
  { name: "Pandas", icon: Code2 },
  { name: "NumPy", icon: Code2 },
  { name: "Scikit-learn", icon: Brain },
  { name: "Streamlit", icon: Code2 },
  { name: "Gradio", icon: Brain },
  { name: "Git", icon: GitBranch },
];

const softSkills = [
  { name: "Communication", icon: MessageSquare },
  { name: "Teamwork", icon: Users },
  { name: "Analytical Thinking", icon: Brain },
  { name: "Time Management", icon: Clock },
  { name: "Adaptability", icon: Lightbulb },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        
        <div className="space-y-12">
          {/* Core Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-primary">Core Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {coreSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={index}
                    className="glass-card rounded-xl p-6 text-center hover:glow-border transition-all duration-300 hover:scale-105 group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:animate-float" />
                    <p className="text-sm font-medium">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-secondary">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={index}
                    className="glass-card rounded-xl p-6 text-center hover:glow-border transition-all duration-300 hover:scale-105 group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 text-secondary group-hover:animate-float" />
                    <p className="text-sm font-medium">{skill.name}</p>
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
