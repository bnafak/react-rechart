import "./App.css";
import Chart from "./Components/Chart/Chart";
import DaisyNavbar from "./Components/DaisyNavbar/DaisyNavbar";
import Phones from "./Components/Phones/Phones";


function App() {
  return (
    <>
      <DaisyNavbar></DaisyNavbar>
      <h1 className="text-3xl bg-rose-300 text-center p-3">React Rechart</h1>
      <Chart></Chart>
      <Phones></Phones>
    </>
  );
}

export default App;
