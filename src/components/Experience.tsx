import { Briefcase, TrendingUp } from "lucide-react";

const experiences = [
  {
    icon: "💻",
    title: "DevOps Intern",
    company: "Lamstacks Software Solutions",
    period: "Jul 2024 – Aug 2024",
    location: "Chennai, India",
    start: new Date("2024-07-01"),
    end: new Date("2024-08-31"),
    description: [
      "Collaborated on automating deployment pipelines using CI/CD tools.",
      "Assisted in containerization and version control using Docker and Git.",
      "Monitored server performance and optimized infrastructure efficiency.",
      "Contributed to system documentation and process streamlining."
    ],
    tags: ["Docker", "Git", "CI/CD", "DevOps"]
  }
  ,
  {
    icon: "🎯",
    title: "Chief Marketing Officer",
    company: "Z2Learn (EdTech Startup)",
    period: "Jan 2024 – May 2025",
    location: "Nagercoil, Tamil Nadu, India",
    start: new Date("2024-01-01"),
    end: new Date("2025-05-31"),
    description: [
      "Led digital marketing and business development initiatives for the startup.",
      "Generated leads, acquired clients, and built partnerships for growth.",
      "Oversaw operations and branding, scaling the company from concept to execution."
    ],
    tags: ["Marketing", "Business Growth", "Team Leadership"]
  },
  {
    icon: "💻",
    title: "Data Science Intern",
    company: "InLighnX Global Pvt Ltd (InLighn Tech)",
    period: "Sep 2025 – Oct 2025",
    location: "Bengaluru, India",
    start: new Date("2025-09-01"),
    end: new Date("2025-10-31"),
    description: [
      "Contributed to real-world data science projects using Python, SQL, and visualization tools.",
      "Cleaned, modeled, and analyzed datasets to generate actionable business insights.",
      "Developed and automated reports to support data-driven decision-making."
    ],
    tags: ["Python", "SQL", "Power BI", "Pandas"]
  }

];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-float" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
          Professional journey across data science, DevOps, and business development
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20 group scroll-fade-in">
                {/* Timeline dot with animated glow */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background animate-glow shadow-[0_0_20px_hsl(195_100%_60%_/_0.4)] group-hover:scale-125 transition-transform duration-300" />
                <div className="glass-card glow-border rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_40px_hsl(195_100%_60%_/_0.3)]">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300 animate-glow">{exp.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1 text-gradient group-hover:text-gradient transition-all duration-300">{exp.title}</h3>
                      <p className="text-gradient font-semibold text-lg mb-1">{exp.company}</p>
                      <p className="text-foreground/60 text-sm mb-1">{exp.period}</p>
                      <p className="text-foreground/50 text-sm mb-6 flex items-center gap-1">
                        📍 {exp.location}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-foreground/80 flex items-start leading-relaxed hover:text-primary transition-colors">
                            <span className="text-primary mr-3 mt-1 font-bold animate-glow">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300 animate-glow"
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
