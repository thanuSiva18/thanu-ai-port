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
    <section id="projects" className="py-32 px-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
          Real-world applications showcasing data analysis, visualization, and AI/ML capabilities
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] group overflow-hidden"
            >
              <CardHeader>
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{project.icon}</div>
                <CardTitle className="text-xl font-bold group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-foreground/60 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full glass-card border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
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
