import "./App.css";
import Chart from "./Components/Chart/Chart";
import DaisyNavbar from "./Components/DaisyNavbar/DaisyNavbar";


function App() {
  return (
    <>
      <DaisyNavbar></DaisyNavbar>
      <h1 className="text-3xl bg-rose-300 text-center">React Rechart</h1>
      <Chart></Chart>
    </>
  );
}

export default App;
