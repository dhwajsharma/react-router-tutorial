import About from './About';
import './App.css';
import Nav from './Nav';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Shop />
    </div>
  );
}

export default App;
