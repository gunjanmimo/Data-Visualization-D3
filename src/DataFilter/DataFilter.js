import { useState, useEffect, useRef } from "react";
import { select, selectAll } from "d3";

const width = 1680;
const height = 400;

const DataFilter = () => {
  const ref = useRef();
  const [data, setData] = useState([
    2, 3, 4, 5, 6, 9, 3, 2, 3, 4, 5, 6, 9, 3, 2, 3, 4, 5, 6, 9, 3,
  ]);

  useEffect(() => {
    const svg = select(ref.current).attr("width", width).attr("height", height);
    svg
      .selectAll("circle")
      .data(data)
      .join(
        (enter) => enter.append("circle").attr("class", "circle"),
        (update) => update.attr("class", "updated"),
        (exit) => exit.remove()
      )
      .attr("cx", (d, i) => {
        return (i * width) / data.length + 10;
      })
      .attr("cy", (d, i) => {
        return Math.pow(i, 2) + 10;
      })
      .attr("r", (d) => {
        return d;
      });

    console.log(data);
  }, [data]);

  return (
    <div className="App">
      <h1>Gunjan Paul</h1>
      <svg ref={ref}></svg>
      <div>
        <button onClick={() => setData(data.map((value) => value + 5))}>
          update data
        </button>
        <button onClick={() => setData(data.filter((value) => value < 15))}>
          filter data
        </button>
      </div>
    </div>
  );
};
export default DataFilter;
