import React from "react";

const Members = props => {
  return (
    <div className="member-list">
      {props.memberList.map(member => {
        return (
          <div key={member.id} className="member">
            <h1>{member.name}</h1>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
            <p>Bio: {member.bio}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Members;
