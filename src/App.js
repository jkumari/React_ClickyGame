import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import Clickables from "./components/Clickables";
import Footer from "./components/Footer";
import data from "./data.json";

class App extends Component {
  state = {
    data,
    score: 0,
    topScore: 0
  };

  componentDidMount() {
    this.setState({ data: this.shuffleCharacters(this.state.data) });
  }

  resetData = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffleCharacters(resetData);
  };

  shuffleCharacters = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

  correctGuess = newData => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = newScore > topScore ? newScore : topScore;
    this.setState({
      data: this.shuffleCharacters(newData),
      score: newScore,
      topScore: newTopScore
    });

  };

  incorrectGuess = data => {
    alert("INCORRECT, your final score is " + this.state.score);
    this.setState({
      data: this.resetData(data),
      score: 0
    });
  };

  handleClickable = id => {
    let guessedCorrectly = false;
    const newData = this.state.data.map(characters => {
      const newItem = { ...characters };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.correctGuess(newData)
      : this.incorrectGuess(newData);
  };

  render() {
    return (
      <div>

        <Navbar score={this.state.score} topScore={this.state.topScore} />

        <Header />

        <Container>
          {this.state.data.map(item => (
            <Clickables
              key={item.id}
              id={item.id}
              handleClick={this.handleClickable}
              image={item.image}
            />
          ))}
        </Container>

        <Footer />

      </div>
    );
  }
}

export default App;
