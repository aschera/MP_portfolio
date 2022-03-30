import React from "react";
import "./Intro.css";

const Intro = (props) => {
  return (
    <div>
      <section className="about-intro">
        <h3 className="section-title"> About </h3>

        <div className="about-content">
          <div className="about-image">
            Docent, avdelningen för Dator- och nätverkssystem, Institutionen för
            data- och informationsteknik.
          </div>

          <div className="about-text">

            <p>
              Hej!
              <br></br>
              <br></br>I am an <b>associate professor</b> in the Computer
              Engineering division of the Department of{" "}
              <span>
                <a
                  href="http://www.google.com/url?q=http%3A%2F%2Fwww.chalmers.se%2Fen%2Fdepartments%2Fcse%2FPages%2Fdefault.aspx&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNESn9D-WQSWKRrPFKrQG-RcMtTBPw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Computer Science and Engineering
                </a>
              </span>{" "}
              of{" "}
              <span>
                <a
                  href="http://www.google.com/url?q=http%3A%2F%2Fwww.chalmers.se%2Fen%2FPages%2Fdefault.aspx&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNGxCfJHt0VmzZeihda4ZRg8jDr7qg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chalmers University of Technology
                </a>
              </span>
              .
            </p>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
