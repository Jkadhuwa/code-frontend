import React, { Fragment, useState } from "react";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { Col, Button, Form, Label, Input } from "reactstrap";
import jwt from "jwt-decode";
import { Redirect } from "react-router-dom";
import { createBlog } from "../../redux/actions/Article";
import "../../css/Auth.scss";
import "react-quill/dist/quill.snow.css";

const CreateArticle = ({ publishBlog }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    body: ""
  });

  const onChange = event =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const onSubmit = event => {
    event.preventDefault();
    if (!title || !description || !body) {
      return toast.error("Please fill in all fields", {
        position: toast.POSITION.TOP_CENTER
      });
    }
    publishBlog({ title, description, body });
  };

  const { title, description, body } = formData;
  const token = localStorage.getItem("token");
  let isAuthenticated;
  if (jwt(token)) {
    isAuthenticated = true;
  }
  if (!isAuthenticated) {
    return <Redirect to={{ pathname: "/signin" }} />;
  }

  return (
    <Form>
      <div className="form-group mt-5">
        <Col className="mb-2" sm={{ size: 8, offset: 2 }}>
          <Label for="title">Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            value={title}
            placeholder="Silicon valley of Africa"
            onChange={onChange}
          />
        </Col>
        <Col className="mb-3" sm={{ size: 8, offset: 2 }}>
          <textarea
            onChange={onChange}
            name="description"
            className="form-control mt-4"
            value={description}
            id="description"
            rows="5"
            placeholder="Enter a catchy description..."
          />
        </Col>
        <Col className="mb-3" sm={{ size: 8, offset: 2 }}>
          <textarea
            onChange={onChange}
            name="body"
            className="form-control mt-4"
            value={body}
            id="body"
            rows="10"
            placeholder="Publish your story..."
          />
        </Col>

        <div className="row justify-content-center mt-5 ">
          <Button color="primary" type="button" onClick={onSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </Form>
  );
};

const mapDispatchToProps = {
  publishBlog: createBlog
};
export default connect(null, mapDispatchToProps)(CreateArticle);
