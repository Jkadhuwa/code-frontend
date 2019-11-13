import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  Col,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { getBlogs } from "../../redux/actions/Article";
import Navbar from "./Navbar";
import "../../css/App.scss";
export class LandingPage extends Component {
  componentDidMount() {
    const { getBlogs } = this.props;
    getBlogs();
  }
  render() {
    const { articles } = this.props;

    return (
      <div>
        <Navbar />
        <Col className="mb-3" sm={{ size: 8, offset: 2 }}>
          {articles
            ? articles.map(article => (
                <Card body className="mt-2">
                  <CardBody>
                    <h4>
                      <CardTitle className="font-weight-bold">
                        {article.title}
                      </CardTitle>
                    </h4>
                    <h5>
                      <CardSubtitle className="card-subtitle mb-2 text-muted">
                        {article.description}
                      </CardSubtitle>
                    </h5>
                    <CardText>{article.body}</CardText>
                  </CardBody>
                </Card>
              ))
            : "Welcome to UniNet Blog system. Put your thought and ideas into action!!!!!!"}
        </Col>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles.articles
});
const mapDispatchToProps = {
  getBlogs
};
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
