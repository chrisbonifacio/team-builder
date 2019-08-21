import React from "react";

const Members = props => {
  return (
    <div className="member-list">
      {props.memberList.map(member => {
        return (
          <div className="member">
            <h1>{member.name}</h1>
            <p>{member.email}</p>
            <p>{member.role}</p>
            <p>{member.bio}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Members;
