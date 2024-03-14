import React from "react";
import { UserType } from "../types/index";
import { Button, Card } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Placeholder from 'react-bootstrap/Placeholder';

const User = ({ user }: { user: UserType }) => {
  return (
    <Card border="success" className="my-4 p-4 h-100 rounded shadow">
      <a href={`/users/${user.id}`}>

      </a>
      <Card.Header>
        <strong>{user.name}</strong>
      </Card.Header>
      <Card.Body>
        {/* <Card.Title as="div">Merhaba</Card.Title> */}
        <Card.Text>
          <p className="text-muted"><strong>Username:</strong> {user.username} <br />
            <strong>Street:</strong> {user.address.street} <br />
            <strong>City:</strong> {user.address.city} <br />
            <strong>Company:</strong> {user.company.name} <br />
            <strong>Phone:</strong> {user.phone}</p>
        </Card.Text>
        <Button variant="success" href={"/users/" + user.id}>Go User</Button>
      </Card.Body>
    </Card>

  );
};

export default User;
