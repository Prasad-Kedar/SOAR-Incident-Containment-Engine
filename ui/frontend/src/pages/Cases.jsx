import MainLayout from "../layouts/MainLayout";
import "../styles/cases.css";

function Cases() {
  return (
    <MainLayout>
      <h1 className="page-title">Cases</h1>

      <div className="case-toolbar">

        <input
          type="text"
          placeholder="Search cases..."
          className="search-input"
        />

        <select className="filter-select">
          <option>All Priority</option>
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

      <table className="cases-table">

        <thead>

          <tr>
            <th>Case ID</th>
            <th>Alert ID</th>
            <th>Assigned To</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Created</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>CASE-001</td>
            <td>ALT-001</td>
            <td>Analyst 1</td>
            <td><span className="critical">Critical</span></td>
            <td><span className="open">Open</span></td>
            <td>09:30 AM</td>
            <td><button className="view-btn">View</button></td>
          </tr>

          <tr>
            <td>CASE-002</td>
            <td>ALT-004</td>
            <td>Analyst 2</td>
            <td><span className="high">High</span></td>
            <td><span className="progress">In Progress</span></td>
            <td>10:15 AM</td>
            <td><button className="view-btn">View</button></td>
          </tr>

          <tr>
            <td>CASE-003</td>
            <td>ALT-008</td>
            <td>Analyst 3</td>
            <td><span className="medium">Medium</span></td>
            <td><span className="closed">Closed</span></td>
            <td>11:00 AM</td>
            <td><button className="view-btn">View</button></td>
          </tr>

        </tbody>

      </table>

    </MainLayout>
  );
}

export default Cases;