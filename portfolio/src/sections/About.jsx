import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time."
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];





export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white"> {` `}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a data-driven professional currently pursuing a Master’s in Mathematical Modeling, Simulation, and Optimization at the University of Koblenz. With a strong foundation in data analysis, machine learning, and optimization, I specialize in transforming complex datasets into actionable insights.
              </p>
              <p>
                I bring nearly two years of hands-on experience as a Data Analyst at ARENA – Maruti Suzuki India Ltd., where I worked on large-scale data processing, predictive modeling, and automated reporting solutions. My work has contributed to improving decision-making efficiency and reducing operational downtime.
              </p>
              <p>

                I am proficient in Python, SQL, Power BI, and Tableau, with additional exposure to cloud technologies such as AWS. I enjoy working in structured, fast-paced environments and have a strong ability to solve problems independently.
              </p>
              <p>

                I am passionate about leveraging data to drive business impact and continuously expanding my technical and analytical skill set.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "To leverage data analytics, machine learning, and optimization techniques to transform complex data into actionable insights that drive efficient, data-driven business decisions and continuous improvement."
              </p>
            </div>
          </div>

          {/* Right Column Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary"/>
                  </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                  </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};