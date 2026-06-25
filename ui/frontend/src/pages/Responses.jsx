import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import { getResponses, blockIp,
  isolateHost, } from "../services/dashboardService";

function Responses() {

  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
  async function loadData() {
    try {

      const data = await getResponses();
      setResponses(data);

    } catch (err) {

      console.error(err);
      setError("Failed to load responses");

    } finally {

      setLoading(false);

    }
  }

  loadData();
}, []);

if (loading) {
  return <h2>Loading Responses...</h2>;
}

if (error) {
  return <h2>{error}</h2>;
}

async function handleBlockIp(incidentId) {

  try {

    await blockIp(incidentId);

    alert("IP Blocked Successfully");

    const data = await getResponses();
    setResponses(data);

  } catch (error) {

    console.error(error);

    alert("Failed to block IP");

  }
}

async function handleIsolateHost(incidentId) {

  try {

    await isolateHost(incidentId);

    alert("Host Isolated Successfully");

    const data = await getResponses();
    setResponses(data);

  } catch (error) {

    console.error(error);

    alert("Failed to isolate host");

  }
}

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
  <th>Actions</th>
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

  <td>

    <button
      className="view-btn"
      onClick={() => handleBlockIp(item.incident_id)}
    >
      Block IP
    </button>

    <button
      className="view-btn"
      onClick={() => handleIsolateHost(item.incident_id)}
      style={{ marginLeft: "8px" }}
    >
      Isolate Host
    </button>

  </td>

</tr>
          ))}
        </tbody>

      </table>
    </MainLayout>
  );
}

export default Responses;