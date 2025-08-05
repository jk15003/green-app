import React, { useState } from "react";
import { connect } from "react-redux";
import actions from "../redux/actions/actions";

function HomePage({ 
  color = "green",
  incrementCounter,
  decrementCounter,
  counter
}) {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    const event = new CustomEvent("greenMessage", {
      detail: { message },
      bubbles: true,
    });
    window.dispatchEvent(event); 
    setMessage("");
  };

  return (
    <div
      data-testid='main-wrapper-green'
      style={{
        backgroundColor: color,
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        gap: "1rem",
        padding: 20,
        transition: "all 0.3s ease-in-out"
      }}
    >
      <h2>Green App</h2>
      <input
        type="text"
        value={message}
        placeholder="Type a message to red-app"
        onChange={(e) => setMessage(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "none",
          outline: "none",
          width: "300px",
          fontSize: "1rem"
        }}
      />
      <button
        onClick={sendMessage}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "white",
          color: color,
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.2s ease"
        }}
      >
        Send to Red
      </button>
      <button
        onClick={()=>incrementCounter(counter)}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "white",
          color: color,
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.2s ease"
        }}
      >
        Increment Counter
      </button>
      <button
        onClick={()=>decrementCounter(counter)}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "white",
          color: color,
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.2s ease"
        }}
      >
        Decrement Counter
      </button>
      <h2>Counter number(from green's reducer):{counter}</h2>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  incrementCounter: (counter)=> dispatch(actions.incrementCounter(counter)),
  decrementCounter: (counter)=> dispatch(actions.decrementCounter(counter)),
})  

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
