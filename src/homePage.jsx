import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Modal, Form, Col } from "react-bootstrap";
import "./App.css";
import Logo from "./triviaLogo.png";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      nameInput: ""
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 1000);
  }

  handleSubmit = () => {
    this.setState({
      show: false
    });

    let userData = {
      name: this.state.nameInput,
      points: 0
    };

    window.localStorage.setItem("trivia", JSON.stringify(userData));
  };

  nameInputChange = e => {
    this.setState({ nameInput: e.target.value });
  };

  checkForLocalStorage = () => {
    const gameData = JSON.parse(window.localStorage.getItem("trivia"));
    if (!gameData) {
      return (
        <Modal show={this.state.show} centered>
          <Modal.Header>
            <Modal.Title>Welcome to TRIVIA</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            What can we call you ?
            <Form>
              <Form.Row>
                <Col>
                  <Form.Control
                    placeholder="Name"
                    onChange={this.nameInputChange}
                  />
                </Col>
              </Form.Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Link to="/">
              <Button variant="secondary" onClick={this.handleSubmit}>
                Submit
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <>
        <Container className="App">
          <img src={Logo} className="logo" alt="game logo" />
          <div className="setMargin">
            <Link to="/game/">
              <Button variant="outline-primary">Start Game</Button>
            </Link>
          </div>
          <div className="setMargin">
            <Link to="/profile/">
              <Button variant="outline-primary"> Profile</Button>
            </Link>
          </div>
          <div className="setMargin">
            <Link to="/howToPlay/">
              <Button variant="outline-primary"> How to Play</Button>
            </Link>
          </div>
        </Container>
        {this.checkForLocalStorage()}
      </>
    );
  }
}

export default HomePage;
