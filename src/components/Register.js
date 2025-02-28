import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Message, Container, Header } from "semantic-ui-react";

const Register = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Email validation function
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setError("Invalid email format!");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData)); // Save user in local storage
    alert("User registered successfully! You can now log in.");
    navigate("/login");
  };

  return (
    <Container text style={{ marginTop: "50px" }}>
      <Header as="h2" textAlign="center">Create Account</Header>
      <Form onSubmit={handleRegister}>
        <Form.Input
          fluid
          label="Email"
          placeholder="Enter your email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <Form.Input
          fluid
          label="Password"
          placeholder="Enter your password"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        {error && <Message negative>{error}</Message>}
        <Button positive fluid type="submit">Register</Button>
      </Form>
      <Message>
        Already have an account? <Button basic color="blue" onClick={() => navigate("/login")}>Login</Button>
      </Message>
    </Container>
  );
};

export default Register;
