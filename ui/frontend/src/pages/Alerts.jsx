import MainLayout from "../layouts/MainLayout";
import "./../styles/dashboard.css";

function Alerts() {
  return (
    <MainLayout>
      <h1 className="page-title">Alerts</h1>

      <table className="alerts-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Source</th>
            <th>Severity</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>ALT-001</td>
            <td>Firewall</td>
            <td className="critical">Critical</td>
            <td>Open</td>
          </tr>

          <tr>
            <td>ALT-002</td>
            <td>SIEM</td>
            <td className="high">High</td>
            <td>Investigating</td>
          </tr>

          <tr>
            <td>ALT-003</td>
            <td>IDS</td>
            <td className="medium">Medium</td>
            <td>Closed</td>
          </tr>
        </tbody>
      </table>
    </MainLayout>
  );
}

export default Alerts;