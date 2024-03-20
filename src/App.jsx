import "./App.css";
// import DaisyNav from "./assets/Components/DaisyNav/DaisyNav";
import NavBar from "./assets/Components/NavBar/NavBar";
// import PriceOption from "./assets/Components/PriceOption/PriceOption";

import PriceOptions from "./assets/Components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}

      <PriceOptions></PriceOptions>
      {/* <PriceOption></PriceOption> */}
    </>
  );
}

export default App;
