import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  searchTerm: "",
  viewType: "list",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, updatedUser } = action.payload;
      const index = state.users.findIndex((user) => user.id === id);
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...updatedUser };
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    toggleView: (state) => {
      state.viewType = state.viewType === "list" ? "card" : "list";
    },
  },
});

export const { addUser, updateUser, setSearchTerm, toggleView } = userSlice.actions;
export default userSlice.reducer;
