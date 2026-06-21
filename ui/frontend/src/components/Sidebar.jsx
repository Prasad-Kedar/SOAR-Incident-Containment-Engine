import { Link } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>🛡 SOAR</h2>

      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/alerts">Alerts</Link>
        <Link to="/cases">Cases</Link>
        <Link to="/responses">Responses</Link>
      </nav>
    </div>
  );
}

export default Sidebar;