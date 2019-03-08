import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting the variables in our state
  state = {
    friends,
    score: 0,
    topscore: 0,
  };

  // using the template from the 
  selectFriend = id => {
    this.state.friends.find((a, b) => {
      // for every item in the JSON
      if (a.id === id) {
        // if the clicked property is false do this (which they are all false by default)
        if (friends[b].clicked === false) {
          // change clicked property to true
          friends[b].clicked = true;
          // add one to the score
          this.setState({ friends, score: this.state.score + 1 });
          // sort friends in a new random order
          friends.sort(() => Math.random() - 0.5);
          return true;
        }
        else {
          // else call the restart function that will restart the game as well as score
          this.restart();
        }
      }
    })
  };

   // this will restart the game (score back to zero and save topscore)
   restart = () => {
    // if score is greater than topscore do this
    if (this.state.score > this.state.topscore) {
      // using setState save the score to topscore if score is greater than topscore
      this.setState({ topscore: this.state.score });
      // set all the json items back to false
      this.state.friends.forEach(friend => {
        friend.clicked = false;
      });
      // create an alert that tells you to try again
      alert("You lose, try again to beat your high score!");
      // set the score back to zero
      this.setState({ score: 0 });
      return true;
    };
  };

  // // remove friend will add 1 to the score and randomize the order of the pictures
  // selectFriend = id => {
  //   // takes the friends array and sorts the pictures into a random order
  //   friends.sort(() => Math.random() - .5);

  //   this.setState({ friends, score: this.state.score +1 });
  // };

  render() {
    return (
      <Wrapper>
        <Title>React Memory Game
          <br></br>
          Score: {this.state.score}
          <br></br>
          High Score: {this.state.topscore}
        </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            selectFriend={this.selectFriend}
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
