import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "./slice/Slice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailError, setIsEmailError] = useState("");
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "email") {
      validation(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault(); // ✅ Prevent default form submission

    dispatch(setUsers(input));
    setInput({ name: "", age: "", email: "", contact: "" });

    toast.success("Submitted successfully!", { position: "top-center" });
  }

  function validation(value) {
    const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexp.test(value)) {
      setIsEmailValid(true);
      setIsEmailError("");
    } else {
      setIsEmailValid(false);
      setIsEmailError("Invalid email format");
    }
  }

  function fieldIsFilled() {
    return input.name && input.age && input.email && input.contact;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}> {/* ✅ Added onSubmit */}
        <div>
          <label htmlFor="name">Enter your name</label>
          <input type="text" name="name" value={input.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="age">Enter your age</label>
          <input type="number" name="age" value={input.age} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Enter your email</label>
          <input type="email" name="email" value={input.email} onChange={handleChange} />
          {isEmailError && <div style={{ color: "red" }}>{isEmailError}</div>}
        </div>
        <div>
          <label htmlFor="contact">Enter your contact</label>
          <input type="number" name="contact" value={input.contact} onChange={handleChange} />
        </div>
        <div>
          <button type="submit" disabled={!fieldIsFilled()}> {/* ✅ Changed to type="submit" */}
            Submit
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}

export default Home;
