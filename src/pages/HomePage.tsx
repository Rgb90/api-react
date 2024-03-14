import React from "react";
import { useLoaderData } from "react-router-dom";
import { UserType } from "../types";
import { Col, Row } from "react-bootstrap";
import User from "../components/User";

const HomePage = () => {
  const pageData = useLoaderData() as UserType[];
  return (
    <Row className="row-gap-2 p-5">
      {pageData.map((user) => (
        <Col key={user.id} sm={12} md={6} lg={4} xl={3}>
          <User user={user} />
        </Col>
      ))}
    </Row>
  );
};

export default HomePage;
