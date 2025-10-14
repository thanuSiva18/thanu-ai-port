import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, Code2, Database, BarChart3, Brain, Zap, GraduationCap, Trophy, Briefcase, ChevronRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Resume Data ---
const technicalExpertise = [
  {
    title: "Data Science & ML", icon: Brain, percentage: 90, color: "primary",
    skills: ["Python (Pandas, NumPy, Scikit-learn)", "Data Modeling", "Statistical Analysis", "Feature Engineering", "AI/ML Concepts", "Gemini API (Basics)"]
  },
  {
    title: "Databases & BI", icon: Database, percentage: 85, color: "primary",
    skills: ["SQL (Intermediate)", "Power BI", "Tableau", "Looker Studio", "MS Excel (Advanced)", "Data Storytelling"]
  },
  {
    title: "Development & Tools", icon: Code2, percentage: 70, color: "secondary",
    skills: ["Streamlit", "Gradio", "Git/GitHub", "Version Control", "HTML/CSS/JS (Basics)", "Google Workspace", "Notion"]
  },
];

const projectsData = [
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
];

// Reconstructed Work Experience Data (3 items in user-requested order)
const workExperienceData = [
  {
    icon: "💻",
    title: "DevOps Intern",
    company: "Lamstacks Software Solutions",
    period: "Jul 2024 – Aug 2024",
    location: "Chennai, India",
    tags: ["Docker", "Git", "CI/CD", "DevOps"],
    points: [
      "Collaborated on automating deployment pipelines using CI/CD tools.",
      "Assisted in containerization and version control using Docker and Git.",
      "Monitored server performance and optimized infrastructure efficiency.",
      "Contributed to system documentation and process streamlining.",
    ]
  },
  {
    icon: "🎯",
    title: "Chief Marketing Officer",
    company: "Z2Learn (EdTech Startup)",
    period: "Jan 2024 – May 2025",
    location: "Nagercoil, Tamil Nadu, India",
    tags: ["Marketing", "Business Growth", "Team Leadership"],
    points: [
      "Led digital marketing and business development initiatives for the startup.",
      "Generated leads, acquired clients, and built partnerships for growth.",
      "Oversaw operations and branding, scaling the company from concept to execution.",
    ]
  },
  {
    icon: "💻",
    title: "Data Science Intern",
    company: "InLighnX Global Pvt Ltd (InLighn Tech)",
    period: "Sep 2025 – Oct 2025",
    location: "Bengaluru, India",
    tags: ["Python", "SQL", "Power BI", "Pandas"],
    points: [
      "Contributed to real-world data science projects using Python, SQL, and visualization tools.",
      "Cleaned, modeled, and analyzed datasets to generate actionable business insights.",
      "Developed and automated reports to support data-driven decision-making.",
    ]
  }
];

// Additional Internships (2 items from original resume text, moved to right column)
const additionalInternshipData = [
    {
        title: "Data Analyst Intern – Nullclass",
        period: "Aug 2025",
        tags: ["Python", "SQL", "Tableau", "Advanced Excel"],
        points: [
            "Analyzed, cleaned, and transformed large, unstructured datasets using Python, SQL, and Advanced Excel to support four distinct internal case studies and business reporting initiatives.",
            "Developed and presented Tableau dashboards to visualize key performance indicators (KPIs) and operational metrics, delivering clear, data-driven recommendations to the leadership team.",
            "Practiced efficient data modeling techniques to structure raw data, significantly improving the speed and reliability of subsequent analyses and reporting cycles.",
        ]
    },
    {
        title: "Web Development Intern – Lamstacks Software Solutions",
        period: "Jul 2024",
        tags: ["HTML", "CSS", "JavaScript", "GitHub", "npm"],
        points: [
            "Developed and successfully deployed a modern, responsive portfolio website using HTML, CSS, and JavaScript, adhering to industry-standard npm workflows.",
            "Gained practical experience with GitHub version control and collaborative development, ensuring clean code management and deployment readiness.",
        ]
    }
];

