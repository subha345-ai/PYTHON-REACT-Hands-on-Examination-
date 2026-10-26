import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  const [colorName, setColorName] = useState("None");

  const changeColor = (name, value) => {
    setColor(value);
    setColorName(name);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f0f2f5", textAlign: "center", padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#333", marginBottom: "30px" }}>Color Changer App</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "30px" }}>
        <button onClick={() => changeColor("Red", "#e74c3c")} style={{ padding: "12px 24px", background: "#e74c3c", color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer" }}>Red</button>
        
        <button onClick={() => changeColor("Green", "#27ae60")} style={{ padding: "12px 24px", background: "#27ae60", color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer" }}>Green</button>
        
        <button onClick={() => changeColor("Blue", "#2980b9")} style={{ padding: "12px 24px", background: "#2980b9", color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer" }}>Blue</button>
      </div>

      <div style={{ width: "300px", height: "200px", margin: "0 auto", border: "3px solid #333", borderRadius: "12px", backgroundColor: color, display: "flex", alignItems: "center", justifyContent: "center", transition: "background-color 0.4s ease" }}>
        <p style={{ background: "rgba(255,255,255,0.85)", padding: "8px 16px", borderRadius: "6px", fontWeight: "bold", color: "#333" }}>
          Selected Color: {colorName}
        </p>
      </div>
    </div>
  );
}

export default App;