import React, { Component } from "react";
import MemeCard from "./components/MemeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import memes from "./memes.json";

class App extends Component {
  // Setting the variables in our state
  state = {
    memes,
    score: 0,
    topscore: 0,
  };

  // using the template from the 
  selectMeme = id => {
    this.state.memes.find( (a, b) => {
      // for every item in the JSON
      if (a.id === id) {
        // if the clicked property is false do this (which they are all false by default)
        if (memes[b].clicked === false) {
          // change clicked property to true
          memes[b].clicked = true;
          // add one to the score
          this.setState({ memes, score: this.state.score + 1 });
          // sort memes in a new random order
          memes.sort(() => Math.random() - 0.5);
          return true;
        }
        else {
          // else call the restart function that will restart the game as well as score
          this.restart();
        }
      };
    })
  };

   // this will restart the game (score back to zero and save topscore)
   restart = () => {
    // if score is greater than topscore do this
    if (this.state.score > this.state.topscore) {
      // using setState save the score to topscore if score is greater than topscore
      this.setState({ topscore: this.state.score });
      // set all the json items back to false
      this.state.memes.forEach(friend => {
        friend.clicked = false;
      });
      // create an alert that tells you to try again
      alert("You lose, try again to beat your high score!");
      // set the score back to zero
      this.setState({ score: 0 });
      return true;
    };
  };

  render() {
    return (
      <Wrapper>
        <Title>React Memory Game
          <br></br>
          Score: {this.state.score}
          <br></br>
          High Score: {this.state.topscore}
        </Title>
        {this.state.memes.map(friend => (
          <MemeCard
            selectMeme={this.selectMeme}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
};

export default App;
