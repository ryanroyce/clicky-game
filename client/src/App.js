import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score:0,
    topscore:0
  };

  removeFriend = id => {
    // takes the friends array and sorts the pictures into a random order
    friends.sort(() => Math.random() - .5);
    
    this.setState({ friends, score: this.state.score +1 });
  };

  render() {
    return (
      <Wrapper>
        <Title>Friends List Score: { this.state.score}</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
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
}

export default App;
