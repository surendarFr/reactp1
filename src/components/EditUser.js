import React, { useState } from "react";
import { Modal, Form, Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/UserSlice";

const EditUser = ({ open, setOpen, user }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(updateUser(formData));
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Modal.Header>Edit User</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Form.Input
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <Form.Input
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>Cancel</Button>
        <Button color="green" onClick={handleSave}>Save</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default EditUser;
