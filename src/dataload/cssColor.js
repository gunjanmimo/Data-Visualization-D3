import { csv } from "d3";

const csvURL =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/acd2b8cecfe51c520622fbaf407ee88b8796bfc6/cssNamedColors.csv";

const fetchText = async (url) => {
  const response = await fetch(url);
  return await response.text();
};

const CssColor = () => {
  fetchText(csvURL).then((data) => {
    console.log(data);
  });
  return (
    <div>
      <h1>CSS Color Viewer</h1>
    </div>
  );
};
export default CssColor;
