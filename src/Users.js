import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUsers } from "./slice/Slice";
const Users = () => {
  const dispatch = useDispatch();
  const users=useSelector((state)=>(state.user.users))
  console.log(users);
  function handelDelete(index) {
    dispatch(deleteUsers(index));
  }
  console.log(users.name)
        

  return (
    <div clasName="user">
      <h1>user Details</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Button</th>
        </tr>
      </table>
      {users?.map((val,index) => {
        return (
          <div key={index}>
            <tr>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.email}</td>
              <td>{val.contact}</td>
              <td><button onClick={()=>{handelDelete(index)}}>delete</button></td>
            </tr>
          </div>
         
        );
        
      })}
    </div>
  );
};

export default Users;
