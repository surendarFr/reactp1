import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleView } from "./redux/UserSlice";
import { Container, Menu, Button } from "semantic-ui-react";
import SearchBar from "./components/Searchbar";
import UserList from "./components/UserList";
import UserCard from "./components/UserCard";
import Pagination from "./components/Pagination";
import AddUser from "./components/AddUser";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
import { type } from "@testing-library/user-event/dist/cjs/utility/index.js";

const App = () => {
  const dispatch = useDispatch();
  const { viewType, users, searchTerm } = useSelector((state) => state.users);
  const usersPerPage = 5;

  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredUsers.length / usersPerPage);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/login"; // Redirect to login after logout
  };

  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <Router>
      {/* Navbar */}
      <Menu inverted>
        <Menu.Item as={Link} to="/users">Users</Menu.Item>
        <Menu.Item as={Link} to="/add-user">Add User</Menu.Item>
        {!isAuthenticated ? (
          <>
            <Menu.Item as={Link} to="/login">Login</Menu.Item>
            <Menu.Item as={Link} to="/register">Register</Menu.Item>
          </>
        ) : (
          <Menu.Item position="right">
            <Button color="red" onClick={handleLogout}>Logout</Button>
          </Menu.Item>
        )}
      </Menu>

      <Container style={{ marginTop: "20px" }}>
        <Routes>
          {/* Default page: Redirect to Login */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Login & Register Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Add User Page (Private) */}
          <Route path="/add-user" element={
            <PrivateRoute>
              <AddUser />
            </PrivateRoute>
          } />

          {/* Users Page with Toggle View (Private) */}
          <Route path="/users" element={
  <PrivateRoute>
    <div>
      <h2>Users Page</h2>
      <SearchBar />
      <Button
        primary
        onClick={() => dispatch(toggleView())}
        style={{ marginBottom: "10px" }}
      >
        Toggle to {viewType === "list" ? "Card" : "List"} View
      </Button>

      {viewType === "list" ? <UserList users={filteredUsers} /> : <UserCard users={filteredUsers} />}

      {/* Updated Pagination Styling */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px",  listStyle:"none" }}>
  <Pagination pageCount={pageCount} handlePageClick={({ selected }) => {}}  />
</div>



    </div>
  </PrivateRoute>
} />

        </Routes>
      </Container>
    </Router>
  );
};

export default App;
