import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "EDITH AI",
    category: "Agentic AI Automation",
    tools: "Python, LangChain, Flask, OpenAI API",
    image: "/images/edith.png",
    link: "https://github.com/Dushyant5024/EDITH-AI-Personal-Assistant.git"
  },
  {
    name: "Stock-Explainer-AI",
    category: "AI-powered Stock Analysis",
    tools: "Financial APIs, AI Reasoning, Data Retrieval",
    image: "/images/stock-explainer.png",
    link: "https://github.com/Dushyant5024/Stock-Explainer-AI.git"
  },
  {
    name: "Mini Compiler",
    category: "Static Code Analyzer",
    tools: "Lexical Analyzer, Parser, Optimization Checks",
    image: "/images/mini compiler.png",
    link: "https://github.com/Dushyant5024/Mini-Compiler-Static-Code-Analyzer.git"
  },
  {
    name: "Whatsapp Chat Analysis",
    category: "Data Analysis",
    tools: "Python, Pandas, Data Visualization",
    image: "/images/whatsapp chat analyzer.png",
    link: "https://github.com/Dushyant5024/Whatsapp-Chat-Analysis.git"
  },
];

const Work = () => {
  useGSAP(() => {
    const getTranslateX = () => {
      const box = document.getElementsByClassName("work-box");
      if (!box || box.length === 0) return 0;
      const workContainer = document.querySelector(".work-container");
      if (!workContainer) return 0;
      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentElement = box[0].parentElement;
      if (!parentElement) return 0;
      const parentWidth = parentElement.getBoundingClientRect().width;
      let padding: number = parseInt(window.getComputedStyle(box[0]).padding) / 2 || 0;
      return rect.width * box.length - (rectLeft + parentWidth) + padding;
    };

    let mm = gsap.matchMedia();
    mm.add("(min-width: 1026px)", () => {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: () => `+=${getTranslateX()}`,
          scrub: true,
          pin: true,
          id: "work",
          invalidateOnRefresh: true,
        },
      });

      timeline.to(".work-flex", {
        x: () => -getTranslateX(),
        ease: "none",
      });

      return () => {
        timeline.kill();
        ScrollTrigger.getById("work")?.kill();
      };
    });

    return () => mm.revert();
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>
                      {project.link ? (
                        <a href={project.link} target="_blank" style={{ color: "inherit", textDecoration: "none" }}>
                          {project.name} <MdArrowOutward />
                        </a>
                      ) : (
                        project.name
                      )}
                    </h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image || "/images/placeholder.webp"} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
