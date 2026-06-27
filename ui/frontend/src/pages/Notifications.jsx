import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import { getNotifications } from "../services/dashboardService";

function Notifications() {

  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadNotifications() {
    try {
      setLoading(true);

      const data = await getNotifications();

      setNotifications(data);
      setError("");

    } catch (err) {
      console.error(err);
      setError("Failed to load notifications");

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
     loadNotifications();
  }, []);

  if (loading) {
    return <h2>Loading Notifications...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <MainLayout>

      <h1 className="page-title">Notifications</h1>

      <button
        className="search-btn"
        onClick={loadNotifications}
        style={{ marginBottom: "20px" }}
      >
        Refresh
      </button>

      <table className="cases-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Incident ID</th>
            <th>Recipient</th>
            <th>Status</th>
            <th>Timestamp</th>
          </tr>
        </thead>

        <tbody>
          {notifications.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.incident_id}</td>
              <td>{item.recipient}</td>
              <td>{item.status}</td>
              <td>{item.timestamp}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </MainLayout>
  );
}

export default Notifications;