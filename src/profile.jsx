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
    this.state = {
      userName: "",
      totalPoints: 0
    };
  }
  componentDidMount() {
    const gameData = JSON.parse(window.localStorage.getItem("trivia"));
    if (gameData) {
      this.setState({
        userName: gameData.name,
        totalPoints: gameData.points
      });
    }
  }
  getMasteryLevel = () => {
    if (this.state.totalPoints <= 500) {
      return "Beginner";
    } else if (this.state.totalPoints > 500 && this.state.totalPoints <= 1000) {
      return "Expert";
    } else if (
      this.state.totalPoints > 1000 &&
      this.state.totalPoints <= 1500
    ) {
      return "Genius";
    } else {
      return "Champion";
    }
  };
  render() {
    return (
      <Container>
        <div className="progCard">
          <Row>
            <Col>
              <img src={ProfileIcon} className="profileIcon" alt="John" />
              <h3>{this.state.userName}</h3>
            </Col>
            <Col className="progressCard">
              <h3>Progress</h3>
              <div className="statItem">
                <img src={Star} className="statIcon" alt="stars" />
                <span className="gamePoints">{this.getMasteryLevel()}</span>
              </div>
              <div className="statItem">
                <img src={Points} className="statIcon" alt="total points" />
                <span className="gamePoints">{this.state.totalPoints}</span>
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
