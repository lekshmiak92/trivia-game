import React, { Component } from "react";
import "../App.css";
import Card from "react-bootstrap/Card";

class AnswerChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (
      this.props.click_status === "on" &&
      this.props.revealresult === true &&
      this.props.chosen_answer === this.props.answerOption
    ) {
      return (
        <Card className="answerWrap bg-green " onClick={this.props.handleClick}>
          <Card.Body className="noPadding">{this.props.answerOption}</Card.Body>
        </Card>
      );
    } else if (
      this.props.click_status === "on" &&
      this.props.revealresult === false &&
      this.props.chosen_answer === this.props.answerOption
    ) {
      return (
        <Card className="answerWrap bg-red " onClick={this.props.handleClick}>
          <Card.Body className="noPadding">{this.props.answerOption}</Card.Body>
        </Card>
      );
    } else {
      return (
        <Card className="answerWrap" onClick={this.props.handleClick}>
          <Card.Body className="noPadding">{this.props.answerOption}</Card.Body>
        </Card>
      );
    }
  }
}

export default AnswerChoice;
