import axios from "axios";

export default function EmployeeCard({ employee, onDelete }) {
  const handleDelete = async () => {
    if (!window.confirm(`Remove ${employee.name}?`)) return;
    await axios.delete(`/api/employees/${employee.id}`);
    onDelete();
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 10,
        padding: "1.25rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        borderLeft: "4px solid #4a90d9",
      }}
    >
      <h3 style={{ marginBottom: "0.25rem" }}>{employee.name}</h3>
      <p style={{ color: "#4a90d9", fontSize: "0.9rem" }}>{employee.role}</p>
      <p style={{ color: "#666", fontSize: "0.85rem", marginTop: "0.25rem" }}>
        {employee.department}
      </p>
      <p style={{ color: "#999", fontSize: "0.8rem" }}>{employee.email}</p>
      <button
        onClick={handleDelete}
        style={{
          marginTop: "0.75rem",
          background: "none",
          border: "1px solid #e53e3e",
          color: "#e53e3e",
          borderRadius: 6,
          padding: "0.3rem 0.75rem",
          cursor: "pointer",
          fontSize: "0.8rem",
        }}
      >
        Remove
      </button>
    </div>
  );
}
