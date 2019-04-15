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
  };

  handleNew = () => {
    this.handleClose();
    this.props.setLocalStorage();
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
          <Modal.Body>
            OOPS! You lost the winstreak !<br />
            You earned {this.props.points} Points
          </Modal.Body>
          <Modal.Footer>
            <Link to="/">
              <Button variant="secondary" onClick={this.handleNew}>
                Home
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default GameOverPopup;
