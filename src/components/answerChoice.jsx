import React, { Component } from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import GameOverPopup from "./gameOverPopup";

class AnswerChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isCorrectAnswer = () => {
    return (
      this.props.clickStatus === "on" &&
      this.props.chosenAnswer !== "" &&
      this.props.answerOption === this.props.correctAnswer
      // (this.props.revealresult === true ||
      //   this.props.answerOption === this.props.correctAnswer) ||
      // this.props.chosenAnswer === this.props.answerOption
    );
  };

  isWrongAnswer = () => {
    return (
      this.props.clickStatus === "on" &&
      this.props.revealresult === false &&
      this.props.chosenAnswer === this.props.answerOption
    );
  };
  render() {
    if (this.isCorrectAnswer()) {
      return (
        <Card className="answerWrap bg-green ">
          <Card.Body className="noPadding">{this.props.answerOption}</Card.Body>
        </Card>
      );
    } else if (this.isWrongAnswer()) {
      return (
        <>
          <Card className="answerWrap bg-red ">
            <Card.Body className="noPadding">
              {this.props.answerOption}
            </Card.Body>
          </Card>
          <GameOverPopup prophistory={this.props.prophistory} />
        </>
      );
    } else if (this.props.clickStatus === "on") {
      return (
        <Card className="answerWrap">
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
