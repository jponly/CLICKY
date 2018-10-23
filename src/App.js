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
    score: 0,
    winLose: ""
  };

  chooseFriend = id => {
    // conditional for picks //
    let tempArray = this.state.picked;
    if (tempArray.indexOf(id) >= 0) {
      alert("incorrect");
    } else {
      tempArray.push(id);
      alert("correct");

      // this.setState({winLose: tempArray});

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

        <Navbar>
          {this.state.score}
          {this.state.winLose}
        </Navbar>

        <Title>CLICKY</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            chooseFriend={this.chooseFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
         
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
