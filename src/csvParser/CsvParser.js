import { csvFormat, csvParse, csv } from "d3";

const csvURL =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/acd2b8cecfe51c520622fbaf407ee88b8796bfc6/cssNamedColors.csv";

csv(csvURL).then((data) => {
  let message = "";
  message = message + Math.round(csvFormat(data).length / 1024) + "kb\n";
  message = message + data.length + " length\n";
  message = message + data.columns.length + " columns\n";
  document.getElementById("message").textContent = message;
});

// using fetch, async and await
// const fetchText = async (url) => {
//   const response = await fetch(url);
//   return await response.text();
// };
// fetchText(csvURL).then((text) => {
//   const data = csvParse(text);
//   let message = "";
//   message = message + Math.round(text.length / 1024) + "kb\n";
//   message = message + data.length + " length\n";
//   message = message + data.columns.length + " columns\n";
//   document.getElementById("message").textContent = message;
// });
const CsvParser = () => {
  return (
    <div>
      <h1>CSV parsing using D3</h1>
      <h2 id="message"></h2>
    </div>
  );
};
export default CsvParser;
