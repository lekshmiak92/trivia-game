import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";

const Question = props => {
  return (
    <Card className="quesCard">
      <Card.Body>
        <pre>{props.ques}</pre>
      </Card.Body>
    </Card>
  );
};

export default Question;
