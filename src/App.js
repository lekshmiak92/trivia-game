import React, { Component } from "react";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import Question from "./components/question";
import AnswerChoice from "./components/answerChoice";
import NextButton from "./components/nextButton";
import GameStatistics from "./components/gameStatistics";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "hi hi hi",
      answer: "",
      wrongAnswers: [],
      choicesArray: [],
      chosenAnswer: "",
      clickStatus: "off",
      choseCorrectAnswer: false,
      points: 0
    };
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions = () => {
    fetch(
      `https://opentdb.com/api.php?amount=1&category=10&difficulty=easy&type=multiple`
    )
      .then(res => res.json())
      .then(apiData => {
        console.log(apiData);
        this.setState({
          question: apiData.results[0].question,
          answer: apiData.results[0].correct_answer,
          wrongAnswers: apiData.results[0].incorrect_answers,
          clickStatus: "off",
          choseCorrectAnswer: false
        });

        this.shuffleChoices();
      });
  };

  shuffleChoices = () => {
    let choiceArray = this.state.wrongAnswers.concat(this.state.answer);
    console.log(choiceArray);
    choiceArray = choiceArray.sort((a, b) => {
      return 0.5 - Math.random();
    });

    this.setState({
      choicesArray: choiceArray
    });
    console.log(choiceArray);
  };

  handleOptionClick = e => {
    let chosenOption = e.target.textContent;

    if (chosenOption === this.state.answer) {
      this.setState({
        clickStatus: "on",
        choseCorrectAnswer: true,
        chosenAnswer: chosenOption,
        points: this.state.points + 20
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

  handleClickOfNext = () => {
    console.log("clicked next");
    this.getQuestions();
  };

  render() {
    return (
      <div className="App">
        <Container>
          <GameStatistics gamePoints={this.state.points} />
          <Row>
            <Question ques={this.state.question} />
          </Row>

          <AnswerChoice
            answerOption={this.state.choicesArray[0]}
            handleClick={this.handleOptionClick}
            chosenAnswer={this.state.chosenAnswer}
            revealresult={this.state.choseCorrectAnswer}
            clickStatus={this.state.clickStatus}
            correctAnswer={this.state.answer}
          />

          <AnswerChoice
            answerOption={this.state.choicesArray[1]}
            handleClick={this.handleOptionClick}
            chosenAnswer={this.state.chosenAnswer}
            revealresult={this.state.choseCorrectAnswer}
            clickStatus={this.state.clickStatus}
            correctAnswer={this.state.answer}
          />

          <AnswerChoice
            answerOption={this.state.choicesArray[2]}
            handleClick={this.handleOptionClick}
            chosenAnswer={this.state.chosenAnswer}
            revealresult={this.state.choseCorrectAnswer}
            clickStatus={this.state.clickStatus}
            correctAnswer={this.state.answer}
          />

          <AnswerChoice
            answerOption={this.state.choicesArray[3]}
            handleClick={this.handleOptionClick}
            chosenAnswer={this.state.chosenAnswer}
            revealresult={this.state.choseCorrectAnswer}
            clickStatus={this.state.clickStatus}
            correctAnswer={this.state.answer}
          />

          <NextButton
            text="Next"
            clickStatus={this.state.clickStatus}
            onClickOfNext={this.handleClickOfNext}
            choseCorrectAnswer={this.state.choseCorrectAnswer}
          />
        </Container>
      </div>
    );
  }
}

export default App;
