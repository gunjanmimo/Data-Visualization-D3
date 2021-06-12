import "./ResponsiveBarChart.css";
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

const width = 1680;
const height = 400;

const ResponsiveBarChart = () => {
  const [data, setData] = useState(
    [...Array(25)].map((e) => (Math.random() * 100) | 0)
  );

  const ref = useRef();

  useEffect(() => {
    const svg = select(ref.current).attr("width", width).attr("height", height);

    const xScale = scaleLinear()
      .domain([0, max(data)])
      .range([0, width]);
    const yScale = scaleLinear().domain([0, height]).range([height, 0]);

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((index) => index + 1);
    const yAxis = axisRight(yScale);

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
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d, i) => {
        return i * (width / data.length) + 5;
      })
      .attr("y", (d) => {
        return height - d;
      })
      .attr("width", width / data.length - 10)
      .attr("height", (d) => {
        return d;
      });
  }, [data]);

  return (
    <div>
      <h1>Responsive Bar Chart with D3</h1>
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
        <button
          className="bt2"
          onClick={() => setData(data.filter((value) => value < 15))}
        >
          Filter Data
        </button>
        <button
          className="bt3"
          onClick={() => setData(data.push(Math.random() * 10))}
        >
          Add Data
        </button>
      </div>
    </div>
  );
};
export default ResponsiveBarChart;
