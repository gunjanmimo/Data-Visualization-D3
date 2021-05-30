import { useState, useEffect } from "react";
import { csv, arc, pie } from "d3";

const width = 1680;
const height = 800;

const centerX = width / 2;
const centerY = height / 2;

const csvURL =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/acd2b8cecfe51c520622fbaf407ee88b8796bfc6/cssNamedColors.csv";

const pieArc = arc().innerRadius(0).outerRadius(width);

const CSSPieChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvURL).then(setData);
  }, []);

  if (!data) {
    return <pre>Data Loading</pre>;
  }
  return (
    <div>
      <h1>CSS Pie Chart using D3</h1>
      <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
          {pie()
            .value(1)(data)
            .map((d) => (
              <path fill={d.data["RGB hex value"]} d={pieArc(d)} />
            ))}
          {/* {data.map((d, i) => (
            <path
              fill={d["RGB hex value"]}
              d={pieArc({
                startAngle: (i / data.length) * Math.PI * 2,
                endAngle: Math.PI * 2,
              })}
            />
          ))} */}
        </g>
      </svg>
    </div>
  );
};
export default CSSPieChart;
