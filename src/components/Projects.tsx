import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Amazon E-commerce Sales Dashboard",
    description: "Interactive dashboard visualizing revenue, profit, and customer behavior patterns using real e-commerce data.",
    tools: ["Python", "Streamlit", "Pandas", "Data Visualization"],
    github: "https://github.com/thanuSiva18/amazon-dashboard",
    icon: "📊"
  },
  {
    title: "Car Sales Insights Dashboard",
    description: "Comprehensive analysis of sales trends and regional performance metrics with interactive visualizations.",
    tools: ["Python", "Streamlit", "Pandas", "Analytics"],
    github: "https://github.com/thanuSiva18/car-sales-dashboard",
    icon: "🚗"
  },
  {
    title: "AI Meal Prep Generator",
    description: "AI-powered meal planning application integrating Tamil Nadu cuisine with personalized recommendations.",
    tools: ["Python", "Gradio", "AI/ML", "NLP"],
    github: "https://github.com/thanuSiva18/meal-prep-ai",
    icon: "🍽️"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card border-border/50 hover:glow-border transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="text-5xl mb-4 group-hover:animate-float">{project.icon}</div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-foreground/70">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full glass-card border-primary/30 hover:bg-primary/10"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
