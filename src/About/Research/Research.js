import React from "react";
import "./Research.css";

const Research = (props) => {
  return (
    <div>
      <section className="about-research">
        <h4 className="list-title"> Research </h4>

        <div className="about-text">
          <p>
            As a researcher I am interested in making future HPC fast and energy
            efficient. I am fascinated both by exascale applications and novel
            hardware approaches, my work focuses on the interface between both:
            compilers, runtimes and computer organizations. A more in depth
            description of my research is under the{" "}
            <span>
              <a href="/site/mpericas/research?authuser=0">Research</a>
            </span>{" "}
            tab.
          </p>

          <h2>Some Recent Program Committee activities</h2>

          <ul>
            <li>
              <span className="research-date"> 2021</span>

              <ul>
                <li>IPDPS 2021</li>
                <li>DATE 2021</li>
              </ul>
            </li>
            <li>
              <span className="research-date"> 2020</span>

              <ul>
                <li>ROSS 2020</li>
                <li>MICRO SRC 2020</li>
              </ul>
            </li>
          </ul>

          <h2>Active Projects</h2>

          <ul>
            <li>
              <a
                href="https://www.google.com/url?q=https%3A%2F%2Flegato-project.eu%2F&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNF3fE5QSlRvzSYcO8kKpU1f-q_P0A"
                target="_blank"
                rel="noopener noreferrer"
              >
                H2020 LEGaTO
              </a>
            </li>
            <a
              href="https://www.google.com/url?q=https%3A%2F%2Fwww.european-processor-initiative.eu&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNFc5LPie4QWjItekBrE5cvCRfMCXQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              H2020 European Processor Initiative
            </a>
            <li></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Research;
