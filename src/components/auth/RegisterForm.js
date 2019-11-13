import React from 'react';
import { Button, Form, Label, Input, Col } from 'reactstrap';
const Register = ({ onChange, onSubmit, data }) => {
  return (
    <Form onSubmit={onSubmit}>
      <div className="form-group">
        <Col sm={{ size: 6, offset: 3 }}>
          <Label for="firstName">First Name</Label>
          <Input
            type="firstName"
            name="firstName"
            id="firstName"
            value={data.firstName}
            placeholder="John"
            onChange={onChange}
          />
        </Col>
        <Col sm={{ size: 6, offset: 3 }}>
          <Label for="lastName">Last Name</Label>
          <Input
            type="lastName"
            name="lastName"
            id="lastName"
            value={data.lastName}
            placeholder="Doe"
            onChange={onChange}
          />
        </Col>
        <Col sm={{ size: 6, offset: 3 }}>
          <Label for="userName">Username</Label>
          <Input
            type="userName"
            name="userName"
            id="userName"
            value={data.userName}
            placeholder="JDoe12"
            onChange={onChange}
          />
        </Col>
        <Col sm={{ size: 6, offset: 3 }}>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={data.email}
            placeholder="example@gmail.com"
            onChange={onChange}
          />
        </Col>
        <Col sm={{ size: 6, offset: 3 }}>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={data.password}
            placeholder="jkadhuwa12345678"
            onChange={onChange}
          />
        </Col>
        <Col sm={{ size: 6, offset: 3 }}>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={data.confirmPassword}
            placeholder="jkadhuwa12345678"
            onChange={onChange}
          />
        </Col>
        <div className="row justify-content-center mt-3">
          <Button color="primary" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default Register;
