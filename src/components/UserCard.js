import React, { useState } from "react";
import { Card, Button, Image } from "semantic-ui-react";
import EditUser from "./EditUser";

const UserCard = ({ users }) => {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  return (
    <>
      <Card.Group>
        {users.map((user) => (
          <Card key={user.id}>
            <Image src={user.image || "https://via.placeholder.com/150"} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{user.firstName} {user.lastName}</Card.Header>
              <Card.Meta>{user.email}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button color="blue" onClick={() => handleEdit(user)}>Edit</Button>
              <Button color="red">Delete</Button>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>

      {selectedUser && (
        <EditUser open={open} setOpen={setOpen} user={selectedUser} />
      )}
    </>
  );
};

export default UserCard;
