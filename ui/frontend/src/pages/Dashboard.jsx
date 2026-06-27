import { useEffect, useState } from "react";
import "../styles/dashboard.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import {
  getSecurityMetrics,
  getRecentAlerts, getIncidentTrends,getRecentCases, getResponseMetrics,
} from "../services/dashboardService";

function Dashboard() {

const [metrics, setMetrics] = useState({
  total_alerts: 0,
  open_incidents: 0,
  closed_incidents: 0,
  high_risk_incidents: 0,
});


const [recentAlerts, setRecentAlerts] = useState([]);
const [recentCases, setRecentCases] = useState([]);

const [trends, setTrends] = useState({
  critical: 0,
  high: 0,
  medium: 0,
  low: 0,
});


const [responseMetrics, setResponseMetrics] = useState({
  total_actions: 0,
  blocked_ips: 0,
  isolated_hosts: 0,
});

const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
  async function loadData() {
    try {
      const metricsData = await getSecurityMetrics();
      setMetrics(metricsData);

      const alertsData = await getRecentAlerts();
      setRecentAlerts(alertsData);

      const trendsData = await getIncidentTrends();
      setTrends(trendsData);

      const casesData = await getRecentCases();
      setRecentCases(casesData);

      const responseData = await getResponseMetrics();
      setResponseMetrics(responseData);

    } catch (err) {
      console.error(err);
      setError("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  }

  loadData();
}, []);

const maxTrend = Math.max(
  trends.critical,
  trends.high,
  trends.medium,
  trends.low,
  1
);

if (loading) {
  return <h2>Loading Dashboard...</h2>;
}

if (error) {
  return <h2>{error}</h2>;
}

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
  {recentAlerts.map((alert) => (
    <tr key={alert.id}>
      <td>{alert.id}</td>
      <td>{alert.src_ip}</td>
      <td>{alert.severity}</td>
      <td>{alert.status}</td>
    </tr>
  ))}


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
  {recentCases.map((item) => (
    <tr key={item.case_id}>
      <td>{item.case_id}</td>
      <td>{item.assigned_to}</td>
      <td>{item.priority}</td>
      <td>{item.status}</td>
    </tr>
  ))}
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
        <div className="severity-fill critical-fill" style={{ width: `${(trends.critical / maxTrend) * 100}%`, }}></div>
      </div>
     <span>{trends.critical}</span>
    </div>

    <div className="severity-row">
      <span className="severity-label high">High</span>
      <div className="severity-bar">
        <div className="severity-fill high-fill" style={{  width: `${(trends.high / maxTrend) * 100}%`, }}></div>
      </div>
     <span>{trends.high}</span>
    </div>

    <div className="severity-row">
      <span className="severity-label medium">Medium</span>
      <div className="severity-bar">
        <div className="severity-fill medium-fill" style={{  width: `${(trends.medium / maxTrend) * 100}%`, }}></div>
      </div>
      <span>{trends.medium}</span>
    </div>

    <div className="severity-row">
      <span className="severity-label low">Low</span>
      <div className="severity-bar">
        <div className="severity-fill low-fill" style={{ width: `${(trends.low / maxTrend) * 100}%`, }}></div>
      </div>
    <span>{trends.low}</span>
    </div>

  </div>

</div>
<div className="dashboard-section">

  <h2>Response Metrics</h2>

  <div className="cards">

    <DashboardCard
      title="Total Actions"
      value={responseMetrics.total_actions}
    />

    <DashboardCard
      title="Blocked IPs"
      value={responseMetrics.blocked_ips}
    />

    <DashboardCard
      title="Isolated Hosts"
      value={responseMetrics.isolated_hosts}
    />

  </div>

</div>




      </div>
   </div>
  );
}

export default Dashboard;