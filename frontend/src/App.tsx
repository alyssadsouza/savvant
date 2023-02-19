import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import SearchResults from "./pages/SearchResults";

function App() {
  const [query, setQuery] = useState<string>("");
  console.log(query);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setQuery={setQuery} />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/" element={<HowItWorks />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
