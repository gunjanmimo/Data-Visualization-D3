import { useState, useEffect, useRef } from "react";
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  scaleLinear,
  max,
  axisRight,
  scaleBand,
  index,
} from "d3";
import "./AnimatedBarChart.css";
const width = 1680;
const height = 400;

const AnimatedBarChart = () => {
  const [data, setData] = useState(
    [...Array(50)].map((e) => (Math.random() * 100) | 0)
  );
  const ref = useRef();

  const xScale = scaleBand()
    .domain(data.map((value, index) => index))
    .range([0, width])
    .padding(0.5);
  const xAxis = axisBottom(xScale)
    .ticks(data.length)
    .tickFormat((index) => index + 1);
  const yScale = scaleLinear().domain([0, height]).range([height, 0]);
  const colorScale = scaleLinear()
    .domain([0, height / 2, height])
    .range(["green", "orange", "red"])
    .clamp(true);
  const yAxis = axisRight(yScale);
  useEffect(() => {
    const svg = select(ref.current).attr("width", width).attr("height", height);
    svg
      .select(".x-axis")
      .style("transform", `translateY(${height}px)`)
      .call(xAxis);
    svg
      .select(".y-axis")
      .style("transform", `translateX(${width}px)`)
      .call(yAxis);
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")

      .style("transform", "scale(1,-1)")
      .attr("x", (value, index) => {
        return index * (width / data.length) + 5;
      })
      .attr("y", -height)
      .attr("width", xScale.bandwidth())
      .transition()
      .attr("fill", colorScale)
      .attr("height", (value) => height - yScale(value));
  }, [data]);
  return (
    <div>
      <h1>Animated Bar Chart with D3</h1>

      <svg ref={ref}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
      <div className="buttons">
        <button
          className="bt1"
          onClick={() =>
            setData(data.map((value) => value + Math.random() * 10))
          }
        >
          Update Data
        </button>
        <button className="bt2">Filter Data</button>
      </div>
    </div>
  );
};
export default AnimatedBarChart;
