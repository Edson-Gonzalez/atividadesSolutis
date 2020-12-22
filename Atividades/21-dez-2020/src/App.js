import Clock from "./components/Clock";
import MainCounter from "./components/MainCounter";
import Timer from "./components/Timer"
import './App.css';

const App = () => {
  return (
    <div style={{display:"flex"}}>
      <Clock/>
      <MainCounter/>  
      <Timer/>
    </div>
  );
}

export default App;