import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/UserSlice";
import { Form, Button, Input } from "semantic-ui-react";

const AddUser = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email) {
      dispatch(addUser(formData));
      setFormData({ firstName: "", lastName: "", email: "" });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>First Name</label>
        <Input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        />
      </Form.Field>

      <Form.Field>
        <label>Last Name</label>
        <Input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        />
      </Form.Field>

      <Form.Field>
        <label>Email</label>
        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </Form.Field>

      <Button type="submit" primary>
        Add User
      </Button>
    </Form>
  );
};

export default AddUser;
