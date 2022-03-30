import React from "react";
import "./Education.css";

const Education = (props) => {
  return (
    <div>
      <section className="about-education">
        <div className="about-content">

          <div className="about-text">

            <h2>Short Bio</h2>

            <p>
              I received an MSE degree in Telecommunications from the{" "}
              <span>
                <a
                  href="http://www.google.com/url?q=http%3A%2F%2Fwww.upc.edu&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNEUDe3D9Mp_eWNt4XlH22uhi48zgA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Technical University of Catalonia
                </a>
              </span>{" "}
              (UPC) in 2002, and the Ph.D. degree in{" "}
              <span>
                <a
                  href="http://www.google.com/url?q=http%3A%2F%2Fwww.ac.upc.edu&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNFaDTdz-GyoR1voNmOsixjV3HUsPw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Computer Architecture
                </a>
              </span>{" "}
              in 2008, also from UPC. From 2003 to 2005 I lectured on computer
              organization at the Barcelona School of Informatics (FIB). I was a
              member of the Computer Sciences group of the{" "}
              <span>
                <a
                  href="http://www.google.com/url?q=http%3A%2F%2Fwww.bsc.es&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNG08lPaVeu6PRT7x2yxmMRrT7zwJg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Barcelona Supercomputing Center
                </a>
              </span>{" "}
              (BSC) from 2005 until 2011. In January 2012 I moved to the Tokyo
              Institute of Technology as a postdoctoral fellow, where I worked
              in the Matsuoka Laboratory. In April 2014 I joined Chalmers
              University of Technology, which is located in the beautiful city
              of Göteborg in Sweden.{" "}
            </p>

            <p>
              From 2005 until 2008 I worked on the microarchitecture of
              Kilo-Instruction Processors, which lead to my Ph.D.. My advisor
              was Prof.{" "}
              <span>
                <a
                  href="http://www.google.com/url?q=http%3A%2F%2Fwww.bsc.es%2Fcv-mateo%2F1-summary&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNF4CmrPMjMrinoxRgpM247V2qIwhQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mateo Valero
                </a>
              </span>
              . Before my phd I worked on the power evaluation of VLIW
              processors with wide functional units (my Master Thesis topic),
              the design of multi-streamed AES cryptoprocessors and the design
              of power efficient out-of-order microprocessors pipelines.
            </p>

            <p>
              Since 2009 my research area has gradually shifted towards High
              Performance Computing. From 2009 to 2011 I lead a group of PhD
              students at BSC that studied Field Programmable Gate Arrays
              (FPGAs) in the context of HPC. We also proposed new highly
              efficient accelerator architecture by combining the computational
              power of GPUs and data customization capabilities of
              reconfigurable logic.
            </p>

            <p>
              From 2012 to March 2014 I was a JSPS postdoctoral researcher in
              the{" "}
              <span>
                <a
                  href="http://www.google.com/url?q=http%3A%2F%2Fmatsu-www.is.titech.ac.jp%2Fen%2F&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNEo3nvQ3e8HJSvXOrt13Ps7wxlBFw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Matsuoka Laboratory
                </a>
              </span>{" "}
              at TokyoTech. My work focused on performance and data locality
              analysis in task-parallel runtimes. During this time I developed
              the KRD tool, a scalable method for reuse distance analysis in
              multi-socket / multi-core machines.
            </p>

            <p>
              From April 2014 to Feb 2016 I have been a postdoctoral fellow at
              the Department of Computer Science and Engineering of Chalmers
              University of Technology. My work has focused on the design of
              runtimes and architectures that exploit high-level semantic
              information for improved programmability, parallelism, power and
              predictability. During this time I developed the first version of
              XiTAO, a lightweight layer on top of C++ to explore task
              scheduling and resource management.{" "}
            </p>

            <p>
              Since March 2016 until Jul 2019 I was an Assistant Professor at
              the Computer Engineering Division. In February 2018 I received the
              title of Docent. Since July 2019 I am an Associate Professor in
              the Computer Engineering Division.{" "}
            </p>

            <p>
              I am a member of the
              <span>
                <a
                  href="http://www.google.com/url?q=http%3A%2F%2Fwww.acm.org&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNHtxFyGSE7jSeGdYuo9hcy8PMD3Xg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ACM
                </a>
              </span>
              , ACM SIGARCH, ACM
              <span>
                <a
                  href="http://www.google.com/url?q=http%3A%2F%2Fwww.sighpc.org&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNFfn605UVBxDLYPig3BY1q6CTDMSg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SIGHPC
                </a>
              </span>
              , the{" "}
              <span>
                <a
                  href="http://www.google.com/url?q=http%3A%2F%2Fwww.computer.org&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNGHRqUlvZyYuyTAmJ92qS5z_xxDGw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IEEE Computer Society
                </a>
              </span>
              , and IEEE TCuarch.{" "}
            </p>

            <p>
              A detailed description of my research with references to
              publications can be found in the Research section of this website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
