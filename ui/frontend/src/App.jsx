import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Alerts from "./pages/Alerts";
import Cases from "./pages/Cases";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/cases" element={<Cases />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;