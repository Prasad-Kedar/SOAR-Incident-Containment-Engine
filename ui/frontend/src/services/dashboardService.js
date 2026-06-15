const BASE_URL = "http://127.0.0.1:8000";

export async function getSecurityMetrics() {
  const response = await fetch(
    `${BASE_URL}/dashboard/security-metrics`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch security metrics");
  }

  return response.json();
}