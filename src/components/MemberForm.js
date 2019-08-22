import React, { useState } from "react";

import styled from "styled-components";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  background: #fff;
  margin: 2rem auto;
  padding: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  color: #4a4a4a;
  margin-bottom: 1rem;
`;

const Field = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  color: #4a4a4a;
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 0.8rem;
`;

const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  padding: 1rem 0;
`;

const TextArea = styled.textarea`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 2px;
`;

const Button = styled.button`
  color: #4a4a4a;
  font-weight: 600;
  padding: 0.5rem;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 2px;
`;

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

  //   const randomMember = { ...member, ["name"]: "Chris" };
  //   console.log(randomMember);

  const SubmitForm = event => {
    event.preventDefault();
    // created id property for use as a key, can be used to find the location of an item in a list
    const newMember = { ...member, id: Date.now() };
    // takes an object as a argument and adds it to the memberList
    props.addMember(newMember);
  };

  return (
    // When submitting the form, we want it to run the function that adds the new object to the list of members
    <FormWrapper>
      <Title>Team Builder</Title>
      <Form className="form" onSubmit={SubmitForm}>
        <Field>
          <Label htmlFor="name">Name: </Label>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={member.name}
            onChange={changeHandler}
          />
        </Field>

        <Field>
          <Label htmlFor="email">Email: </Label>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={member.email}
            onChange={changeHandler}
          />
        </Field>

        <Field>
          <Label htmlFor="role">Role: </Label>
          <Input
            type="text"
            name="role"
            placeholder="Role"
            value={member.role}
            onChange={changeHandler}
          />
        </Field>

        <Field>
          <Label htmlFor="bio">Bio: </Label>
          <TextArea
            type="text"
            name="bio"
            placeholder="Bio"
            value={member.bio}
            onChange={changeHandler}
          />
        </Field>

        <Button type="submit">Add New Member</Button>
      </Form>
    </FormWrapper>
  );
};

export default MemberForm;
