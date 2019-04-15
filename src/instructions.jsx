import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./profile.css";

const Instructions = () => {
  return (
    <>
      <Container>
        <div className="progCard ">
          <Row>
            <Col>
              <h3>How to Play</h3>
              <ul className="textAllignLeft">
                <li>
                  You should choose the correct answer from the four multiple
                  choices given.
                </li>
                <li>
                  For each Correct answer, you get 20 points and can advance to
                  next question by clicking on next button
                </li>
                <li>
                  But once you choose wrong option at any stage , you lose the
                  game and the points earned so far will be added to your total
                  points earned.
                </li>
                <li>
                  Initially you will be holding "Beginner" badge. Earn more
                  points to Upgrade your Mastery Level
                </li>
                <li>
                  0-500 points --> Beginner <br />
                  501-1000 points --> Expert <br />
                  1001-1500 points --> Genius <br />
                  Above 1501 points --> Champion <br />
                </li>
              </ul>
              <div>
                <Link to="/">
                  <Button variant="danger">Home</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Instructions;
