import MainLayout from "../layouts/MainLayout";
import "../styles/alerts.css";

function Alerts() {
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

        <tr>
            <td>ALT-001</td>
            <td>Firewall</td>
            <td><span className="critical">Critical</span></td>
            <td><span className="open">Open</span></td>
            <td>10:15 AM</td>
            <td><button className="view-btn">View</button></td>
        </tr>

        <tr>
            <td>ALT-002</td>
            <td>SIEM</td>
            <td><span className="high">High</span></td>
            <td><span className="progress">In Progress</span></td>
            <td>10:30 AM</td>
            <td><button className="view-btn">View</button></td>
        </tr>

        <tr>
            <td>ALT-003</td>
            <td>IDS</td>
            <td><span className="medium">Medium</span></td>
            <td><span className="closed">Closed</span></td>
            <td>11:00 AM</td>
            <td><button className="view-btn">View</button></td>
        </tr>

        <tr>
            <td>ALT-004</td>
            <td>WAF</td>
            <td><span className="low">Low</span></td>
            <td><span className="open">Open</span></td>
            <td>11:20 AM</td>
            <td><button className="view-btn">View</button></td>
        </tr>

    </tbody>

</table>

    </MainLayout>
  );
}

export default Alerts;