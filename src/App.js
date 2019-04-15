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
      question: "Loading...",
      answer: "",
      wrongAnswers: [],
      choicesArray: [],
      chosenAnswer: "",
      clickStatus: "off",
      choseCorrectAnswer: false,
      points: 0,
      currentQuestion: 0,
      userName: "",
      totalPoints: 0,
      userLevel: ""
    };
  }

  componentDidMount() {
    this.getQuestions();
    this.fetchGameData();
  }

  getQuestions = () => {
    fetch(
      `https://opentdb.com/api.php?amount=1&category=10&difficulty=easy&type=multiple`
    )
      .then(res => res.json())
      .then(apiData => {
        this.setState({
          question: apiData.results[0].question,
          answer: apiData.results[0].correct_answer,
          wrongAnswers: apiData.results[0].incorrect_answers,
          clickStatus: "off",
          choseCorrectAnswer: false,
          currentQuestion: this.state.currentQuestion + 1
        });

        this.shuffleChoices();
      });
  };

  shuffleChoices = () => {
    let choiceArray = this.state.wrongAnswers.concat(this.state.answer);
    choiceArray = choiceArray.sort((a, b) => {
      return 0.5 - Math.random();
    });

    this.setState({
      choicesArray: choiceArray
    });
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
    } else {
      this.setState({
        clickStatus: "on",
        choseCorrectAnswer: false,
        chosenAnswer: chosenOption
      });
    }
  };

  handleClickOfNext = () => {
    this.getQuestions();
  };

  storeGameData = () => {
    let userData = {
      name: this.state.userName,
      points: this.state.points + this.state.totalPoints
    };
    console.log("current State:", userData);

    window.localStorage.setItem("trivia", JSON.stringify(userData));
  };

  fetchGameData = () => {
    const gameData = JSON.parse(window.localStorage.getItem("trivia"));
    if (gameData) {
      this.setState({
        userName: gameData.name,
        totalPoints: gameData.points
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Container>
          <GameStatistics
            gamePoints={this.state.points}
            currentQuestion={this.state.currentQuestion}
          />
          <Row>
            <Question ques={this.state.question} />
          </Row>
          {this.state.choicesArray.map((element, index) => (
            <AnswerChoice
              key={index}
              answerOption={element}
              handleClick={this.handleOptionClick}
              chosenAnswer={this.state.chosenAnswer}
              revealresult={this.state.choseCorrectAnswer}
              clickStatus={this.state.clickStatus}
              correctAnswer={this.state.answer}
              prophistory={this.props.history}
              points={this.state.points}
              setLocalStorage={this.storeGameData}
            />
          ))}

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
