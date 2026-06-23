import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";

import {
  getIncidentReport,
  getSeverityReport,
  getAnalystReport,
} from "../services/dashboardService";

function Reports() {

  const [incidentReport, setIncidentReport] = useState({});
  const [severityReport, setSeverityReport] = useState({});
  const [analystReport, setAnalystReport] = useState({});
  const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

 useEffect(() => {
  async function loadData() {
    try {

      const incidents = await getIncidentReport();
      setIncidentReport(incidents);

      const severity = await getSeverityReport();
      setSeverityReport(severity);

      const analysts = await getAnalystReport();
      setAnalystReport(analysts);

    } catch (err) {

      console.error(err);
      setError("Failed to load reports");

    } finally {

      setLoading(false);

    }
  }

  loadData();
}, []);

  const maxSeverity = Math.max(
  severityReport.critical || 0,
  severityReport.high || 0,
  severityReport.medium || 0,
  severityReport.low || 0,
  1
);


if (loading) {
  return <h2>Loading Reports...</h2>;
}

if (error) {
  return <h2>{error}</h2>;
}

  return (
    <MainLayout>

      <h1 className="page-title">Reports</h1>

      <div className="cards">

  <DashboardCard
    title="Total Incidents"
    value={incidentReport.total_incidents || 0}
  />

  <DashboardCard
    title="Open Incidents"
    value={incidentReport.open_incidents || 0}
  />

  <DashboardCard
    title="Closed Incidents"
    value={incidentReport.closed_incidents || 0}
  />

</div>

      <div className="dashboard-section">

  <h2>Severity Report</h2>

  <div className="severity-container">

    <div className="severity-row">
      <span className="severity-label critical">Critical</span>
      <div className="severity-bar">
        <div
          className="severity-fill critical-fill"
          style={{
            width: `${(severityReport.critical / maxSeverity) * 100}%`,
          }}
        ></div>
      </div>
      <span>{severityReport.critical}</span>
    </div>

    <div className="severity-row">
      <span className="severity-label high">High</span>
      <div className="severity-bar">
        <div
          className="severity-fill high-fill"
          style={{
            width: `${(severityReport.high / maxSeverity) * 100}%`,
          }}
        ></div>
      </div>
      <span>{severityReport.high}</span>
    </div>

    <div className="severity-row">
      <span className="severity-label medium">Medium</span>
      <div className="severity-bar">
        <div
          className="severity-fill medium-fill"
          style={{
            width: `${(severityReport.medium / maxSeverity) * 100}%`,
          }}
        ></div>
      </div>
      <span>{severityReport.medium}</span>
    </div>

    <div className="severity-row">
      <span className="severity-label low">Low</span>
      <div className="severity-bar">
        <div
          className="severity-fill low-fill"
          style={{
            width: `${(severityReport.low / maxSeverity) * 100}%`,
          }}
        ></div>
      </div>
      <span>{severityReport.low}</span>
    </div>

  </div>

</div>

<div className="dashboard-section">

  <h2>Analyst Report</h2>

  <table className="dashboard-table">

    <thead>
      <tr>
        <th>Analyst</th>
        <th>Assigned Incidents</th>
      </tr>
    </thead>

    <tbody>
      {Object.entries(analystReport).map(([name, count]) => (
        <tr key={name}>
          <td>{name}</td>
          <td>{count}</td>
        </tr>
      ))}
    </tbody>

  </table>

</div>
    </MainLayout>
  );
}

export default Reports;