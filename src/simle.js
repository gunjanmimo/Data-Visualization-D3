import { arc } from "d3";

const svgWidth = 1680;
const svgHeight = 900;

const centerX = svgWidth / 2;
const centerY = svgHeight / 2;
const eyeOffsetX = 100;
const eyeOffsetY = 50;

const mouthArc = arc()
  .innerRadius(90)
  .outerRadius(120)
  .startAngle(0)
  .endAngle(Math.PI * 2);

function SimileFace() {
  return (
    <div>
      <h1> This is a simile face using svg</h1>
      <g transform={`translate(${centerX},${centerY})`}>
        <svg width={svgWidth} height={svgHeight}>
          <circle
            cx={centerX}
            cy={centerY}
            r={centerY / 2}
            fill="#ffb300"
            stroke="black"
            strokeWidth="3"
          />

          <circle
            cx={centerX - eyeOffsetX}
            cy={centerY - eyeOffsetY}
            r={svgHeight / 14}
            fill="black"
            stroke="white"
            strokeWidth="25"
          />
          <circle
            cx={centerX + eyeOffsetX}
            cy={centerY - eyeOffsetY}
            r={svgHeight / 14}
            fill="black"
            stroke="white"
            strokeWidth="25"
          />
          <path d={mouthArc()} />
        </svg>
      </g>
    </div>
  );
}
export default SimileFace;
