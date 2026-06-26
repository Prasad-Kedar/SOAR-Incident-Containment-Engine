import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";

import {
  getMaliciousThreats,
  getThreatStats,
  getThreat,
  getIOC,
} from "../services/dashboardService";
function ThreatIntel() {

  const [threats, setThreats] = useState([]);
  const [stats, setStats] = useState({});

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [ip, setIp] = useState("");

  const [threatResult, setThreatResult] =
  useState(null);

  const [iocResult, setIocResult] =
  useState(null);

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

 async function handleThreatLookup() {

  try {

    const data =
      await getThreat(ip);

    setThreatResult(data);

  } catch (error) {

    console.error(error);

  }
}

async function handleIOCCheck() {

  try {

    const data =
      await getIOC(ip);

    setIocResult(data);

  } catch (error) {

    console.error(error);

  }
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

      <div className="dashboard-section">

  <h2>IP Lookup</h2>

  <input
    type="text"
    placeholder="Enter IP Address"
    value={ip}
    onChange={(e) =>
      setIp(e.target.value)
    }
    className="search-input"
  />

  <button
    className="search-btn"
    onClick={handleThreatLookup}
  >
    Threat Lookup
  </button>

  <button
    className="search-btn"
    onClick={handleIOCCheck}
    style={{ marginLeft: "10px" }}
  >
    IOC Check
  </button>

</div>

{threatResult && (

  <div className="dashboard-section">

    <h2>Threat Result</h2>

    <p>
      IP: {threatResult.ip}
    </p>

    <p>
      Risk Score:
      {threatResult.risk_score}
    </p>

    <p>
      Threat:
      {threatResult.threat
        ? "Malicious"
        : "Safe"}
    </p>

  </div>

)}

{iocResult && (

  <div className="dashboard-section">

    <h2>IOC Result</h2>

    <p>
      IP: {iocResult.ip}
    </p>

    <p>
      Risk Score:
      {iocResult.risk_score}
    </p>

    <p>
      Threat:
      {iocResult.threat
        ? "Malicious"
        : "Safe"}
    </p>

  </div>

)}

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