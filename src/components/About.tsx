import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const lines = [
    "Fueled by curiosity and a love for solving problems, I dive into data to uncover patterns and meaning.",
    "From dashboards to machine learning models, I turn data into stories and strategies.",
    "My goal: to grow into a data professional who blends technical skill with business impact."
  ];

  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="text-center space-y-8 px-4">
          {lines.map((line, index) => (
            <p
              key={index}
              className={`text-xl md:text-2xl leading-relaxed text-foreground/80 transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.3}s` }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
