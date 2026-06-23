import MainLayout from "../layouts/MainLayout";
import "../styles/alerts.css";
import { useEffect, useState } from "react";
import { getAlerts } from "../services/dashboardService";

function Alerts() {


const [alerts, setAlerts] = useState([]);
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
        <button className="view-btn">View</button>
      </td>
    </tr>
  ))}
</tbody>

</table>

    </MainLayout>
  );
}

export default Alerts;