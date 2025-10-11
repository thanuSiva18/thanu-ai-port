import { Briefcase, TrendingUp } from "lucide-react";

const experiences = [
  {
    icon: "💻",
    title: "Data Science Intern",
    company: "InLighnX Global Pvt Ltd (InLighn Tech)",
    period: "Sep 2025 – Oct 2025",
    location: "Bengaluru, India",
    description: [
      "Contributed to real-world data science projects using Python, SQL, and visualization tools.",
      "Cleaned, modeled, and analyzed datasets to generate actionable business insights.",
      "Developed and automated reports to support data-driven decision-making."
    ],
    tags: ["Python", "SQL", "Power BI", "Pandas"]
  },
  {
    icon: "🚀",
    title: "Chief Marketing Officer",
    company: "Z2Learn (EdTech Startup)",
    period: "Jan 2024 – May 2025",
    location: "Nagercoil, Tamil Nadu, India",
    description: [
      "Led digital marketing and business development initiatives for the startup.",
      "Generated leads, acquired clients, and built partnerships for growth.",
      "Oversaw operations and branding, scaling the company from concept to execution."
    ],
    tags: ["Marketing", "Business Growth", "Team Leadership"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Work <span className="text-gradient">Experience</span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background animate-glow" />
                
                <div className="glass-card rounded-xl p-8 hover:glow-border transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{exp.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-primary font-semibold text-lg mb-1">{exp.company}</p>
                      <p className="text-foreground/60 text-sm mb-1">{exp.period}</p>
                      <p className="text-foreground/50 text-sm mb-5">📍 {exp.location}</p>
                      <ul className="space-y-3 mb-6">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-foreground/80 flex items-start leading-relaxed">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
