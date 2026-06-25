import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Alerts from "./pages/Alerts";
import Cases from "./pages/Cases";
import Responses from "./pages/Responses";
import Notifications from "./pages/Notifications";
import Reports from "./pages/Reports";
import ThreatIntel from "./pages/ThreatIntel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/responses" element={<Responses />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/threat-intel" element={<ThreatIntel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;