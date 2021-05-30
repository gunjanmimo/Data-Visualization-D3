import { useState, useEffect } from "react";
import { csv, scaleBand, scaleLinear, max } from "d3";

const width = 1680;
const height = 800;
const csvURL =
  "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/UN_Population_2019.csv";

const BarChart = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const row = (d) => {
      d.Population = +d["2020"];
      return d;
    };
    csv(csvURL, row).then((data) => {
      setData(data.slice(0, 10));
    });
  }, []);

  if (!data) {
    return (
      <div>
        <h1>Data Loading</h1>
      </div>
    );
  }

  const yScale = scaleBand()
    .domain(data.map((d) => d.Country))
    .range([0, height]);
  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.Population)])
    .range([0, width]);

  return (
    <div>
      <h1>Bar Chart using D3</h1>
      <svg width={width} height={height}>
        {data.map((d) => (
          <rect
            x={0}
            y={yScale(d.Country)}
            width={xScale(d.Population)}
            height={yScale.bandwidth()}
          />
        ))}
      </svg>
    </div>
  );
};
export default BarChart;
