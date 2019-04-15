import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import "./App.css";
import Logo from "./triviaLogo.png";
// import Idea from "./idea.svg";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let gamePath = `/game/${Date.now()}`;

    return (
      <Container className="App">
        <img src={Logo} className="logo" alt="game logo" />
        <div className="setMargin">
          <Link to={gamePath}>
            <Button variant="outline-primary">
              {/* <span>
                <img src={Idea} />
              </span> */}
              Start Game
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/profile/">
            <Button variant="outline-primary"> Profile</Button>
          </Link>
        </div>
      </Container>
    );
  }
}

export default HomePage;
