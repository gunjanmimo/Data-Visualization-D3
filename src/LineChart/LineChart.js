import { useState, useEffect, useRef } from "react";
import { select, selectAll, line, curveCardinal } from "d3";

const width = 1680;
const height = 400;

const LineChart = () => {
  const svgRef = useState();
  const [data, setData] = useState(
    [...Array(40)].map((e) => (Math.random() * 10) | 0)
  );
  const myLine = line()
    .x((value, index) => index * 50)
    .y((value) => height - value)
    .curve(curveCardinal);
  useEffect(() => {
    const svg = select(svgRef.current)
      .attr("width", width)
      .attr("height", height);
    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", (value) => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, [data]);
  return (
    <div>
      <h1>Line Chart with D3</h1>
      <svg ref={svgRef}></svg>
      <div>
        <button
          onClick={() =>
            setData(data.map((value) => value * Math.random() * 10))
          }
        >
          update data
        </button>
        <button onClick={() => setData(data.filter((value) => value < 15))}>
          filter data
        </button>
      </div>
    </div>
  );
};
export default LineChart;
