import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CalculatorPage from "./pages/CalculatorPage";

function App({ color = "green"}) {
  
  return (
    <div style={{ backgroundColor: color }}>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<HomePage color={color}/>}
          />
          <Route
            path="/calculator"
            element={<CalculatorPage color={color}/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
