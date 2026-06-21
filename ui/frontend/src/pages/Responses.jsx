import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import { getResponses } from "../services/dashboardService";

function Responses() {

  const [responses, setResponses] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getResponses();
        setResponses(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadData();
  }, []);

  return (
    <MainLayout>
      <h1 className="page-title">Responses</h1>

      <table className="cases-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Incident ID</th>
            <th>Action Type</th>
            <th>Status</th>
            <th>Timestamp</th>
          </tr>
        </thead>

        <tbody>
          {responses.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.incident_id}</td>
              <td>{item.action_type}</td>
              <td>{item.status}</td>
              <td>{item.timestamp}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </MainLayout>
  );
}

export default Responses;