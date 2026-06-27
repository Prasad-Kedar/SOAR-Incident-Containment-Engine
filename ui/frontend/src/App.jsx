import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Alerts from "./pages/Alerts";
import Cases from "./pages/Cases";
import Responses from "./pages/Responses";
import Notifications from "./pages/Notifications";
import Reports from "./pages/Reports";
import ThreatIntel from "./pages/ThreatIntel";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
     <Routes>

  <Route
    path="/login"
    element={<Login />}
  />

  <Route
    path="/"
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />

  <Route
    path="/alerts"
    element={
      <ProtectedRoute>
        <Alerts />
      </ProtectedRoute>
    }
  />

  <Route
    path="/cases"
    element={
      <ProtectedRoute>
        <Cases />
      </ProtectedRoute>
    }
  />

  <Route
    path="/responses"
    element={
      <ProtectedRoute>
        <Responses />
      </ProtectedRoute>
    }
  />

  <Route
    path="/notifications"
    element={
      <ProtectedRoute>
        <Notifications />
      </ProtectedRoute>
    }
  />

  <Route
    path="/reports"
    element={
      <ProtectedRoute>
        <Reports />
      </ProtectedRoute>
    }
  />

  <Route
    path="/threat-intel"
    element={
      <ProtectedRoute>
        <ThreatIntel />
      </ProtectedRoute>
    }
  />

</Routes>
    </BrowserRouter>
  );
}

export default App;