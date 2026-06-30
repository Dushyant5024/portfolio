import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>LLM Post-Training Intern</h4>
                <h5>Ethara AI</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Fine-tuned LLMs using SFT and preference-based training techniques to improve response quality. Engineered automated evaluation pipelines using quantitative metrics and benchmarking methodologies for systematic model assessment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>ISKCON Gwalior, M.P</h5>
              </div>
              <h3>2024-25</h3>
            </div>
            <p>
              Developed a scalable PHP/MySQL platform serving 3,000+ users and processing 100,000+ secure transactions. Reduced redundant backend computations by 35% through query optimization and caching.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Intern</h4>
                <h5>LearNex</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built scalable ML pipelines processing 50K+ records using Scikit-learn, statistical validation, and performance benchmarking. Evaluated machine learning models achieving strong predictive performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
