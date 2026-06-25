import MainLayout from "../layouts/MainLayout";
import "../styles/cases.css";
import { useEffect, useState } from "react";
import { getCases } from "../services/dashboardService";


function Cases() {

const [cases, setCases] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
  async function loadData() {
    try {

      const data = await getCases();
      setCases(data);

    } catch (err) {

      console.error(err);
      setError("Failed to load cases");

    } finally {

      setLoading(false);

    }
  }

  loadData();
}, []);


if (loading) {
  return <h2>Loading Cases...</h2>;
}
if (error) {
  return <h2>{error}</h2>;
}

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
  {cases.map((item) => (
    <tr key={item.case_id}>
      <td>{item.case_id}</td>
      <td>-</td>
      <td>{item.assigned_to || "Unassigned"}</td>
      <td>{item.priority}</td>
      <td>{item.status}</td>
      <td>{item.created_time}</td>
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

export default Cases;