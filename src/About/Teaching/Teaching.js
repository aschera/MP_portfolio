import React from "react";
import "./Teaching.css";

const Teaching = (props) => {
  return (
    <div>
      <section className="about-teaching">
        <h4 className="list-title"> Teaching </h4>

        <div className="about-text">
          <p>
            As an educator I like to teach students about the internals of
            modern computers, and provide an understanding of why different
            software techniques make good or bad use of hardware resources. I am
            the lecturer and examiner for course
            <em>EDA284: Parallel Computer Architecture</em>. I am also lecturer
            and examiner for the course
            <em>DAT400 High Performance Parallel Programming</em>, a new course
            that I developed for the MPHPC master programme.
          </p>

          <ul>
            <li>
              <span className="course-date"> 2019 - now</span>
              <ul>
                <li>
                  <span className="course-name">
                    DAT400: High Performance Parallel Programming
                  </span>  (SP1 2019)
                  <br></br>
                  <span>
                  This course is part of our new Master Programme in High Performance Computing
                  Systems </span><a href="https://www.google.com/url?q=https%3A%2F%2Fwww.chalmers.se%2Fen%2Feducation%2Fprogrammes%2Fmasters-info%2FPages%2FHigh-Performance-Computer-Systems.aspx&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNFjSB5KdSBmNuFI7I9CpgHvO6yL6Q" target="_blank" rel="noopener noreferrer">MPHPC</a>


                </li>
              </ul>
            </li>

            <div className="divider"> &#128629; </div>

            <li>
              <span className="course-date"> 2018 - now</span>
              <ul>
                <li>
                  <span className="course-name">
                    EDA284: Parallel Computer Architecture
                  </span> (SP1 2018, SP3 2020)
                </li>
              </ul>
            </li>

            <div className="divider"> &#128629; </div>

            <li>
              <span className="course-date"> 2018 </span>
              <ul>
                <li>
                  <span className="course-name">
                    Machine Learning - Hardware Co-Design
                  </span> (PhD level course
                    2018)
                </li>
              </ul>
            </li>

            <div className="divider"> &#128629; </div>

            <li>
              <span className="course-date"> 2016 </span>
              <ul>
                <li>
                  <span className="course-name">
                    EDA122: Fault Tolerant Computer Systems
                  </span>  (SP1 2016)
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Teaching;
