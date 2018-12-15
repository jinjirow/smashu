import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import { BASE_URL, getCharacterIcon } from './utilities/characterHelper.js';
import './App.css';

class App extends Component {
  getCharacterData = (cid) => {
    axios.get(BASE_URL + "characters/" + cid)
    .then(res => {
      const character = res.data;
      console.log("Index: " + cid + ", Selected: " + character.Name)
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

export class CharacterSelectionGrid extends Component {
  constructor(props){
    super(props);
    this.state = {characters: []}
    this.getCharacterData = props.getCharacterData.bind(this)
  }
  componentDidMount(){
    axios.get(BASE_URL + "characters")
    .then(res => {
      const characterResponse = res.data;
      var characters = [];
      for(var characterIndex in characterResponse){
        characters.push({ name: characterResponse[characterIndex].Name, cid: characterResponse[characterIndex].OwnerId});
      }
      console.log(JSON.stringify(characters))
      this.setState({ characters: characters });
    })
  }
  render(){
    return(
      <div className="grid-container">
      {
        this.state.characters.map((character) =>
          <div className={ "grid-item" + " characters "}>
            <img src={getCharacterIcon(character.cid)} onClick={() => this.getCharacterData(character.cid)}/>
          </div>
        )
      }
      </div>
    )
  }
}

export default App;
