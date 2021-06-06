import React, { useRef, useEffect, useState } from "react";
import { select } from "d3";

const width = 1680;
const height = 500;

const D3Dom = () => {
  const [data, setData] = useState(
    [...Array(40)].map((e) => (Math.random() * 10) | 0)
  );
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current)
      .attr("width", width)
      .attr("height", height);
    svg
      .selectAll("rect")
      .data(data)

      .join(
        (enter) => enter.append("rect").attr("circle", "rect"),
        (update) => update.attr("class", "update"),
        (exit) => exit.remove()
      )
      .attr("x", (d, i) => {
        return i * (width / data.length);
      })
      .attr("y", (d, i) => {
        return height - d * 10;
      })
      .attr("width", (d) => {
        return width / data.length - 10;
      })
      .attr("height", (d) => {
        return d * 10;
      });
  }, [data]);
  return (
    <div>
      <h1> D3 DOM manipulation </h1>
      <svg ref={svgRef}></svg>
      <div>
        <button
          onClick={() =>
            setData(data.map((value) => value + Math.random() * 10))
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
export default D3Dom;
