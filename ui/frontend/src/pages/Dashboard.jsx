import { useEffect, useState } from "react";
import "../styles/dashboard.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import { getSecurityMetrics } from "../services/dashboardService";

function Dashboard() {

const [metrics, setMetrics] = useState({
  total_alerts: 0,
  open_incidents: 0,
  closed_incidents: 0,
  high_risk_incidents: 0,
});


useEffect(() => {
  async function loadMetrics() {
    try {
      const data = await getSecurityMetrics();
      setMetrics(data);
    } catch (error) {
      console.error(error);
    }
  }

  loadMetrics();
}, []);

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <Header />

        <div className="cards">
         <DashboardCard
  title="Total Alerts"
  value={metrics.total_alerts}
/>

<DashboardCard
  title="Open Incidents"
  value={metrics.open_incidents}
/>

<DashboardCard
  title="High Risk Incidents"
  value={metrics.high_risk_incidents}
/>

<DashboardCard
  title="Closed Incidents"
  value={metrics.closed_incidents}
/>
        </div>


<div className="dashboard-tables">

  <div className="dashboard-section">

    <h2>Recent Alerts</h2>

    <table className="dashboard-table">

      <thead>
        <tr>
          <th>Alert ID</th>
          <th>Source</th>
          <th>Severity</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>ALT-001</td>
          <td>Firewall</td>
          <td><span className="critical">Critical</span></td>
          <td><span className="open">Open</span></td>
        </tr>

        <tr>
          <td>ALT-002</td>
          <td>SIEM</td>
          <td><span className="high">High</span></td>
          <td><span className="progress">In Progress</span></td>
        </tr>

        <tr>
          <td>ALT-003</td>
          <td>IDS</td>
          <td><span className="medium">Medium</span></td>
          <td><span className="closed">Closed</span></td>
        </tr>
      </tbody>

    </table>

  </div>

  <div className="dashboard-section">

    <h2>Recent Cases</h2>

    <table className="dashboard-table">

      <thead>
        <tr>
          <th>Case ID</th>
          <th>Assigned To</th>
          <th>Priority</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>CASE-001</td>
          <td>Analyst 1</td>
          <td><span className="critical">Critical</span></td>
          <td><span className="open">Open</span></td>
        </tr>

        <tr>
          <td>CASE-002</td>
          <td>Analyst 2</td>
          <td><span className="high">High</span></td>
          <td><span className="progress">In Progress</span></td>
        </tr>

        <tr>
          <td>CASE-003</td>
          <td>Analyst 3</td>
          <td><span className="medium">Medium</span></td>
          <td><span className="closed">Closed</span></td>
        </tr>
      </tbody>

    </table>

  </div>

</div>





<div className="dashboard-section">

  <h2>Alert Severity Overview</h2>

  <div className="severity-container">

    <div className="severity-row">
      <span className="severity-label critical">Critical</span>
      <div className="severity-bar">
        <div className="severity-fill critical-fill" style={{ width: "80%" }}></div>
      </div>
      <span>9</span>
    </div>

    <div className="severity-row">
      <span className="severity-label high">High</span>
      <div className="severity-bar">
        <div className="severity-fill high-fill" style={{ width: "60%" }}></div>
      </div>
      <span>15</span>
    </div>

    <div className="severity-row">
      <span className="severity-label medium">Medium</span>
      <div className="severity-bar">
        <div className="severity-fill medium-fill" style={{ width: "40%" }}></div>
      </div>
      <span>28</span>
    </div>

    <div className="severity-row">
      <span className="severity-label low">Low</span>
      <div className="severity-bar">
        <div className="severity-fill low-fill" style={{ width: "20%" }}></div>
      </div>
      <span>12</span>
    </div>

  </div>

</div>




      </div>
   </div>
  );
}

export default Dashboard;