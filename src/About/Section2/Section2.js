import React from 'react';
import './Section2.css';

const Section2 = ( props ) => {

    return (
      <div>
        <section>
          <h2>Some more about me</h2>

          <p>
            Hej! I am an associate professor in the Computer Engineering
            division of the Department of{" "}
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
            . As a researcher I am interested in making future HPC fast and
            energy efficient. I am fascinated both by exascale applications and
            novel hardware approaches, my work focuses on the interface between
            both: compilers, runtimes and computer organizations. A more in
            depth description of my research is under the{" "}
            <span>
              <a href="/site/mpericas/research?authuser=0">Research</a>
            </span>{" "}
            tab. As an educator I like to teach students about the internals of
            modern computers, and provide an understanding of why different
            software techniques make good or bad use of hardware resources. I am
            the lecturer and examiner for course{" "}
            <em>EDA284: Parallel Computer Architecture</em>. I am also lecturer
            and examiner for the course{" "}
            <em>DAT400 High Performance Parallel Programming</em>, a new course
            that I developed for the MPHPC master programme.
          </p>
        </section>
      </div>
    );
};

export default Section2;
