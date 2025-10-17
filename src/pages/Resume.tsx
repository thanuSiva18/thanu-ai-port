import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, Code2, Database, BarChart3, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const Resume = () => {
  return (
    <section id="resume" className="py-32 px-4 relative overflow-hidden min-h-screen">
      {/* Background effects from theme */}
      <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* Header and Contact Info */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient">THANU SIVA N</h1>
          <p className="text-xl text-foreground/80 font-medium">Aspiring Data Scientist | Data Analyst | AI/ML Specialist</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-foreground/60 pt-4">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              +91 94881 08394
            </span>
            <a href="mailto:thanusivanallaperumal@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4 text-primary" />
              thanusivanallaperumal@gmail.com
            </a>
            <a href="https://linkedin.com/in/thanusiva18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4 text-primary" />
              LinkedIn Profile
            </a>
            <a href="https://github.com/thanuSiva18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Github className="w-4 h-4 text-primary" />
              GitHub Profile
            </a>
          </div>
        </div>

        <Separator className="bg-primary/20" />

        {/* Professional Profile */}
        <Card className="glass-card border-primary/10">
          <CardHeader>
            <CardTitle className="text-2xl text-gradient">PROFESSIONAL PROFILE</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 text-foreground/80 leading-relaxed">
            Final-year B.Tech student specializing in Artificial Intelligence & Data Science, possessing a robust technical foundation in end-to-end data processing, predictive modeling, and business intelligence. Proven ability to leverage Python (Pandas, Scikit-learn) and SQL for complex data manipulation and statistical analysis. Experienced in designing dynamic, user-facing dashboards using Power BI, Tableau, and Streamlit to deliver actionable, data-driven insights. Seeking an entry-level Data Analyst or Junior Data Scientist role to apply rigorous analytical and technical skills in a dynamic environment.
          </CardContent>
        </Card>

        {/* Technical Expertise */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gradient">TECHNICAL EXPERTISE</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Data Science & ML", icon: Brain,
                skills: ["Python (Pandas, NumPy, Scikit-learn)", "Data Modeling", "Statistical Analysis", "Feature Engineering", "AI/ML Concepts", "Gemini API (Basics)"]
              },
              {
                title: "Databases & BI", icon: Database,
                skills: ["SQL (Intermediate)", "Power BI", "Tableau", "Looker Studio", "MS Excel (Advanced)", "Data Storytelling"]
              },
              {
                title: "Development & Tools", icon: Code2,
                skills: ["Streamlit", "Gradio", "Git/GitHub", "Version Control", "HTML/CSS/JS (Basics)", "Google Workspace", "Notion"]
              },
            ].map((category, index) => (
              <Card key={index} className="glass-card border-primary/10 hover:border-primary/30 transition-all duration-300">
                <CardHeader className="p-4 flex flex-row items-center space-y-0 pb-2">
                  <category.icon className="w-5 h-5 text-secondary mr-3" />
                  <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1 text-sm text-foreground/80">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-secondary mr-2">•</span>{skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-8 pt-4">
          
          {/* Projects */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl font-bold text-gradient">DATA SCIENCE & ANALYTICS PROJECTS</h2>
            <div className="space-y-6">
                {[
                    {
                        title: "Amazon E-commerce Sales Dashboard",
                        tools: ["Python", "Streamlit", "Pandas", "Data Visualization"],
                        points: [
                            "Executed end-to-end data cleaning and transformation on a complex e-commerce dataset of 10,000+ records, resolving format inconsistencies and handling 500+ missing values to ensure data integrity.",
                            "Developed 7+ Key Performance Indicators (KPIs) and utilized Python visualizations (Matplotlib/Seaborn) to analyze sales trends, category distribution, average ratings, and discount impact.",
                            "Deployed an interactive, user-friendly dashboard using Streamlit, integrating dynamic sidebar filters and a download option to enable real-time, self-service product exploration for stakeholders.",
                        ],
                        link: { text: "GitHub Repo", href: "https://github.com/thanuSiva18/amazon-dashboard" }
                    },
                    {
                        title: "AI Meal Plan Generator (Web Application)",
                        tools: ["Python", "Gradio", "Pandas", "NumPy", "Deployment (Hugging Face)"],
                        points: [
                            "Engineered a core meal scheduling algorithm using Python, Pandas, and NumPy to generate personalized, nutritionally balanced diet plans based on user health parameters.",
                            "Implemented custom logic to integrate and prioritize specific regional cuisine (Tamil Nadu), enhancing user engagement and cultural relevance within the application.",
                            "Designed and deployed a public-facing, interactive web application using Gradio and hosted on Hugging Face Spaces for real-time plan generation and global accessibility.",
                        ],
                        link: { text: "Live App & GitHub Repo", href: "https://github.com/thanuSiva18/meal-prep-ai" }
                    }
                ].map((project, index) => (
                    <Card key={index} className="glass-card border-primary/10 hover:border-primary/30 transition-all duration-300">
                        <CardHeader>
                            <CardTitle className="text-xl">{project.title}</CardTitle>
                            <p className="text-sm font-medium text-primary/80">Tools: {project.tools.join(", ")}</p>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <ul className="list-disc list-inside space-y-2 text-foreground/80">
                                {project.points.map((point, i) => (
                                    <li key={i} className="leading-relaxed pl-1">{point}</li>
                                ))}
                            </ul>
                            <div className="mt-4">
                                <a 
                                    href={project.link.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-sm font-medium text-primary hover:text-primary-glow underline transition-colors"
                                >
                                    {project.link.text}
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
          </div>
          
          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gradient">INTERNSHIP EXPERIENCE</h2>
            <div className="space-y-6">
                {[
                    {
                        title: "Data Analyst Intern – Nullclass",
                        period: "Aug 2025",
                        points: [
                            "Analyzed, cleaned, and transformed large, unstructured datasets using Python, SQL, and Advanced Excel to support four distinct internal case studies and business reporting initiatives.",
                            "Developed and presented Tableau dashboards to visualize key performance indicators (KPIs) and operational metrics, delivering clear, data-driven recommendations to the leadership team.",
                            "Practiced efficient data modeling techniques to structure raw data, significantly improving the speed and reliability of subsequent analyses and reporting cycles.",
                        ]
                    },
                    {
                        title: "Web Development Intern – Lamstacks Software Solutions",
                        period: "Jul 2024",
                        points: [
                            "Developed and successfully deployed a modern, responsive portfolio website using HTML, CSS, and JavaScript, adhering to industry-standard npm workflows.",
                            "Gained practical experience with GitHub version control and collaborative development, ensuring clean code management and deployment readiness.",
                        ]
                    }
                ].map((exp, index) => (
                    <Card key={index} className="glass-card border-secondary/10">
                        <CardHeader>
                            <CardTitle className="text-xl">{exp.title}</CardTitle>
                            <p className="text-sm font-medium text-foreground/60">{exp.period}</p>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <ul className="list-disc list-inside space-y-2 text-foreground/80">
                                {exp.points.map((point, i) => (
                                    <li key={i} className="leading-relaxed pl-1">{point}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
          </div>
          
          {/* Education and Achievements */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gradient">EDUCATION</h2>
            <div className="space-y-4">
                {[
                    { title: "B.Tech - Artificial Intelligence & Data Science (2022–2026)", details: "St. Xavier's Catholic College of Engineering, Nagercoil" },
                    { title: "Higher Secondary Schooling (HSC) (May 2022)", details: "Government Higher Secondary School, Aralvoimozhi" },
                    { title: "Secondary Schooling (SSLC) (Apr 2020)", details: "Government Higher Secondary School, Aralvoimozhi" },
                ].map((edu, index) => (
                    <Card key={index} className="glass-card p-4 border-primary/10">
                        <p className="font-semibold text-lg text-foreground/90">{edu.title}</p>
                        <p className="text-sm text-foreground/60">{edu.details}</p>
                    </Card>
                ))}
            </div>

            <h2 className="text-3xl font-bold text-gradient pt-8">LEADERSHIP & ACHIEVEMENTS</h2>
            <ul className="list-disc list-outside space-y-2 text-foreground/80 pl-5">
                {[
                    "1st Place Winner in the Intercollegiate Paper Presentation Competition (Mar Ephrem College, 2024), demonstrating strong technical communication and the ability to articulate complex data concepts.",
                    "1st Place Winner in the Business Quiz Competition (Amrita College MBA Dept., 2024), showcasing quick analytical thinking and foundational business acumen.",
                    "Served as a Stage Presenter for multiple academic events, reflecting strong public speaking and professional presentation skills."
                ].map((item, index) => (
                    <li key={index} className="leading-relaxed pl-1">{item}</li>
                ))}
            </ul>

            <h2 className="text-3xl font-bold text-gradient pt-8">ADDITIONAL INFORMATION</h2>
            <ul className="list-disc list-outside space-y-2 text-foreground/80 pl-5">
                <li className="leading-relaxed pl-1">Languages: English (Fluent), Tamil (Native), Hindi (Conversational)</li>
                <li className="leading-relaxed pl-1">Other Tools: Shopify, WordPress, Meta Ads/Campaign Management (Retained to demonstrate business context awareness).</li>
                <li className="leading-relaxed pl-1">CERTIFICATIONS: IBM Data Analyst Professional Certificate (Coursera)</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;