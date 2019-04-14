import React from "react";
import Row from "react-bootstrap/Row";
import "../App.css";

const GameStatistics = props => {
  return (
    <Row className="statistics">
      <span className="gamePoints">{props.gamePoints}</span>
    </Row>
  );
};

export default GameStatistics;
