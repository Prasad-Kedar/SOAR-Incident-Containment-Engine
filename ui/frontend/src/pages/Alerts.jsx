import MainLayout from "../layouts/MainLayout";
import "../styles/alerts.css";
import { useEffect, useState } from "react";
import { getAlerts,   getIncidentIntel,  notifyIncident, } from "../services/dashboardService";

function Alerts() {


const [alerts, setAlerts] = useState([]);
const [intelData, setIntelData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");


useEffect(() => {
  async function loadData() {
    try {

      const data = await getAlerts();
      setAlerts(data);

    } catch (err) {

      console.error(err);
      setError("Failed to load alerts");

    } finally {

      setLoading(false);

    }
  }

  loadData();
}, []);


if (loading) {
  return <h2>Loading Alerts...</h2>;
}

if (error) {
  return <h2>{error}</h2>;
}


async function handleIntel(id) {

  try {

    const data = await getIncidentIntel(id);

    setIntelData(data);

  } catch (error) {

    console.error(error);

  }
}

async function handleNotify(id) {

  try {

    const data = await notifyIncident(id);

    alert(data.message);

  } catch (error) {

    console.error(error);

  }
}

  return (
    <MainLayout>
      <h1 className="page-title">Alerts</h1>

      <div className="alert-toolbar">
        <input
          type="text"
          placeholder="Search alerts..."
          className="search-input"
        />

        <select className="filter-select">
          <option>All Severity</option>
          <option>Critical</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select className="filter-select">
          <option>All Status</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Closed</option>
        </select>

        <button className="search-btn">
          Search
        </button>
      </div>

      <table className="alerts-table">

    <thead>
        <tr>
            <th>Alert ID</th>
            <th>Source</th>
            <th>Severity</th>
            <th>Status</th>
            <th>Time</th>
            <th>Action</th>
        </tr>
    </thead>

    <tbody>
  {alerts.map((alert) => (
    <tr key={alert.id}>
      <td>{alert.id}</td>

      <td>{alert.src_ip}</td>

      <td>
        <span className={alert.severity?.toLowerCase()}>
          {alert.severity}
        </span>
      </td>

      <td>
        <span className={alert.status?.toLowerCase()}>
          {alert.status}
        </span>
      </td>

      <td>{alert.timestamp}</td>

      <td>
       <>
  <button
    className="view-btn"
    onClick={() => handleIntel(alert.id)}
  >
    Intel
  </button>

  <button
    className="search-btn"
    onClick={() => handleNotify(alert.id)}
    style={{ marginLeft: "8px" }}
  >
    Notify
  </button>
</>
      </td>
    </tr>
  ))}
</tbody>

</table>


{intelData && (

  <div className="dashboard-section">

    <h2>Threat Intelligence</h2>

    <p>
      <strong>Incident ID:</strong>
      {intelData.incident_id}
    </p>

    <p>
      <strong>Source IP:</strong>
      {intelData.src_ip}
    </p>

    <p>
      <strong>Risk Score:</strong>
      {intelData.risk_score}
    </p>

    <p>
      <strong>Threat:</strong>
      {intelData.threat ? "Malicious" : "Safe"}
    </p>

  </div>

)}

    </MainLayout>
  );
}

export default Alerts;