import About from "./components/About";
import Customer from "./components/Customer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Customer/>
    </div>
  );
}

export default App;
