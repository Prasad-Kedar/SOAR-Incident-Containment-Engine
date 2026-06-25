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



export async function getResponses() {
  const response = await fetch(
    `${BASE_URL}/responses`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch responses");
  }

  return response.json();
}


export async function getNotifications() {
  const response = await fetch(
    `${BASE_URL}/notifications`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch notifications");
  }

  return response.json();
}


export async function getIncidentReport() {
  const response = await fetch(`${BASE_URL}/reports/incidents`);

  if (!response.ok) {
    throw new Error("Failed to fetch incident report");
  }

  return response.json();
}

export async function getSeverityReport() {
  const response = await fetch(`${BASE_URL}/reports/severity`);

  if (!response.ok) {
    throw new Error("Failed to fetch severity report");
  }

  return response.json();
}

export async function getAnalystReport() {
  const response = await fetch(`${BASE_URL}/reports/analysts`);

  if (!response.ok) {
    throw new Error("Failed to fetch analyst report");
  }

  return response.json();
}


export async function getCases() {

  const response = await fetch(`${BASE_URL}/cases`);

  if (!response.ok) {
    throw new Error("Failed to fetch cases");
  }

  return response.json();
}


export async function getDashboardSummary() {

  const response = await fetch(
    `${BASE_URL}/dashboard/summary`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard summary");
  }

  return response.json();
}



export async function getIncidentIntel(id) {

  const response = await fetch(
    `${BASE_URL}/incident/${id}/intel`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch incident intel");
  }

  return response.json();
}


export async function assignIncident(id, analystName) {

  const response = await fetch(
    `${BASE_URL}/incident/${id}/assign/${analystName}`,
    {
      method: "PUT",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to assign incident");
  }

  return response.json();
}

export async function blockIp(incidentId) {

  const response = await fetch(
    `${BASE_URL}/response/block-ip/${incidentId}`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to block IP");
  }

  return response.json();
}

export async function isolateHost(incidentId) {

  const response = await fetch(
    `${BASE_URL}/response/isolate-host/${incidentId}`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to isolate host");
  }

  return response.json();
}