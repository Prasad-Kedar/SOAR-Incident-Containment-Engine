import MainLayout from "../layouts/MainLayout";
import "../styles/alerts.css";
import { useEffect, useState } from "react";
import { getAlerts,   getIncidentIntel,  notifyIncident,  blockIp,
  isolateHost,   assignIncident, } from "../services/dashboardService";

function Alerts() {


const [alerts, setAlerts] = useState([]);
const [intelData, setIntelData] = useState(null);
const [selectedAlert, setSelectedAlert] = useState(null);
const [analystName, setAnalystName] = useState("");
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


async function handleIntel(alert) {

  try {

    const data = await getIncidentIntel(alert.id);

    setSelectedAlert(alert);

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

async function handleBlockIp(id) {

  try {

    const data = await blockIp(id);

    alert(data.message);

  } catch (error) {

    console.error(error);

  }
}

async function handleIsolateHost(id) {

  try {

    const data = await isolateHost(id);

    alert(data.message);

  } catch (error) {

    console.error(error);

  }
}

async function handleAssign() {

  if (!analystName.trim()) {
    alert("Please enter analyst name");
    return;
  }

  try {

    const data = await assignIncident(
      selectedAlert.id,
      analystName
    );

    alert(data.message);

    setAnalystName("");

  } catch (error) {

    console.error(error);

    alert("Failed to assign analyst");

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
      

  <td>
  <button
    className="view-btn"
    onClick={() => handleIntel(alert)}
  >
    View Incident
  </button>
</td>

</td>

    </tr>
  ))}
</tbody>

</table>


{intelData && selectedAlert && (

<div className="dashboard-section">

<h2>Incident Details</h2>

<p>
<strong>Incident ID:</strong> {selectedAlert.id}
</p>

<p>
<strong>Source IP:</strong> {selectedAlert.src_ip}
</p>

<p>
<strong>Severity:</strong> {selectedAlert.severity}
</p>

<p>
<strong>Status:</strong> {selectedAlert.status}
</p>

<p>
<strong>Risk Score:</strong> {intelData.risk_score}
</p>

<p>
<strong>Threat:</strong>{" "}
{intelData.threat ? "Malicious" : "Safe"}
</p>

<div
style={{
marginTop: "20px",
display: "flex",
gap: "10px",
flexWrap: "wrap",
}}
>

<button
className="search-btn"
onClick={() => handleNotify(selectedAlert.id)}
>
Notify
</button>

<button
className="search-btn"
onClick={() => handleBlockIp(selectedAlert.id)}
>
Block IP
</button>

<button
className="search-btn"
onClick={() => handleIsolateHost(selectedAlert.id)}
>
Isolate Host
</button>

</div>
<hr style={{ margin: "25px 0" }} />

<hr style={{ margin: "25px 0" }} />

<h3>Assign Analyst</h3>

<input
  type="text"
  placeholder="Enter Analyst Name"
  value={analystName}
  onChange={(e) =>
    setAnalystName(e.target.value)
  }
  className="search-input"
/>

<button
  className="search-btn"
  onClick={handleAssign}
  style={{ marginTop: "10px" }}
>
  Assign Analyst
</button>

<h3>Activity Timeline</h3>

<ul style={{ lineHeight: "2" }}>
  <li>✅ Alert Received</li>
  <li>✅ Threat Intelligence Retrieved</li>
  <li>✅ Response Actions Available</li>
  <li>🟡 Waiting for Analyst Action</li>
</ul>

</div>


)}
    </MainLayout>
  );
}

export default Alerts;