const educationData = [
  { title: "B.Tech - AI & Data Science", period: "2022–2026", details: "St. Xavier's Catholic College of Engineering, Nagercoil" },
  { title: "Higher Secondary Schooling (HSC)", period: "May 2022", details: "Govt. Higher Secondary School, Aralvoimozhi" },
  { title: "Secondary Schooling (SSLC)", period: "Apr 2020", details: "Govt. Higher Secondary School, Aralvoimozhi" },
];

const achievementData = [
  "1st Place Winner in the Intercollegiate Paper Presentation Competition (Mar Ephrem College, 2024).",
  "1st Place Winner in the Business Quiz Competition (Amrita College MBA Dept., 2024).",
  "Served as a Stage Presenter for multiple academic events, reflecting strong public speaking and professional presentation skills.",
];

// --- Helper Components ---

const SectionTitle = ({ children, icon: Icon, delay = '0s' }) => (
    <div 
        className="flex items-center gap-4 mb-6 scroll-fade-in"
        style={{ animationDelay: delay, opacity: 0 }}
    >
        <div className="p-3 rounded-lg border border-primary/20 bg-primary/10 animate-glow">
            <Icon className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-gradient">{children}</h2>
    </div>
);

const ListItem = ({ children }) => (
    <li className="text-foreground/80 flex items-start leading-relaxed text-sm">
        <span className="text-primary mr-3 mt-1 font-bold">•</span>
        <span>{children}</span>
    </li>
);

// --- Main Component ---

