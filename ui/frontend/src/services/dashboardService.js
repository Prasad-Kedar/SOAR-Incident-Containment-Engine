const BASE_URL = "http://127.0.0.1:8000";

export async function getSecurityMetrics() {
  const response = await fetch(
    `${BASE_URL}/dashboard/security-metrics`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch metrics");
  }

  return response.json();
}

export async function getRecentAlerts() {
  const response = await fetch(
    `${BASE_URL}/dashboard/recent`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch alerts");
  }

  return response.json();
}

export async function getIncidentTrends() {
  const response = await fetch(
    `${BASE_URL}/dashboard/trends`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch trends");
  }

  return response.json();
}


export async function getRecentCases() {
  const response = await fetch(
    `${BASE_URL}/dashboard/recent-cases`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recent cases");
  }

  return response.json();
}


export async function getResponseMetrics() {
  const response = await fetch(
    `${BASE_URL}/dashboard/response-metrics`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch response metrics");
  }

  return response.json();
}



export async function getAlerts() {
  const response = await fetch(`${BASE_URL}/alerts`);

  if (!response.ok) {
    throw new Error("Failed to fetch alerts");
  }

  return response.json();
}