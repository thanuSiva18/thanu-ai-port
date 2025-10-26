import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, Code2, Database, BarChart3, Brain, Award, Briefcase, GraduationCap, Sparkles, TrendingUp, Rocket } from "lucide-react";

const Resume = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="resume" className="py-32 px-4 relative overflow-hidden min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Enhanced Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] animate-pulse delay-2000" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Hero Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-block">
            <div className="relative">
              <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient pb-2">
                THANU SIVA N
              </h1>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3 text-lg">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 font-semibold text-primary backdrop-blur-sm">
              Data Scientist
            </span>
            <span className="text-primary/40">•</span>
            <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 font-semibold text-purple-400 backdrop-blur-sm">
              Data Analyst
            </span>
            <span className="text-primary/40">•</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 font-semibold text-blue-400 backdrop-blur-sm">
              AI/ML Specialist
            </span>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 max-w-4xl mx-auto">
            {[
              { icon: Phone, text: "+91 94881 08394", href: "tel:+919488108394" },
              { icon: Mail, text: "Email Me", href: "mailto:thanusivanallaperumal@gmail.com" },
              { icon: Linkedin, text: "LinkedIn", href: "https://linkedin.com/in/thanusiva18" },
              { icon: Github, text: "GitHub", href: "https://github.com/thanuSiva18" }
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-background to-primary/5 border border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{item.text}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Professional Profile - Enhanced */}
        <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-background via-primary/5 to-background backdrop-blur-xl shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
          <CardHeader className="relative">
            <div className="flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                PROFESSIONAL PROFILE
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="relative pt-0 text-lg leading-relaxed text-foreground/90">
            Final-year B.Tech student specializing in Artificial Intelligence & Data Science, possessing a robust technical foundation in end-to-end data processing, predictive modeling, and business intelligence. Proven ability to leverage Python (Pandas, Scikit-learn) and SQL for complex data manipulation and statistical analysis. Experienced in designing dynamic, user-facing dashboards using Power BI, Tableau, and Streamlit to deliver actionable, data-driven insights. Seeking an entry-level Data Analyst or Junior Data Scientist role to apply rigorous analytical and technical skills in a dynamic environment.
          </CardContent>
        </Card>

        {/* Technical Expertise - Redesigned */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Rocket className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              TECHNICAL EXPERTISE
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Data Science & ML",
                icon: Brain,
                color: "from-purple-500 to-pink-500",
                skills: ["Python (Pandas, NumPy, Scikit-learn)", "Data Modeling", "Statistical Analysis", "Feature Engineering", "AI/ML Concepts", "Gemini API (Basics)"]
              },
              {
                title: "Databases & BI",
                icon: Database,
                color: "from-blue-500 to-cyan-500",
                skills: ["SQL (Intermediate)", "Power BI", "Tableau", "Looker Studio", "MS Excel (Advanced)", "Data Storytelling"]
              },
              {
                title: "Development & Tools",
                icon: Code2,
                color: "from-green-500 to-emerald-500",
                skills: ["Streamlit", "Gradio", "Git/GitHub", "Version Control", "HTML/CSS/JS (Basics)", "Google Workspace", "Notion"]
              },
            ].map((category, index) => (
              <Card
                key={index}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-background to-primary/5 backdrop-blur-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} transform origin-left transition-transform duration-500 ${hoveredSkill === index ? 'scale-x-100' : 'scale-x-0'}`} />
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-start gap-2 group/item">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color} group-hover/item:scale-150 transition-transform`} />
                        <span className="text-sm text-foreground/80 group-hover/item:text-foreground transition-colors">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Projects - Premium Design */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              DATA SCIENCE & ANALYTICS PROJECTS
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                title: "Amazon E-commerce Sales Dashboard",
                tools: ["Python", "Streamlit", "Pandas", "Data Visualization"],
                gradient: "from-orange-500 to-pink-500",
                points: [
                  "Executed end-to-end data cleaning and transformation on a complex e-commerce dataset of 10,000+ records, resolving format inconsistencies and handling 500+ missing values to ensure data integrity.",
                  "Developed 7+ Key Performance Indicators (KPIs) and utilized Python visualizations (Matplotlib/Seaborn) to analyze sales trends, category distribution, average ratings, and discount impact.",
                  "Deployed an interactive, user-friendly dashboard using Streamlit, integrating dynamic sidebar filters and a download option to enable real-time, self-service product exploration for stakeholders.",
                ],
                link: { text: "View on GitHub", href: "https://github.com/thanuSiva18/amazon-dashboard" }
              },
              {
                title: "AI Meal Plan Generator (Web Application)",
                tools: ["Python", "Gradio", "Pandas", "NumPy", "Deployment (Hugging Face)"],
                gradient: "from-green-500 to-teal-500",
                points: [
                  "Engineered a core meal scheduling algorithm using Python, Pandas, and NumPy to generate personalized, nutritionally balanced diet plans based on user health parameters.",
                  "Implemented custom logic to integrate and prioritize specific regional cuisine (Tamil Nadu), enhancing user engagement and cultural relevance within the application.",
                  "Designed and deployed a public-facing, interactive web application using Gradio and hosted on Hugging Face Spaces for real-time plan generation and global accessibility.",
                ],
                link: { text: "View Live App", href: "https://github.com/thanuSiva18/meal-prep-ai" }
              }
            ].map((project, index) => (
              <Card
                key={index}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-background via-primary/5 to-background backdrop-blur-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group"
              >
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${project.gradient} transform origin-top transition-transform duration-500 ${hoveredProject === index ? 'scale-y-100' : 'scale-y-0'}`} />
                
                <CardHeader className="pl-6">
                  <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tools.map((tool, i) => (
                      <span key={i} className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="pl-6 pt-0 space-y-4">
                  <ul className="space-y-3">
                    {project.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} flex-shrink-0 group-hover/item:scale-125 transition-transform`} />
                        <span className="text-sm leading-relaxed text-foreground/80">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105`}
                  >
                    {project.link.text}
                    <Rocket className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                EXPERIENCE
              </h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  title: "Data Analyst Intern",
                  company: "Nullclass",
                  period: "Aug 2025",
                  color: "from-blue-500 to-cyan-500",
                  points: [
                    "Analyzed, cleaned, and transformed large, unstructured datasets using Python, SQL, and Advanced Excel to support four distinct internal case studies and business reporting initiatives.",
                    "Developed and presented Tableau dashboards to visualize key performance indicators (KPIs) and operational metrics, delivering clear, data-driven recommendations to the leadership team.",
                    "Practiced efficient data modeling techniques to structure raw data, significantly improving the speed and reliability of subsequent analyses and reporting cycles.",
                  ]
                },
                {
                  title: "Web Development Intern",
                  company: "Lamstacks Software Solutions",
                  period: "Jul 2024",
                  color: "from-purple-500 to-pink-500",
                  points: [
                    "Developed and successfully deployed a modern, responsive portfolio website using HTML, CSS, and JavaScript, adhering to industry-standard npm workflows.",
                    "Gained practical experience with GitHub version control and collaborative development, ensuring clean code management and deployment readiness.",
                  ]
                }
              ].map((exp, index) => (
                <Card key={index} className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-background to-primary/5 backdrop-blur-xl hover:shadow-xl transition-all duration-300 group">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${exp.color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
                  
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                    <p className="text-sm font-semibold text-primary">{exp.company}</p>
                    <p className="text-xs text-foreground/60">{exp.period}</p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80 leading-relaxed">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education & More */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                EDUCATION
              </h2>
            </div>
            
            <div className="space-y-4">
              {[
                { title: "B.Tech - AI & Data Science", year: "2022–2026", details: "St. Xavier's Catholic College of Engineering", color: "from-purple-500 to-pink-500" },
                { title: "Higher Secondary (HSC)", year: "May 2022", details: "Government Higher Secondary School, Aralvoimozhi", color: "from-blue-500 to-cyan-500" },
                { title: "Secondary (SSLC)", year: "Apr 2020", details: "Government Higher Secondary School, Aralvoimozhi", color: "from-green-500 to-teal-500" },
              ].map((edu, index) => (
                <Card key={index} className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-background to-primary/5 backdrop-blur-xl hover:shadow-lg transition-all duration-300 group">
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${edu.color}`} />
                  <CardContent className="p-4 pl-5">
                    <p className="font-bold text-lg">{edu.title}</p>
                    <p className="text-sm text-primary font-semibold">{edu.year}</p>
                    <p className="text-sm text-foreground/60 mt-1">{edu.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-4">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                ACHIEVEMENTS
              </h2>
            </div>
            
            <Card className="border-primary/20 bg-gradient-to-br from-background to-primary/5 backdrop-blur-xl">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {[
                    "🏆 1st Place - Intercollegiate Paper Presentation (Mar Ephrem College, 2024)",
                    "🏆 1st Place - Business Quiz Competition (Amrita College MBA Dept., 2024)",
                    "🎤 Stage Presenter for multiple academic events"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-background to-primary/5 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-xl">Additional Skills</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-2 text-sm text-foreground/80">
                <p><strong className="text-foreground">Languages:</strong> English (Fluent), Tamil (Native), Hindi (Conversational)</p>
                <p><strong className="text-foreground">Tools:</strong> Shopify, WordPress, Meta Ads/Campaign Management</p>
                <p><strong className="text-foreground">Certifications:</strong> IBM Data Analyst Professional Certificate (Coursera)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float linear infinite; }
        .animate-gradient { 
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .delay-1000 { animation-delay: 1s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
};

export default Resume;