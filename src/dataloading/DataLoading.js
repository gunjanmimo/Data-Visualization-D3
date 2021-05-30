import { useState, useEffect } from "react";
import { csv, csvFormat } from "d3";

const message = (data) => {
  let message = "";
  message = message + Math.round(csvFormat(data).length / 1024) + "kb\n";
  message = message + data.length + " length\n";
  message = message + data.columns.length + " columns\n";
  return message;
  //document.getElementById("message").textContent = message;
};
const csvURL =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/acd2b8cecfe51c520622fbaf407ee88b8796bfc6/cssNamedColors.csv";

const DataLoading = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    csv(csvURL).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div>
      <h1>data loading with d3, react state</h1>
      <h3>{data ? message(data) : "loading"}</h3>
    </div>
  );
};
export default DataLoading;
