import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Message, Container, Header } from "semantic-ui-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Email validation function
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError("Invalid email format!");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/users"); // Redirect to Users page after login
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <Container text style={{ marginTop: "50px" }}>
      <Header as="h2" textAlign="center">Login</Header>
      <Form onSubmit={handleLogin}>
        <Form.Input
          fluid
          label="Email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Form.Input
          fluid
          label="Password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <Message negative>{error}</Message>}
        <Button primary fluid type="submit">Login</Button>
      </Form>
      <Message>
        Don't have an account? <Button basic color="blue" onClick={() => navigate("/register")}>Sign Up</Button>
      </Message>
    </Container>
  );
};

export default Login;
