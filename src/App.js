import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const url = "http://beta-api-kuroganehammer.azurewebsites.net/api/"

export const characters = [
  { path: "images/roy.png",           ownerId: 46 },
  { path: "images/bayonetta.png",     ownerId: 1  },
  { path: "images/captFalcon.png",    ownerId: 4  },
  { path: "images/bowser.png",        ownerId: 2  }
];

export function CharacterSelectionGrid(props){
  return(
    characters.map((character) =>
      <div class="grid-container">
        <img class="grid-item" src={character.path} onClick={() => props.getCharacterData(character.ownerId)}/>
      </div>
    )
  )
}

class App extends Component {
  getCharacterData = (cid) => {
    axios.get(url + "characters/" + cid)
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
  }
  render() {
    return (
      <div className="App">
        <CharacterSelectionGrid getCharacterData={this.getCharacterData}/>
      </div>
    );
  }
}

export default App;
