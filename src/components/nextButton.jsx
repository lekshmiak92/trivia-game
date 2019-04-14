import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import "../App.css";

const NextButton = props => {
  if (props.clickStatus === "on" && props.choseCorrectAnswer) {
    return (
      <Row className="navWrap">
        <Button variant="primary" onClick={props.onClickOfNext}>
          {props.text}
        </Button>
      </Row>
    );
  } else {
    return (
      <Row className="navWrap">
        <Button variant="primary" onClick={props.onClickOfNext} disabled>
          {props.text}
        </Button>
      </Row>
    );
  }
};

export default NextButton;
