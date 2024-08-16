import React from "react";
import ReactCurvedText from "react-curved-text";
import Flower from "../../resources/flower.png";

function CurvedText() {
  return (
    <div className="w-screen h-screen absolute">
      {/* <h1>YOU WOULD</h1> */}
      {/* <svg width="500" height="500">
        <path id="curve" d="M 0 400 C 0 400, 120 100, 260 400"></path>
        <text class="text" textAnchor="middle">
          <textPath class="text__path" href="#curve" startOffset="50%">
            YOU WOULD
          </textPath>
        </text>
      </svg> */}
      <ReactCurvedText
        width="100%"
        height={500}
        cx={600}
        cy={500}
        rx={700}
        ry={141}
        startOffset={200}
        reversed={true}
        text="YOU WOULD "
        textProps={{ style: { fontSize: 200 } }}
        textPathProps={null}
        tspanProps={null}
        ellipseProps={null}
        svgProps={{ style: { transform: "rotate(-16deg)" } }}
      />
      <ReactCurvedText
        width="fit-content"
        height={600}
        cx={1200}
        cy={150}
        rx={452}
        ry={0}
        startOffset={50}
        reversed={true}
        text="DRINK IT "
        textProps={{ style: { fontSize: 200 } }}
        textPathProps={null}
        tspanProps={null}
        ellipseProps={null}
        svgProps={{ style: { transform: "rotate(346deg)" } }}
      />
      <div className="text-last">
        <ReactCurvedText
          width="100%"
          height={500}
          cx={600}
          cy={150}
          rx={600}
          ry={0}
          startOffset={50}
          reversed={true}
          text="EVERY DAY?"
          textProps={{ style: { fontSize: 200 } }}
          textPathProps={null}
          tspanProps={null}
          ellipseProps={null}
          svgProps={{ style: { transform: "rotate(10deg)" } }}
        />
        <div className="flower-container">
          <img src={Flower} alt="flower" className="flower" />
          <p className="flower-text">WE HAVE WHAT YOU NEED</p>
        </div>
      </div>
    </div>
  );
}

export default CurvedText;
