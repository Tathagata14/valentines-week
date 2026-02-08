import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RoseDay from "./components/RoseDay";
import ProposeDay from "./components/ProposeDay";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rose-day" element={<RoseDay />} />
        <Route path="/propose-day" element={<ProposeDay />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
