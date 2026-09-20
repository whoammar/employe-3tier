import { useState } from "react";
import axios from "axios";

const DEPARTMENTS = ["Engineering", "HR", "Finance", "Marketing", "Operations"];

export default function AddEmployeeForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    department: "Engineering",
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.role) {
      alert("Please fill in all fields.");
      return;
    }
    setSaving(true);
    try {
      await axios.post("/api/employees", form);
      setForm({ name: "", email: "", role: "", department: "Engineering" });
      onAdd();
    } finally {
      setSaving(false);
    }
  };

  const field = (key, placeholder, type = "text") => (
    <input
      type={type}
      placeholder={placeholder}
      value={form[key]}
      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
      style={{
        padding: "0.5rem 0.75rem",
        border: "1px solid #ddd",
        borderRadius: 6,
        fontSize: "0.9rem",
      }}
    />
  );

  return (
    <div
      style={{
        background: "#fff",
        padding: "1.25rem",
        borderRadius: 10,
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        marginBottom: "1.5rem",
      }}
    >
      <h2 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>Add Employee</h2>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        {field("name", "Full Name")}
        {field("email", "Email", "email")}
        {field("role", "Job Title")}
        <select
          value={form.department}
          onChange={(e) => setForm({ ...form, department: e.target.value })}
          style={{
            padding: "0.5rem 0.75rem",
            border: "1px solid #ddd",
            borderRadius: 6,
            fontSize: "0.9rem",
          }}
        >
          {DEPARTMENTS.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
        <button
          onClick={handleSubmit}
          disabled={saving}
          style={{
            background: "#4a90d9",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "0.5rem 1.25rem",
            fontSize: "0.9rem",
            cursor: saving ? "not-allowed" : "pointer",
            opacity: saving ? 0.7 : 1,
          }}
        >
          {saving ? "Saving..." : "Add"}
        </button>
      </div>
    </div>
  );
}
