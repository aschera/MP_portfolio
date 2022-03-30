import React from "react";

const MobileMenu = ({ onClick,toggle }) => {

  return (
    <div>

      <button
        onClick={onClick}
        className="site-title-menu"
        title="menu"
      >
       {toggle ? 'currently' : 'not'}


      </button>
    </div>
  );
};

export default React.memo(MobileMenu);

/*
        <span className="site-title-icon">
          <div className="closed">
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              x="0"
              y="0"
              preserveAspectRatio="xMinYMin meet"
              className="artdeco-icon"
            >
              <g className="large-icon">
                <path d="M2,16H22v2H2V16ZM2,6V8H22V6H2Zm0,7H22V11H2v2Z"></path>
              </g>
            </svg>
          </div>
        </span>




            <div className="open">
              <svg
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                x="0"
                y="0"
                preserveAspectRatio="xMinYMin meet"
                className="artdeco-icon"
              >
                <g className="large-icon">
                  <path d="M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z"></path>
                </g>
              </svg>
            </div>


*/
