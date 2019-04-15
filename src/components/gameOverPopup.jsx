import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

class GameOverPopup extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  handleClose = () => {
    this.setState({ show: false });
    let gamePath = `/game/${Date.now()}`;

    this.props.prophistory.push(gamePath);
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 2000);
  }

  render() {
    return (
      <>
        <Modal show={this.state.show} centered>
          <Modal.Header>
            <Modal.Title>Game Over</Modal.Title>
          </Modal.Header>
          <Modal.Body>OOPS! You lost the winstreak !</Modal.Body>
          <Modal.Footer>
            <Link to="/">
              <Button variant="secondary" onClick={this.handleClose}>
                Home
              </Button>
            </Link>

            <Button variant="primary" onClick={this.handleClose}>
              New game
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default GameOverPopup;
