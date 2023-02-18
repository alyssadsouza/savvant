import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<HowItWorks />} />
      </Routes>
    </Router>
  );
}

export default App;
