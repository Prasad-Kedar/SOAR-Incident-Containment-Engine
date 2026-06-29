import { Link, useNavigate  } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {

  const navigate = useNavigate();

function handleLogout() {

  localStorage.removeItem("token");

  navigate("/login");

}

  return (
    <div className="sidebar">
      <h2>🛡 SOAR</h2>

      <nav>
      
        <Link to="/">Dashboard</Link>
        <Link to="/alerts">Alerts</Link>
        <Link to="/cases">Cases</Link>
        <Link to="/responses">Responses</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/threat-intel">Threat Intel</Link>
        <button
         className="logout-btn"
         onClick={handleLogout}>Logout
       </button>
      </nav>
    </div>
  );
}

export default Sidebar;