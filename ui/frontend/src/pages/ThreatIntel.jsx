import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";

import {
  getMaliciousThreats,
  getThreatStats,
} from "../services/dashboardService";

function ThreatIntel() {

  const [threats, setThreats] = useState([]);
  const [stats, setStats] = useState({});

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    async function loadData() {

      try {

        const threatData =
          await getMaliciousThreats();

        setThreats(threatData);

        const statsData =
          await getThreatStats();

        setStats(statsData);

      } catch (err) {

        console.error(err);

        setError(
          "Failed to load threat intelligence"
        );

      } finally {

        setLoading(false);

      }
    }

    loadData();

  }, []);

  if (loading) {
    return <h2>Loading Threat Intelligence...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <MainLayout>

      <h1 className="page-title">
        Threat Intelligence
      </h1>

      <div className="cards">

        <div className="card">
          <h3>Malicious</h3>
          <h2>{stats.malicious}</h2>
        </div>

        <div className="card">
          <h3>Safe</h3>
          <h2>{stats.safe}</h2>
        </div>

      </div>

      <table className="cases-table">

        <thead>

          <tr>
            <th>ID</th>
            <th>IP Address</th>
            <th>Risk Score</th>
          </tr>

        </thead>

        <tbody>

          {threats.map((item) => (

            <tr key={item.id}>

              <td>{item.id}</td>

              <td>{item.src_ip}</td>

              <td>{item.risk_score}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </MainLayout>
  );
}

export default ThreatIntel;