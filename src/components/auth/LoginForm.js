import React from 'react';
import { Button, Form, Label, Input, Col } from 'reactstrap';
// import '../../css/Auth.scss';

const Login = ({ onChange, onSubmit, data }) => {
  return (
    <Form onSubmit={onSubmit}>
      <div className="form-group">
        <Col sm={{ size: 6, offset: 3 }}>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            value={data.email}
            placeholder="example@gmail.com"
            onChange={onChange}
          />
        </Col>
        <Col sm={{ size: 6, offset: 3 }}>
          <Label for="examplePassword">Password</Label>
          <Input
            className=""
            type="password"
            name="password"
            id="examplePassword"
            value={data.password}
            placeholder="password placeholder"
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

export default Login;
