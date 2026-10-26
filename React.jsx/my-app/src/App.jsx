import { useState } from "react";

function App() {
  const [student, setStudent] = useState({ name: "", email: "", course: "" });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(student);
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea, #764ba2)", padding: "40px 20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: "480px", margin: "0 auto", background: "#fff", padding: "30px", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}>
        <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>Student Registration Form</h1>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ margin: "10px 0 5px", fontWeight: "bold", color: "#555" }}>Student Name</label>
          <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Enter your name" required style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />

          <label style={{ margin: "10px 0 5px", fontWeight: "bold", color: "#555" }}>Email</label>
          <input type="email" name="email" value={student.email} onChange={handleChange} placeholder="Enter your email" required style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />

          <label style={{ margin: "10px 0 5px", fontWeight: "bold", color: "#555" }}>Course</label>
          <input type="text" name="course" value={student.course} onChange={handleChange} placeholder="Enter your course" required style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />

          <button type="submit" style={{ marginTop: "20px", padding: "12px", background: "#667eea", color: "#fff", border: "none", borderRadius: "6px", fontSize: "16px", cursor: "pointer" }}>Submit</button>
        </form>

        {submitted && (
          <div style={{ marginTop: "25px", padding: "15px", background: "#f4f6ff", borderLeft: "4px solid #667eea", borderRadius: "6px" }}>
            <h2 style={{ marginTop: 0, color: "#333" }}>Submitted Details</h2>
            <p><strong>Name:</strong> {submitted.name}</p>
            <p><strong>Email:</strong> {submitted.email}</p>
            <p><strong>Course:</strong> {submitted.course}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;