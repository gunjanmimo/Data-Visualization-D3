import { arc } from "d3";

const svgWidth = 1680;
const svgHeight = 900;

const centerX = svgWidth / 2;
const centerY = svgHeight / 2;
const eyeOffsetX = 100;
const eyeOffsetY = 50;

const mouthArc = arc()
  .innerRadius(190)
  .outerRadius(170)
  .startAngle(Math.PI / 1.5)
  .endAngle(Math.PI * 1.3);

const BackgroundCircle = ({ radius }) => {
  return (
    <circle r={radius / 2} fill="#ffb300" stroke="black" strokeWidth="3" />
  );
};
const Eye = ({ eyeOffsetX, eyeOffsetY }) => {
  return (
    <circle
      cx={eyeOffsetX}
      cy={eyeOffsetY}
      r={svgHeight / 14}
      fill="black"
      stroke="white"
      strokeWidth="25"
    />
  );
};
function SimileFace() {
  return (
    <div>
      <h1> This is a simile face using svg</h1>
      <svg width={svgWidth} height={svgHeight}>
        <g transform={`translate(${centerX},${centerY})`}>
          <BackgroundCircle radius={centerY} />
          <Eye eyeOffsetX={-eyeOffsetX} eyeOffsetY={-eyeOffsetY} />
          <Eye eyeOffsetX={eyeOffsetX} eyeOffsetY={-eyeOffsetY} />

          <path d={mouthArc()} />
        </g>
      </svg>
    </div>
  );
}
export default SimileFace;
