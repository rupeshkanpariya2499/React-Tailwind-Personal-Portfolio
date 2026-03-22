import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";


const testimonials = [
  {
    quote:
      "Rupesh is an exceptional Data Analyst with a keen eye for detail and a passion for uncovering insights from complex datasets. His ability to transform raw data into actionable recommendations is truly impressive.",
    author: "Maheshbhai Rathod",
    role: "Service Manager, ARENA – Maruti Suzuki India Ltd.",
    avatar: "https://avatars.githubusercontent.com/u/12345678?v=4",
  },

  {
    quote:
      "Rupesh's dedication to his work and his ability to quickly grasp new concepts make him a valuable asset to any team. He consistently delivers high-quality results and is always willing to go the extra mile.",
    author: "Bhaskarbhai Ghevariya",
    role: "Sales Director, ARENA – Maruti Suzuki India Ltd.",
    avatar: "https://media.licdn.com/dms/image/v2/C5603AQEUPniV5P_89Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1622777540895?e=2147483647&v=beta&t=_hyiEh2UPxJwvnADz92i8d1RTrhVngfWhGa9nwi0JvE",
  },

  {
    quote:
      "Rupesh's analytical skills and attention to detail have been instrumental in driving data-driven decision-making within our organization. He is a true professional and a pleasure to work with.",
    author: "Roney Patel",
    role: "Operations Manager, ARENA – Maruti Suzuki India Ltd.",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQGkjWox3HGEyQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1665850540450?e=2147483647&v=beta&t=tFtiVAWfIwqCgs3yrY-uIMCPJbQdo5NfieXtrrrrvzQ",
  },

  {
    quote:
      "Rupesh is a talented and dedicated professional who consistently delivers outstanding results. His expertise in data analysis and his ability to communicate complex insights in a clear and concise manner make him an invaluable member of any team.",
    author: "Shuaib Shaikh",
    role: "Marketing Manager, ARENA – Maruti Suzuki India Ltd.",
    avatar: "https://media.licdn.com/dms/image/v2/C5603AQGuwjBOP9rFOg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516333582951?e=2147483647&v=beta&t=ne4jlwUyLtK1nKA3Y6hqf_dptSGvMi0hCXnbGh6QeCk",
  },

  {
    quote:
      "Rupesh's work ethic and commitment to excellence are truly commendable. He is a proactive problem-solver who consistently goes above and beyond to ensure the success of his projects.",
    author: "Dineshbhai Mehta",
    role: "Finance Manager, ARENA – Maruti Suzuki India Ltd.",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEViFHGetK6jA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698344410165?e=2147483647&v=beta&t=2tmn67uMmzi7EFbFdCu_Z-PQWIJUgKb3ZNSbt2ONlS0",
  }
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16">
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto ">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20" />
                <div>
                  <div className="font-semibold">{testimonials[activeIndex].author}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              onClick={previous}
            >
              <ChevronLeft />
            </button>
            <div className="flex gap-2">{testimonials.map((_, index) => (
              <button
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} />
            ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section >
  );
};