const Resume = () => {
    return (
        <section id="resume" className="py-32 px-4 relative overflow-hidden min-h-screen">
            {/* Background Orbs */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1.5s' }} />

            <div className="max-w-6xl mx-auto relative z-10 space-y-16">
                
                {/* --- 1. HEADER AND CONTACT INFO --- */}
                <div className="text-center space-y-4 scroll-fade-in" style={{ animationDelay: '0s' }}>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                        <span className="text-gradient">THANU SIVA N</span>
                    </h1>
                    <p className="text-2xl text-foreground/80 font-semibold italic">Aspiring Data Scientist | Data Analyst | AI/ML Specialist</p>
                    
                    {/* Contact Capsules */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-foreground/60 pt-6">
                        <div className="flex items-center gap-2 p-3 glass-card rounded-xl border border-primary/10">
                            <Phone className="w-4 h-4 text-primary" />
                            <span>+91 94881 08394</span>
                        </div>
                        <a href="mailto:thanusivanallaperumal@gmail.com" className="flex items-center gap-2 p-3 glass-card rounded-xl border border-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-[1.05]">
                            <Mail className="w-4 h-4 text-primary" />
                            <span>thanusivanallaperumal@gmail.com</span>
                        </a>
                        <a href="https://linkedin.com/in/thanusiva18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 glass-card rounded-xl border border-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-[1.05]">
                            <Linkedin className="w-4 h-4 text-primary" />
                            <span>LinkedIn Profile</span>
                        </a>
                    </div>
                    
                    <Separator className="bg-primary/20 mt-8" />
                </div>

                {/* --- 2. PROFESSIONAL PROFILE --- */}
                <div 
                    className="space-y-4 scroll-fade-in" 
                    style={{ animationDelay: '0.2s' }}
                >
                    <SectionTitle icon={Zap}>PROFESSIONAL PROFILE</SectionTitle>
                    <Card className="glass-card glow-border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_30px_hsl(195_100%_65%_/_0.3)]">
                        <CardContent className="p-6 text-lg text-foreground/90 font-light leading-relaxed">
                            Final-year B.Tech student specializing in Artificial Intelligence & Data Science, possessing a robust technical foundation in end-to-end data processing, predictive modeling, and business intelligence. Proven ability to leverage Python (Pandas, Scikit-learn) and SQL for complex data manipulation and statistical analysis. Experienced in designing dynamic, user-facing dashboards using Power BI, Tableau, and Streamlit to deliver actionable, data-driven insights. Seeking an entry-level Data Analyst or Junior Data Scientist role to apply rigorous analytical and technical skills in a dynamic environment.
                        </CardContent>
                    </Card>
                </div>

                {/* --- 3. TECHNICAL EXPERTISE (Dynamic Skills Matrix) --- */}
                <div className="space-y-4 scroll-fade-in" style={{ animationDelay: '0.4s' }}>
                    <SectionTitle icon={Code2}>TECHNICAL EXPERTISE</SectionTitle>
                    <div className="space-y-8">
                        {technicalExpertise.map((category, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex justify-between items-center text-lg font-semibold text-foreground/90">
                                    <span className="flex items-center gap-2">
                                        <category.icon className={cn("w-4 h-4", category.color === "primary" ? "text-primary" : "text-secondary")} />
                                        {category.title}
                                    </span>
                                    <span className={cn("text-sm", category.color === "primary" ? "text-primary" : "text-secondary")}>{category.percentage}% Proficient</span>
                                </div>
                                {/* Animated Progress Bar (simulated using Tailwind width utility) */}
                                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                                    <div 
                                        className={cn("h-full rounded-full transition-all duration-1000 ease-out", 
                                            category.color === "primary" ? "bg-primary glow-border" : "bg-secondary glow-border"
                                        )} 
                                        style={{ width: `${category.percentage}%`, boxShadow: `0 0 10px hsl(var(--${category.color}))` }}
                                    />
                                </div>
                                
                                {/* Skill Chips */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {category.skills.map((skill, i) => (
                                        <span 
                                            key={i}
                                            className={cn("px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 hover:scale-[1.1] hover:shadow-lg cursor-pointer",
                                                category.color === "primary" ? "bg-primary/10 text-primary border-primary/30 hover:bg-primary/20" : "bg-secondary/10 text-secondary border-secondary/30 hover:bg-secondary/20"
                                            )}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- DUAL COLUMN LAYOUT --- */}
                <div className="grid md:grid-cols-3 gap-12">
                    
                    {/* Left Column (2/3 width) - Projects and Work Experience */}
                    <div className="md:col-span-2 space-y-12">
                        
                        {/* 4. PROJECTS */}
                        <div className="space-y-4 scroll-fade-in" style={{ animationDelay: '0.6s' }}>
                            <SectionTitle icon={BarChart3}>DATA SCIENCE PROJECTS</SectionTitle>
                            <div className="space-y-6">
                                {projectsData.map((project, index) => (
                                <Card 
                                    key={index} 
                                    className="glass-card border-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_hsl(195_100%_65%_/_0.3)]"
                                >
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-xl text-primary font-bold">{project.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <ul className="space-y-2">
                                            {project.points.map((point, i) => (
                                                <ListItem key={i}>{point}</ListItem>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-2 pt-4">
                                            {project.tools.map((tool, i) => (
                                                <span 
                                                    key={i}
                                                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-4">
                                            <a 
                                                href={project.link.href} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="text-sm font-medium text-secondary hover:text-primary transition-colors flex items-center gap-2 hover:translate-x-1"
                                            >
                                                <Github className="w-4 h-4" />
                                                {project.link.text}
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>
                                ))}
                            </div>
                        </div>

                        {/* 5. WORK EXPERIENCE (3 Items) */}
                        <div className="space-y-4 scroll-fade-in" style={{ animationDelay: '0.8s' }}>
                            <SectionTitle icon={Briefcase}>WORK EXPERIENCE</SectionTitle>
                            <div className="space-y-6">
                                {workExperienceData.map((exp, index) => (
                                    <Card 
                                        key={index} 
                                        className="glass-card border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_hsl(270_70%_60%_/_0.3)]"
                                    >
                                        <CardHeader className="pb-3">
                                            <div className="flex justify-between items-start">
                                                <div className="flex-1">
                                                    <CardTitle className="text-xl font-bold text-secondary">{exp.title}</CardTitle>
                                                    <p className="text-lg font-medium text-foreground/90">{exp.company}</p>
                                                    <p className="text-sm font-medium text-primary/80 flex items-center gap-2 mt-1">
                                                        <ChevronRight className="w-4 h-4" />
                                                        {exp.period}
                                                    </p>
                                                    <p className="text-sm text-foreground/60 flex items-center gap-1">
                                                        <MapPin className="w-4 h-4" />
                                                        {exp.location}
                                                    </p>
                                                </div>
                                                {/* Icon Emjoi from the data (using text-5xl like in the Projects component) */}
                                                <div className="text-3xl ml-4 pt-1 group-hover:scale-110 transition-transform duration-300">{exp.icon}</div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="pt-0">
                                            <ul className="space-y-2">
                                                {exp.points.map((point, i) => (
                                                    <ListItem key={i}>{point}</ListItem>
                                                ))}
                                            </ul>
                                            <div className="flex flex-wrap gap-2 pt-4">
                                                {exp.tags.map((tag, i) => (
                                                <span 
                                                    key={i}
                                                    className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full border border-secondary/20"
                                                >
                                                    {tag}
                                                </span>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Column (1/3 width) - Education and Info */}
                    <div className="md:col-span-1 space-y-12">

                        {/* 6. EDUCATION */}
                        <div className="space-y-4 scroll-fade-in" style={{ animationDelay: '1.0s' }}>
                            <SectionTitle icon={GraduationCap}>EDUCATION</SectionTitle>
                            <div className="space-y-4">
                                {educationData.map((edu, index) => (
                                    <Card key={index} className="glass-card p-4 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-[1.03] shadow-md">
                                        <p className="font-semibold text-lg text-primary">{edu.title}</p>
                                        <p className="text-sm font-medium text-foreground/90">{edu.period}</p>
                                        <p className="text-sm text-foreground/60">{edu.details}</p>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* 7. INTERNSHIPS (Additional) */}
                        <div className="space-y-4 scroll-fade-in" style={{ animationDelay: '1.2s' }}>
                            <SectionTitle icon={Briefcase}>ADDITIONAL INTERNSHIPS</SectionTitle>
                            <div className="space-y-6">
                                {additionalInternshipData.map((exp, index) => (
                                <Card 
                                    key={index} 
                                    className="glass-card border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_hsl(270_70%_60%_/_0.3)]"
                                >
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-lg font-bold text-secondary">{exp.title}</CardTitle>
                                        <p className="text-sm font-medium text-primary/80">{exp.period}</p>
                                    </CardHeader>
                                    <CardContent className="pt-0 space-y-2">
                                        <ul className="space-y-1">
                                            {exp.points.map((point, i) => (
                                                <ListItem key={i}>{point}</ListItem>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {exp.tags.map((tag, i) => (
                                                <span 
                                                    key={i}
                                                    className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full border border-secondary/20"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                                ))}
                            </div>
                        </div>


                        {/* 8. ACHIEVEMENTS & INFO */}
                        <div className="space-y-4 scroll-fade-in" style={{ animationDelay: '1.4s' }}>
                            <SectionTitle icon={Trophy}>ACHIEVEMENTS</SectionTitle>
                            <Card className="glass-card p-5 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] shadow-md">
                                <ul className="space-y-3">
                                    {achievementData.map((item, index) => (
                                        <ListItem key={index}>{item}</ListItem>
                                    ))}
                                </ul>
                            </Card>

                            <h2 className="text-2xl font-bold text-gradient pt-8">ADDITIONAL INFO</h2>
                            <Card className="glass-card p-5 border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:scale-[1.02] shadow-md">
                                <ul className="space-y-3 text-sm">
                                    <ListItem>Languages: English (Fluent), Tamil (Native), Hindi (Conversational)</ListItem>
                                    <ListItem>Other Tools: Shopify, WordPress, Meta Ads/Campaign Management (Demonstrates business context awareness).</ListItem>
                                    <ListItem>CERTIFICATIONS: IBM Data Analyst Professional Certificate (Coursera)</ListItem>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Resume;