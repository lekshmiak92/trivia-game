import React, { Component } from "react";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import Question from "./components/question";
import AnswerChoice from "./components/answerChoice";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "hi hi hi",
      answer: "",
      choicesArray: [],
      chosenAnswer: "",
      clickStatus: "off",
      choseCorrectAnswer: false
    };
  }

  componentDidMount() {
    fetch(
      `https://opentdb.com/api.php?amount=1&category=10&difficulty=easy&type=multiple`
    )
      .then(res => res.json())
      .then(apiData => {
        console.log(apiData);
        this.setState({
          question: apiData.results[0].question,
          answer: apiData.results[0].correct_answer,
          choicesArray: apiData.results[0].incorrect_answers,

          choseCorrectAnswer: false
        });
      });
  }

  handleOptionClick = e => {
    let chosenOption = e.target.textContent;

    if (chosenOption === this.state.answer) {
      this.setState({
        clickStatus: "on",
        choseCorrectAnswer: true,
        chosenAnswer: chosenOption
      });
      console.log(this.state.choseCorrectAnswer);
    } else {
      this.setState({
        clickStatus: "on",
        choseCorrectAnswer: false,
        chosenAnswer: chosenOption
      });
      console.log(this.state.choseCorrectAnswer);
    }
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Question ques={this.state.question} />
          </Row>
          <Row>
            <AnswerChoice
              answerOption={this.state.answer}
              handleClick={this.handleOptionClick}
              chosen_answer={this.state.chosenAnswer}
              revealresult={this.state.choseCorrectAnswer}
              click_status={this.state.clickStatus}
            />
            <AnswerChoice
              answerOption={this.state.choicesArray[0]}
              handleClick={this.handleOptionClick}
              chosen_answer={this.state.chosenAnswer}
              revealresult={this.state.choseCorrectAnswer}
              click_status={this.state.clickStatus}
            />
          </Row>
          <Row>
            <AnswerChoice
              answerOption={this.state.choicesArray[1]}
              handleClick={this.handleOptionClick}
              chosen_answer={this.state.chosenAnswer}
              revealresult={this.state.choseCorrectAnswer}
              click_status={this.state.clickStatus}
            />
            <AnswerChoice
              answerOption={this.state.choicesArray[2]}
              handleClick={this.handleOptionClick}
              chosen_answer={this.state.chosenAnswer}
              revealresult={this.state.choseCorrectAnswer}
              click_status={this.state.clickStatus}
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
