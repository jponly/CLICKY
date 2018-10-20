import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import "./App.css";

class App extends Component {

  state = {
    friends,
    picked: [],
    score: 0

  };

  chooseFriend = id => {
    // conditional for picks //
    let tempArray = this.state.picked;
    if (tempArray.indexOf(id) >= 0) {
      alert("You lose");
    } else {
      tempArray.push(id);
      alert("You won");

      // score //
      this.setState(prevState => {
        return { score: prevState.score + 1 }
      });
    }

    // shuffles cards //
    this.setState({ picked: tempArray });
    let copyArray = [...friends];
    for (let i = copyArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]];

    }
    this.setState({ friends: copyArray });
  };



  render() {
    return (
      <Wrapper>

        <Navbar>{this.state.score}</Navbar>



        <Title>Click Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            chooseFriend={this.chooseFriend}
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
