import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Data Analyst Intern",
    company: "Nullclass",
    description: [
      "Cleaned, transformed, and analyzed datasets using Python, SQL, and Excel",
      "Built Tableau dashboards visualizing KPIs and trends",
      "Collaborated with cross-functional teams to deliver data-driven insights"
    ]
  },
  {
    title: "Data Analyst Intern",
    company: "Lamstacks Software Solutions",
    description: [
      "Assisted with Power BI dashboards and data reporting for live business insights",
      "Developed automated reporting solutions to streamline data workflows",
      "Supported data quality initiatives and documentation"
    ]
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
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background animate-glow" />
                
                <div className="glass-card rounded-xl p-6 hover:glow-border transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium mb-4">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-foreground/80 flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
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
