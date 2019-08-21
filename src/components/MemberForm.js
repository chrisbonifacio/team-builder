import React from "react";

export default (Form = props => {
  return (
    <div className="form">
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" placeholder="Name" value="" />
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" placeholder="Email" />
      <label htmlFor="role">Role: </label>
      <input type="text" name="role" placeholder="Role" />
    </div>
  );
});
