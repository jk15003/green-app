import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CalculatorPage() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCalculation = (operation) => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      setError("Please enter valid numbers.");
      setResult(null);
      return;
    }

    let res;
    setError("");

    switch (operation) {
      case "+":
        res = numA + numB;
        break;
      case "-":
        res = numA - numB;
        break;
      case "*":
        res = numA * numB;
        break;
      case "/":
        if (numB === 0) {
          setError("Division by zero is not allowed.");
          setResult(null);
          return;
        }
        res = numA / numB;
        break;
      default:
        return;
    }

    setResult(res);
  };

  const reset = () => {
    setA("");
    setB("");
    setResult(null);
    setError("");
  };

  return (
    <div
      style={{
        backgroundColor: "#006400",
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        padding: 20,
      }}
    >
      <h2>Green Calculator:</h2>

      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        placeholder="Enter number A"
        style={{
          padding: "10px",
          borderRadius: "8px",
          width: "200px",
          border: "1px solid white",
          background: "transparent",
          color: "white",
        }}
      />

      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        placeholder="Enter number B"
        style={{
          padding: "10px",
          borderRadius: "8px",
          width: "200px",
          border: "1px solid white",
          background: "transparent",
          color: "white",
        }}
      />

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <button onClick={() => handleCalculation("+")}>+</button>
        <button onClick={() => handleCalculation("-")}>−</button>
        <button onClick={() => handleCalculation("*")}>×</button>
        <button onClick={() => handleCalculation("/")}>÷</button>
        <button onClick={reset}>Reset</button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {result !== null && <p style={{ fontSize: "1.2rem" }}>Result: {result}</p>}

      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "1rem",
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#aaa",
          color: "#006400",
          border: "none",
          borderRadius: "8px",
        }}
      >
        Back to Home
      </button>

      <style>{`
        button {
          padding: 10px 20px;
          font-size: 1rem;
          background-color: white;
          color: #006400;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        button:hover {
          background-color: #f0f0f0;
        }
      `}</style>
    </div>
  );
}

export default CalculatorPage;
