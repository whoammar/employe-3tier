import EmployeeCard from "./EmployeeCard.jsx";

export default function EmployeeList({ employees, onDelete }) {
  if (employees.length === 0)
    return (
      <p style={{ color: "#888", marginTop: "1rem" }}>No employees found.</p>
    );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "1rem",
        marginTop: "1.5rem",
      }}
    >
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} onDelete={onDelete} />
      ))}
    </div>
  );
}
