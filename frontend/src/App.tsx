import { useEffect, useState } from "react";

type HealthResponse = {
  status: string;
};

function App() {
  const [status, setStatus] = useState("Checking API...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/health/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API request failed");
        }

        return response.json() as Promise<HealthResponse>;
      })
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("API unavailable"));
  }, []);

  return (
    <main>
      <h1>Django + React</h1>
      <p>Backend status: {status}</p>
    </main>
  );
}

export default App;
