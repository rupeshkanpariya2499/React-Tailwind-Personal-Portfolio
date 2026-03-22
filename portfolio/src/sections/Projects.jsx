import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Electric Vehicle Sales Dashboard",
    description: "A dashboard for visualizing and analyzing electric vehicle sales data. The project involves data processing, visualization, and interactive reporting to support business intelligence.",
    image: "/projects/ev.png",
    tags: ["Python", "Data Visualization", "Power BI", "Business Intelligence"],
    github: "https://github.com/rupeshkanpariya2499/Data-Science-Projects/tree/main/Electric%20vehicle",
  },

  {
    title: "BMW Price Prediction Market Analysis",
    description: "Focuses on predicting the price of used BMW cars using machine learning techniques. The project involves data preprocessing, feature engineering, and model training to achieve accurate price predictions based on various car attributes.The goal was to build an accurate regression model that can estimate car prices based on these attributes.",
    image: "/projects/bmw_price.png",
    tags: ["Python", "Machine Learning", "Data preprocessing", "Regression modeling", "Feature engineering"],
    github: "https://github.com/rupeshkanpariya2499/Data-Science-Projects/tree/main/BMW-Price-Prediction-Market-Analysis",
  },

  {
    title: "Automotive Dataset Analysis",
    description: "Analyzes automotive datasets to extract insights and patterns. The project involves data cleaning, exploratory data analysis, and visualization to support informed decision-making.",
    image: "/projects/mpg_analysis.png",
    tags: ["Data Analysis", "Exploratory Data Analysis", "Visualization", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/rupeshkanpariya2499/Data-Science-Projects/tree/main/02-Auto-MPG-Dataset-Analysis",
  },

  {
    title: "Bike Store Sales Analysis",
    description: "Analyzes sales data from a bike store to identify trends and patterns. The project involves data cleaning, exploratory data analysis, and visualization to support informed decision-making.",
    image: "projects/bike_store.png",
    tags: ["SQL", "Data Analysis", "Exploratory Data Analysis", "Visualization", "Tableau"],
    github: "https://github.com/rupeshkanpariya2499/Data-Science-Projects/tree/main/Bike%20store%20sales%20analysis%20using%20SQL",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium-tracking-wider uppercase animate-fade-in">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {` `}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of projects that demonstrate my skills in data analysis, machine learning, and business intelligence. Each project highlights my ability to extract insights from complex datasets and deliver actionable results.
          </p>
        </div>

        {/* Projects Grid */}

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}>
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <a href= {project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                <ArrowUpRight className="w-5 h-5"/>
              </a> */}
                  <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                  </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} 
                  className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Call To Action */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};