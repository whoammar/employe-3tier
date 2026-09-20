import { useState, useEffect } from "react";
import axios from "axios";
import EmployeeList from "./components/EmployeeList.jsx";
import AddEmployeeForm from "./components/AddEmployeeForm.jsx";

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/employees");
      setEmployees(res.data);
      setError(null);
    } catch (err) {
      setError("Could not reach the API. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "2rem" }}>
      <header
        style={{
          marginBottom: "2rem",
          borderBottom: "2px solid #4a90d9",
          paddingBottom: "1rem",
        }}
      >
        <h1 style={{ fontSize: "2rem", color: "#1a1a2e" }}>
          Employee Directory
        </h1>
        <p style={{ color: "#666", marginTop: "0.25rem" }}>Internal HR Tool</p>
      </header>

      <AddEmployeeForm onAdd={fetchEmployees} />

      {loading && <p style={{ color: "#888" }}>Loading...</p>}
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      {!loading && !error && (
        <EmployeeList employees={employees} onDelete={fetchEmployees} />
      )}
    </div>
  );
}

export default App;
