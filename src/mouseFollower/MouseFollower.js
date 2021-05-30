import { useState, useCallback } from "react";

const width = 1060;
const height = 900;

const initialMousePos = { x: width / 2, y: height / 2 };

const MouseFollower = () => {
  const [mousePos, setMousePos] = useState(initialMousePos);
  const handleMouseMove = useCallback(
    (event) => {
      const { clientX, clientY } = event;
      setMousePos({ x: clientX - 5, y: clientY - 5 });
    },
    [setMousePos]
  );
  return (
    <div>
      <svg width={width} height={height} onMouseMove={handleMouseMove}>
        <circle cx={mousePos.x} cy={mousePos.y} r={width / 20}></circle>
      </svg>
    </div>
  );
};
export default MouseFollower;
