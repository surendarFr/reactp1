import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/UserSlice";
import { Input } from "semantic-ui-react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.users.searchTerm);

  return (
    <Input
      fluid
      icon="search"
      placeholder="Search by first or last name..."
      value={searchTerm}
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
    />
  );
};

export default SearchBar;
