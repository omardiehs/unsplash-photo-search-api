import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Favorite from "./pages/favorite";

// REACT_APP_UNSPLASH_ACCESS
// REACT_APP_UNSPLASH_SECRET

function App() {
  const [inputValue, setInputValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [query, setQuery] = useState("galaxy");
  const [isPopup, setIsPopup] = useState(false);

  const globalStates = {
    inputValue,
    setInputValue,
    pageNumber,
    setPageNumber,
    query,
    setQuery,
    isPopup,
    setIsPopup,
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home {...globalStates} />} />
          <Route path="/favorite" element={<Favorite {...globalStates} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
