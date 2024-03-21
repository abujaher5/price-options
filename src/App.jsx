import "./App.css";
import BarChart from "./assets/Components/BarChart/BarChart";
import LineChart from "./assets/Components/LineChart/LineChart";
// import DaisyNav from "./assets/Components/DaisyNav/DaisyNav";
import NavBar from "./assets/Components/NavBar/NavBar";
import Phones from "./assets/Components/Phones/Phones";
// import PriceOption from "./assets/Components/PriceOption/PriceOption";

import PriceOptions from "./assets/Components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      {/* <PriceOption></PriceOption> */}

      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <BarChart></BarChart>

      <Phones></Phones>
    </>
  );
}

export default App;
