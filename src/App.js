import React, { useState } from "react";
import Members from "./components/Members";
import MemberForm from "./components/MemberForm";
import "./App.scss";

function App() {
  // State
  const [memberList, setMemberList] = useState([]);

  const addMember = member => {
    // changes the state of memberList to the current list, plus the new member object
    setMemberList([...memberList, member]);
  };

  return (
    <div className="App">
      {/* passing addMember function to MemberForm component as a prop */}
      <MemberForm addMember={addMember} />

      {/* passing the state of the member list to Member component */}
      <Members memberList={memberList} />
    </div>
  );
}

export default App;
