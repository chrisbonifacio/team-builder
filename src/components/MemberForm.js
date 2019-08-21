import React, { useState } from "react";

const MemberForm = props => {
  // State
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: "",
    bio: ""
  });

  // Event Handlers
  const changeHandler = event => {
    // computed properties
    // need to use bracket notation because the value of target.name will b
    setMember({ ...member, [event.target.name]: event.target.value });

    console.log(event.target.value);
  };
  const randomMember = { ...member, ["name"]: "Chris" };
  console.log(randomMember);

  const SubmitForm = event => {
    event.preventDefault();
    // created id property for use as a key, can be used to find the location of an item in a list
    const newMember = { ...member, id: Date.now() };
    props.addMember(newMember);
  };

  return (
    <form className="form" onSubmit={SubmitForm}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={member.name}
        onChange={changeHandler}
      />

      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={member.email}
        onChange={changeHandler}
      />

      <label htmlFor="role">Role: </label>
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={member.role}
        onChange={changeHandler}
      />

      <label htmlFor="bio">Bio: </label>
      <textarea
        type="text"
        name="bio"
        placeholder="Bio"
        value={member.bio}
        onChange={changeHandler}
      />
      <button type="submit">Add New Member</button>
    </form>
  );
};

export default MemberForm;
