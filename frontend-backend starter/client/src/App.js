import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  const backEndConnection = async () => {
    try {
      const res = await axios.get("/api");
      setBackendData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    backEndConnection();
  }, []);

  return (
    <div className="App">
      {(typeof backendData.users === "undefined") ? (
        <p>Loading ...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        )
      ))}
    </div>
  );
}

export default App;
