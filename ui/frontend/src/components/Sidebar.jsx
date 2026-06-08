import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "#1f2937",
        color: "white",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h2>SOAR</h2>

      <nav style={{ marginTop: "30px" }}>
        <p>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Dashboard
          </Link>
        </p>

        <p>
          <Link to="/alerts" style={{ color: "white", textDecoration: "none" }}>
            Alerts
          </Link>
        </p>

        <p>
          <Link to="/cases" style={{ color: "white", textDecoration: "none" }}>
            Cases
          </Link>
        </p>
      </nav>
    </div>
  );
}

export default Sidebar;