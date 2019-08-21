import React, { useState } from "react";
import MemberForm from "./components/MemberForm";
import "./App.scss";

function App() {
  const [team, setTeam] = useState([]);

  return (
    <div className="App">
      <MemberForm />
    </div>
  );
}

export default App;
