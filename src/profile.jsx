import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, Button } from "react-bootstrap";
import Star from "./favourites.svg";
import Points from "./score.svg";
import ProfileIcon from "./users.svg";
import "./profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <div className="progCard">
          <Row>
            <Col>
              <img src={ProfileIcon} className="profileIcon" alt="John" />
              <h3>User Name</h3>
              <p className="title">Beginner</p>
              <p>XXX points</p>
            </Col>
            <Col className="progressCard">
              <h3>Progress</h3>
              <div className="statItem">
                <img src={Star} className="statIcon" alt="stars" />
                <span className="gamePoints">34</span>
              </div>
              <div className="statItem">
                <img src={Points} className="statIcon" alt="total points" />
                <span className="gamePoints">3465654</span>
              </div>
              <div>
                <Link to="/">
                  <Button variant="danger">Home</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Profile;
