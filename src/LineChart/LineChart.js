import { useState, useEffect, useRef } from "react";
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  scaleLinear,
  max,
  axisRight,
} from "d3";

const width = 1680;
const height = 400;

const LineChart = () => {
  const svgRef = useState();
  const [data, setData] = useState(
    [...Array(40)].map((e) => (Math.random() * 10) | 0)
  );

  const xScale = scaleLinear()
    .domain([0, data.length - 1])
    .range([0, width]);
  const xAxis = axisBottom(xScale)
    .ticks(data.length)
    .tickFormat((index) => index + 1);

  const yScale = scaleLinear()
    .domain([0, max(data)])
    .range([400, 0]);
  const yAxis = axisRight(yScale);

  useEffect(() => {
    const myLine = line()
      .x((value, index) => xScale(index))
      .y((value) => yScale(value))
      .curve(curveCardinal);
    const svg = select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    svg
      .select(".x-axis")
      .style("transform", `translateY(${height}px)`)
      .call(xAxis);
    svg
      .select(".y-axis")
      .style("transform", `translateX(${width}px)`)
      .call(yAxis);
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", (value) => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, [data]);
  return (
    <div>
      <h1>Line Chart with D3</h1>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
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
